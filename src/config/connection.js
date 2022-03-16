const mongoose = require('mongoose');

class Connection {
    constructor() {
        this.dataBaseConnectionMongoDB();
    }

    dataBaseConnectionMongoDB() {
        this.mongoDBConnection = mongoose.connect("mongodb://localhost/nodejs", {
            useNewUrlParser: true,
            useUnifiedTopology: true                       
        })
        .then(() => {
            console.log("Conexão Estabelecida com o mongoDB com Sucesso")
        })
        .catch((error) => {
            console.log(`Erro ao estabelecer conexão com mongoDB: ${error} `)
        })
    }
}

module.exports = new Connection();