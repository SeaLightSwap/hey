import { encode } from '@cfworker/base64url';

import type { Env } from '../types';

const directUrls = [
  'zora.co/api/thumbnail' // Zora
];

const getProxyUrl = (url: string, isLarge: boolean, env: Env) => {
  if (!url) {
    return null;
  }

  const isDirect = directUrls.some((directUrl) => url.includes(directUrl));

  if (isDirect) {
    return url;
  }

  const isProduction = env.WORKER_ENV === 'production';
  const workerUrl = isProduction
    ? 'https://oembed.hey.xyz'
    : 'http://localhost:8086';

  return `${workerUrl}/image?hash=${encode(url)}&transform=${
    isLarge ? 'large' : 'square'
  }`;
};

export default getProxyUrl;
