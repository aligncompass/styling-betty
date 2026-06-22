// Builds Cloudinary delivery URLs for the AlignCompass cloud. Images are
// uploaded to Cloudinary (folder per slug) by the build session via the
// Cloudinary MCP; the site only ever references delivery URLs — never a
// self-hosted binary, never a raw Unsplash/Pexels hotlink.
//
// The cloud name is the single point of account lock-in, so it is read from
// content.json (meta/cloudinary) and never hardcoded in components.

const DEFAULT_TRANSFORMS = 'f_auto,q_auto,c_fill,g_auto';

export function cldUrl(cloudName, publicId, { width, transforms = DEFAULT_TRANSFORMS } = {}) {
  if (!cloudName || !publicId) return '';
  const w = width ? `,w_${width}` : '';
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}${w}/${publicId}`;
}

export function cldSrcset(
  cloudName,
  publicId,
  { widths = [480, 768, 1024, 1440, 1920], transforms = DEFAULT_TRANSFORMS } = {},
) {
  if (!cloudName || !publicId) return '';
  return widths
    .map((w) => `${cldUrl(cloudName, publicId, { width: w, transforms })} ${w}w`)
    .join(', ');
}
