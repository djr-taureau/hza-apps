const CONFIG_PROXY = {
  context: ['/config'],
  target: 'http://localhost:4200',
  pathRewrite: {
    '^/config': 'assets/config/configuration.local.json'
  },
  changeOrigin: true,
  logLevel: 'debug',
  secure: true
  // secure: true
};

// const API_PROXY = {
//   context: ['/api'],
//   target: 'http://localhost:3000',
//   pathRewrite: {
//     '^/api': ''
//   },
//   changeOrigin: true,
//   logLevel: 'debug',
// };


module.exports = [
  CONFIG_PROXY
];
