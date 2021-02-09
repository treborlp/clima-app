const { inquirerMenu, pausa, leerInput } = require("./helpers/Inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {
    let opt;
    const busquedas = new Busquedas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Mostrar Mensaje
                let lugar = await leerInput("Ciudad: ");
                console.log({ lugar });
                //Buscar lugares

                //Seleccionar lugar

                //Clima

                //Mostrat resultados
                console.log("\n Informacion de la ciudad:".green);
                console.log("Ciudad:", );
                console.log("Lat:", );
                console.log("Long:", );
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