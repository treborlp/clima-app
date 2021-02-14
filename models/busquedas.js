const axios = require("axios");
class Busquedas {

    historial = ['Huaraz', 'Canada', 'Pariac'];

    constructor() {
        //TODO: leer si existe en db
    }

    async ciudad(lugar = '') {
        //peticion http

        const peticion = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Madrid.json?access_token=pk.eyJ1IjoidHJlYm9ybHAiLCJhIjoiY2tsNGo4YXI5MHR0ZTJ2cDZpZXEyc29qdyJ9.4kEISb80PwvkahSw_jr70Q&limit=5&language=es');
        console.log(peticion.data);


        //return []; // Retornar lugares similares
    }
}

module.exports = Busquedas