const {Router}= require('express');
  
const app= require('../index');
const { ServiceEmpleados } = require('../services/empleados');

class Empleados
{
    constructor(app)
    {
        this.router = Router();
        app.use('/empleados', this.router);
        // this.app=app;
        this.serviceEmpleados= new ServiceEmpleados();
        //this.router= express.Route();

        //app.use("/empleados",this.router);
    }

    routeEmpleados() {

       this.router.get('/', async (req, res)=>{
            const empleados= await this.serviceEmpleados.getEmpleados();
            res.status(200).json(empleados);
       });

       this.router.get('/:id',async (req, res)=>{
        const id= parseInt(req.params.id);
        
        const resp= await this.serviceEmpleados.getEmpleadoById(id);

        res.status(200).json(resp);
        });
    
    
    this.router.post('/',async (req, res)=>{
        //const empleados=await this.serviceEmpleados.getEmpleados();
        
        let id=1;
        //let edad= (empleados[empleados.length-1]) ? empleados[empleados.length-1].edad + 1 : 1;
        //const {nombre, edad}= req.body;
        const body= req.body;

         //console.log("La data", req.body);
        
        //const empleado = {id:id, nombre, edad}
        const empleado = body;
        
        const resp= await this.serviceEmpleados.setEmpleado(empleado);
        res.status(200).json(resp);
        //res.status(200).json(req.body);
    });
    
    this.router.put('/:id',async (req, res)=>{
        const id= parseInt(req.params.id);
        const empleados=await this.serviceEmpleados.getEmpleados();

        let actualizado= (empleados[empleados.length-1]) ? "nombre actualizado "+ empleados[empleados.length-1].edad + 1 : "nommbre actualizado 1";

            
            const empleado = {
                id:id,
                nombre: actualizado,
                edad: 30
            }

            res.status(200).json(await this.serviceEmpleados.updateEmpleado(id, empleado));       
        });

        this.router.delete('/:id',async (req, res)=>{
            const id= parseInt(req.id);
            res.status(200).json(await this.serviceEmpleados.deleteEmpleado(id)); 
        });

   };
    
}

//const empleados= new Empleados();
//empleados.api();

module.exports={
    Empleados
}

