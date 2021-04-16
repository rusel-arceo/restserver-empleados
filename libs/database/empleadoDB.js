const mongoose= require('mongoose');
//const { empleado } = require('./config');
const {EmpleadoDTO}= require('../../tdo/empleado');
const Empleado = require('./empleados.schema');

/*Importamos el modelo, aunque en el schema se exporto como empleado, mongoose le agrega la s, para hacerlo plural*/

class EmpleadoDB{
    constructor()
    {
        this.empleadoDTO= new EmpleadoDTO();
        //this.empleadoDB = new Empleado();
    }
    
    getEmpleado()
    {
        // empleadoDB.save(empleadoDTO.empleadoObj).then(()=>{console.log("Empleado Salvado");});        
        return this.empleadoDTO.empleadoObj;
    }

    async saveEmpleado(empleado)
    {
        try{
            const empleadoModel = new Empleado(empleado);
            await empleadoModel.save();
            console.log('Usuario Salvado');
            /*empleadoDB.save(empleado).then(()=>{console.log("Empleado Salvado");}).catch((err)=>{console.log("error al insertar promesa emplead", err)});  */      
        }catch (err)
        {
            console.log("Sucedío un error, es:", err);
            return {
                status:false,
                message:"Fallo al salvar el empleado"
            }
        }

        return {
            status:true,
            message:"Empleado salvado"
        }
    }
}

module.exports =
{EmpleadoDB}