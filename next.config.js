const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['react-syntax-highlighter']);

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
  javascriptEnabled: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["cdn.redrock.team", 'redrock.feishu.cn'],
  },
});

