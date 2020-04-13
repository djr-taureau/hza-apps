const CONFIG_PROXY = {
  context: ['/config'],
  target: 'http://localhost:3000',
  pathRewrite: {
    '^/config': '/config/config.local.json'
  },
  changeOrigin: true,
  logLevel: 'debug',
  secure: false
};

module.exports = [
  CONFIG_PROXY,
];
