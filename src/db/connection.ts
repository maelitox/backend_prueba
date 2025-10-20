import { Sequelize } from "sequelize";

const sequelize = new Sequelize('u667686784_bd_angular', 'u667686784_rootangular', '@101178@abCD', {
    host: 'srv1147.hstgr.io',
    dialect: 'mysql'
    // logging: false
});

export default sequelize;