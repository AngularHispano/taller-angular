'use strict';

module.exports = function(app) {
  app.use('/bodegas', require('./api/bodega'));

  app.route('/*')
    .get(function(req, res) {
      res.sendFile('index.html', { root: app.get('appPath') });
    });
};
