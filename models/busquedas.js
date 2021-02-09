class Busquedas {

    historial = ['Huaraz', 'Canada', 'Pariac'];

    constructor() {
        //TODO: leer si existe en db
    }

    async ciudad(lugar = '') {
        //peticion http
        console.log(lugar);

        return []; // Retornar lugares similares
    }
}

module.exports = Busquedas