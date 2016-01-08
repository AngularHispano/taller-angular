'use strict';

module.exports = function(sequelize, DataTypes) {
  var Bodega = sequelize.define('bodega', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    postal: DataTypes.STRING,
    localidad: DataTypes.STRING,
    provincia: DataTypes.STRING,
    telefono: DataTypes.STRING,
    fax: DataTypes.STRING,
    web: DataTypes.STRING,
    email: DataTypes.STRING,
    registro: DataTypes.STRING,
    tipo: DataTypes.STRING
  });
  return Bodega;
};
