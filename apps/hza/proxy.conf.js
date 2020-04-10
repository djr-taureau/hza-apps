const CONFIG_PROXY = {
  context: ['/config'],
  target: 'https://localhost:4200',
  pathRewrite: {
    '^/config': 'assets/config/configuration.dev.json'
  },
  changeOrigin: true,
  logLevel: 'debug',
  secure: false
};

module.exports = [
  CONFIG_PROXY,
];
