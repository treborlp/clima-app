const { leerInput } = require("./helpers/Inquirer");

const main = async() => {
    const mensaje = await leerInput("Escribe algo:");

    console.log(mensaje);
}

main()