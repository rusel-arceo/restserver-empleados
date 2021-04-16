//const { config } = require('dotenv/types');
const mongoose = require ('mongoose');
const { config } = require('../../config/index.js');

const dbConnection = async() =>
 {
    console.log(`iniciando la coneccion, las variables valen, user:${config.user}, password:${config.password}, host:${config.dbHost}, name:${config.db_name}`);

    
    //const MONGO_URI = `mongodb://localhost/empleadosdb`;
    
    const MONGO_URI = `mongodb+srv://${config.user}:${config.password}@${config.dbHost}/${config.db_name}?retryWrites=true&w=majority`;
    
    // const MONGO_URI = `mongodb+srv://${config.user}:${config.password}@${config.dbHost}:${config.dbPort}/${config.db_name}?retryWrites=true&w=majority`
    console.log(`El URI vale:  ${MONGO_URI}`);
    try{
        await mongoose.connect(MONGO_URI,{   //Esperamos que la conección suceda
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify: false,  //DEbido a los cambios y para que funcione todo bien, por ahora es necesario.
        });  
        console.log('Base de datos corriendo');
    }catch(err)
    {
        console.log(err);
        throw new Error('Error al iniciar la base de datos');
    }

}

module.exports = {
    dbConnection  //Para compartir la conexion.
}

//Vamos a llamarlo en el sever en la parte de constructor y crearemos su propio metodo