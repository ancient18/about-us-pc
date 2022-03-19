const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['react-syntax-highlighter']);
const isProd = process.env.NODE_ENV === 'production'
module.exports = withPlugins([withTM], {
  reactStrictMode: true,
  javascriptEnabled: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["cdn.redrock.team", 'redrock.feishu.cn'],
    path: 'https://fe-prod.redrock.cqupt.edu.cn/aboutus-pc',
  },
  assetPrefix: isProd ? 'https://fe-prod.redrock.cqupt.edu.cn/aboutus-pc' : '',
});

