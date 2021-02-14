require('dotenv').config() //Para variables de entornos

const { inquirerMenu, pausa, leerInput, listarLugares } = require("./helpers/Inquirer");
const Busquedas = require("./models/busquedas");

//console.log(process.env.MAPBOX_KEY); //ubicacion del key mapbox key

const main = async() => {
    let opt;
    const busquedas = new Busquedas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Mostrar Mensaje
                const termino = await leerInput("Ciudad: ");
                //Buscar lugares
                const lugares = await busquedas.ciudad(termino);
                //Seleccionar lugar
                const id = await listarLugares(lugares)
                const lugarSeleccionado = lugares.find(lugar => lugar.id === id)
                    //Clima

                //Mostrat resultados
                console.log("\n Informacion de la ciudad:".green);
                console.log("Ciudad:", lugarSeleccionado.nombre);
                console.log("Lat:", lugarSeleccionado.lat);
                console.log("Long:", lugarSeleccionado.lng);
                console.log("Temperatura", );
                console.log("Mínima:", );
                console.log("Máxima:", );

                break;
            case 2:

                break;
            default:
                break;
        }



        if (+opt != 0) await pausa();

    } while (+opt != 0)


}

main()