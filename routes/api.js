const apiUrl = process.env.API_URL || 'http://localhost:8085';

module.exports = [{
  method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  path: '/api/{param*}',
  handler: {
    proxy: {
      passThrough: true,
      mapUri(request, callback) {
        callback(null, `${apiUrl}/${request.paramsArray[0]}`);
      }
    }
  }
}];
