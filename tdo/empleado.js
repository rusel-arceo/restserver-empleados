//Estructura de un usuario
class EmpleadoDTO {
    constructor()
    {
        const empleadoObj = {  
            nombre:'Rusel',
            password:'cacahuatito',
            role: 'blabla',
            f_nac: '1985/09/1985',
            sueldo: 4588.23,
            puesto: 'Programador'
        }
    }
}

module.exports = {
    EmpleadoDTO
}