const Sequelize = require('sequelize')
const sequelize = new Sequelize('ecommerce-api', 'root', 'Root@1234', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("conectado com Suceso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})

module.exports = sequelize;