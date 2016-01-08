'use strict';

var db = require('../../db');
var Bodega = db.import(__dirname + '/bodega.model.js');

exports.index = function(req, res) {
  Bodega.findAll().then(function(bodegas) {
    res.json(bodegas);
  });
};

exports.show = function(req, res) {
  Bodega.findById(req.params.id).then(function(bodega) {
    res.json(bodega);
  });
};

exports.create = function(req, res) {
  Bodega.create(req.body).then(function(bodega) {
    return res.status(201).json(bodega);
  });
};

exports.update = function(req, res) {
  Bodega.update(req.body, { where: { id: req.params.id }}).then(function(updates) {
    return res.send(updates);
  });
};

exports.destroy = function(req, res) {
  Bodega.destroy({ where: { id: req.params.id }}).then(function(deletes) {
    return res.status(204);
  });
};
