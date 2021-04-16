const express= require('express');
const cors= require('cors');//paquete cors para permitir accesos,lista blanca o lista negra
const {Empleados}= require('./routes/empleados.js');
const {config}= require('./config/index');
const { dbConnection } = require('./libs/database/config');

class Server{
    constructor()
    {
        this.app = express(); 
        
        //Pedimos la conexion a la base de datos
        this.conectarDB();
        
        //llamamos a los middlewares
        this.middlewares();
        
        //iniciamos el servidor
        this.start();        
    }
    
    //permitimos que cualquier dominio accese a nuestra app
    middlewares=()=>{
        
        //configuración de cors para permisos de acceso, en este caso cualquiera
        this.app.use(cors());
        
        //lectura y parseo del body
        this.app.use(express.json());       
                
    }

    async conectarDB()
    {
        await dbConnection();
    }
    
    start()
    {
        this.empleados = new Empleados(this.app);
        //Esta es una llamada a los routes de los empleados
        this.empleados.routeEmpleados();

        this.app.listen(config.port,(err)=>{
            if(err)
                console.log("Error al inicar el server");
            else{
                console.log("Lisen on the port 3000");
            }
        } );
        
    }
}

const server = new Server();
