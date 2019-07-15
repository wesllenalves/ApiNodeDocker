const Sequelize = require('sequelize');
const MYSQL_URI = process.env.MYSQL_URI;
console.log("Url do host Mysql: "+`${MYSQL_URI}`);
const sequelize = new Sequelize('ecommerce_api', 'root', 'Root!1234', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso ao banco de dados!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})

module.exports = sequelize;