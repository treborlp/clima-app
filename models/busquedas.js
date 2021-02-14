const axios = require("axios");
class Busquedas {

    historial = ['Huaraz', 'Canada', 'Pariac'];

    constructor() {
        //TODO: leer si existe en db
    }

    async ciudad(lugar = '') {
        //peticion http

        const peticion = await axios.get('https://reqres.in/api/users?page=2');
        console.log(peticion.data);


        //return []; // Retornar lugares similares
    }
}

module.exports = Busquedas