
/*Este archivo manejará el modelo de datos del mongo*/
const {Schema, model} = require('mongoose');
//let Schema = mongoose.Schema; //Esquema para el manejo de la base de datos, es un estandar que Squema sea con S

//const uniqueValidator = require ('mongoose-unique-validator');

/*
let rolesValidos = {
    values: ['ADMIN_ROLE','USER_ROLE'], //Establecemos los valores permitidos
    message: '{VALUE} no es un rol valido' //El mensaje si no se establece un valor permitido
}
*/
const empleadoSquema= new Schema(
    {
        nombre:{ //En este caso el nombre se tomará de la BD
            type: String, //Definimos el tipo, son parametros opcionales
            required: [true, 'El nombre es necesario'] //decimos que es requerido, obligatorio. : true  al ponerlos entre corchetes es para poner definir un mensaje personalizado y en su caso no obtener el generico
        },
        password: { 
            type: String,
            required:[true,'La contraseña es obligatoria']
        },
        role: {
            type: String,
            default: 'USER_ROLE',
            enum:['ADMIN_ROLE','USER_ROLE'], /*rolesValidos*/  //Definidos arriba, en el enum, decimos que los valores que puede tomar son los establecidos.
            required:[true,'El rol es obligatorio']
        },
        f_nac: { 
          type: Date,
          required:[true,'La fecha de nacimiento es obligatoría']
        },
        
        sueldo: { 
          type: Number,
          required:[true,'Sueldo obligatorio']
        },
        puesto: { 
          type: String,
          required:[true,'El puesto es obligatorio']
        },
                
    });  //Definimos el squemas (Viene siendo los campos de la colección

    /*Modificaremos el schema para que nunca imprima el password*/
    
  /*   empleadoSquema.methods.toJSON = function(){  //.methods --metodos de schema , .toJSON siempre se llama antes de hacer una impresión JSON de schema   
        //No usar función de flecha porque no permite el uso de this, el cual necesitaremos
        let user = this;
        let useObject = user.toObject();
        delete useObject.password;

        return useObject;
    } 
 */
    //usuarioSquema.plugin( uniqueValidator, { message:'{PATH} debe de ser //único' }); //El path inserta la procedencia del error, en este caso email.

    //Exportando
    
    module.exports = model ('Empleado', empleadoSquema);
    //Exportamos el modelo, el cual usa el schema creado, decimos que se llamará empleado y que utilizará el esquema de empleadoSquema. De forma automática va a añadir una s --empleado a empleados. tomar en cuenta. 

 