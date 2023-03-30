const { Sequelize } = require ('sequelize');
const iniModels = require("..//models/init-models");
const config = require("./config");

const sequelize = new Sequelize(
    config.databases,
    config.username,
    config.password,
    config
);

sequelize.authenticate().then(() =>{
    console.log("Conexion a la base de datos completada");
}).catch(err => {
    console.log("Error con la conexion a la bd", err);
});

let models = iniModels(sequelize);

module.exports = { sequelize, models };