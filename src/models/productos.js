const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Codigo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "Unique_Codigo"
    },
    Descripcion: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    Precio: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'productos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "Unique_Codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Codigo" },
        ]
      },
    ]
  });
};
