const fs = require("fs")

const axios = require("axios");
class Busquedas {

    historial = [];
    pathDB = "./db/historial.json";

    constructor() {
        if (fs.existsSync(this.pathDB)) {
            this.historial = this.leerDB().historial;
        }
    }

    get paramsMaxbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
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

            return peticion.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }))
        } catch (error) {
            return []
        }


        //return []; // Retornar lugares similares
    }

    async climaLugar(lat, lon) {

        try {

            const instancia = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    'lat': lat,
                    'lon': lon,
                    'appid': process.env.OPENWEATHER_KEY,
                    'lang': 'es',
                    'units': 'metric'
                }
            })

            const peticion = await instancia.get();

            const { weather, main } = peticion.data;

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }

        } catch (error) {

        }
    }

    agregarHistorial(busqueda) {
        if (!this.historial.includes(busqueda)) {
            this.historial.unshift(busqueda); // Agregar la busqueda al arreglo
        }
        this.guardarBD();
    }

    guardarBD(busqueda) {
        const payload = {
            historial: this.historial
        }
        fs.writeFileSync(this.pathDB, JSON.stringify(payload))
    }

    leerDB() {
        return JSON.parse(fs.readFileSync(this.pathDB, { encoding: "utf-8" }));
    }
}

module.exports = Busquedas