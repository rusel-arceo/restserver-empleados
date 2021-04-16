const {EmpleadoDB} = require('../libs/database/empleadoDB');

class ServiceEmpleados
{
    constructor()
    {
        this.empleados=[];
        this.empleadoDB= new EmpleadoDB();
    }

    async getEmpleados ()
    {
        //return this.empleados; 
        return this.empleadoDB.getEmpleado();
    }

    async getEmpleadoById (id)
    {
    //    const result = this.empleados.find((empleado)=>{
    //         return empleado.id===id;
    //     });
        const result = this.buscaById(id);
        console.log(`dentro del service de busqueda resultado es ${result} el id es ${id}`);
        return result;
    }

    async setEmpleado (empleado)
    {
        try{
            
            //this.empleados.push(empleado); 
            console.log("En set empleados service antes de a llamar insertar en empladosDB, son: ", empleado);
            
            const result= this.empleadoDB.saveEmpleado(empleado);
            console.log("Ya se llamó a empleado.save desde el service");

            return result;
        }catch(err)
        {
            throw new Error("Sucedio un error al insertar", err);
        }
    }

    async updateEmpleado (id, empleado)
    { 
       if(this.empleados.length===0)
            return {};

        const index = this.empleados.findIndex((elemento) =>{
            return elemento.id===id;
        });

        const arrayAux= [...this.empleados];
        arrayAux[index]= empleado;
        this.empleados= arrayAux;

        return empleado;
    }
 
    async deleteEmpleado (id)    {
        const arrayAux= this.empleados.filter((empleado)=>{
           return empleado.id!=id;
        });

        this.empleados= arrayAux ;
        console.log("Dentro del delete, despues de eliminar: ", this.empleados);
        return {
            status:"ok",
            message:"Employee deleted"
        }
    }

    buscaById(id)
    {
        const result = this.empleados.find((empleado)=>{
            return empleado.id===id;
        });

        return result;
    }
 }

module.exports={
    ServiceEmpleados
}