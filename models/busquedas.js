const axios = require("axios");
class Busquedas {

    historial = ['Huaraz', 'Canada', 'Pariac'];

    constructor() {
        //TODO: leer si existe en db
    }

    get paramsMaxbox() {
        return {
            'access_token': 'pk.eyJ1IjoidHJlYm9ybHAiLCJhIjoiY2tsNGo4YXI5MHR0ZTJ2cDZpZXEyc29qdyJ9.4kEISb80PwvkahSw_jr70Q',
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad(lugar = '') {
        //peticion http
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMaxbox
            })

            const peticion = await instance.get();
            console.log(peticion.data);

            return []
        } catch (error) {
            return []
        }


        //return []; // Retornar lugares similares
    }
}

module.exports = Busquedas