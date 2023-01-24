/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  env: {
    HACKMD_SECRET: '3NCNWHEPWN9P5R5YTZVLYD1REWQZ8XBHE15R6F6CAY0TJRMXP',
  },
};
module.exports = nextConfig;
