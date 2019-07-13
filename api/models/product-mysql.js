const Sequelize = require('sequelize');
const sequelize = require('../services/mysql');

const Product = sequelize.define('products',{
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DECIMAL
    }
});

module.exports = Product;
