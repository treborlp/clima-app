const { inquirerMenu, pausa } = require("./helpers/Inquirer");

const main = async() => {
    let opt;

    do {
        opt = await inquirerMenu();
        if (+opt != 0) await pausa();

    } while (+opt != 0)


}

main()