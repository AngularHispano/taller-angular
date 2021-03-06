'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./environment');

// Express configuration
module.exports = function(app) {
  var env = app.get('env');

  app.use(bodyParser.json());

  if ('development' === env) {
    app.use(express.static(path.join(config.root, 'client')));
    app.use('/bower_components', express.static(path.join(config.root, 'bower_components')));
    app.set('appPath', 'client');
  }
};
