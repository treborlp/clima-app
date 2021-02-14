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
                if (id === '0') continue //Verificacion de exitencia de id
                const lugarSeleccionado = lugares.find(lugar => lugar.id === id);
                busquedas.agregarHistorial(lugarSeleccionado.nombre);
                //Clima
                const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng);

                //Mostrat resultados
                console.clear();
                console.log("\n Informacion de la ciudad:".green);
                console.log("Ciudad:", lugarSeleccionado.nombre);
                console.log("Lat:", lugarSeleccionado.lat);
                console.log("Long:", lugarSeleccionado.lng);

                console.log("\n Informacion de tiempo:".green);
                console.log("Temperatura:", clima.temp);
                console.log("Mínima:", clima.min);
                console.log("Máxima:", clima.max);
                console.log("Descripción: ", clima.desc);

                break;
            case 2:
                busquedas.leerDB().historial.forEach((registro, i) => {
                    let idx = `${i+1}.`.green;
                    console.log(`${idx} ${registro}`);
                })
                break;
            default:
                break;
        }



        if (+opt != 0) await pausa();

    } while (+opt != 0)


}

main()