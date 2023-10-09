const sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_url) {
    sequelize = new sequelize(process.env.JAWSDB_URL);
} else {
    sequelizelize = new sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost' ,
            dialect: 'mysql' ,
            port: 3306
        }
    );
}

module.export = sequelize;