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
    FIREBASE_APIKEY: 'AIzaSyBxajWQvUCYrlk5Dm6oyO5L4rqqJXcrpk8',
    FIREBASE_APPID: '1:424126691565:web:c076e3b371145844ce74e4',
  },
};
module.exports = nextConfig;
