
const api = require('./api');

module.exports = [{
  method: 'GET',
  path: '/',
  handler(request, reply) {
    return reply.file('./public/index.html');
  }
}, {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: './dist',
      listing: false
    }
  }
}].concat(api);
