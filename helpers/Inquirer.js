const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [{
        value: 1,
        name: `${'1'.red}. Buscar Ciudad`
    }, {
        value: 2,
        name: `${'2'.red}. Historial`
    }, {
        value: 0,
        name: `${'0'.red}. Salir`
    }]
}]

const preguntas2 = [{
    type: 'input',
    name: 'opcion',
    message: `Presione la tecla ${'ENTER'.green} para continuar:`
}]

const inquirerMenu = async() => {

    console.clear();
    console.log("=======================".green);
    console.log("Seleccione una opción".green);
    console.log("=======================\n".green);

    const { opcion } = await inquirer.prompt(preguntas)

    return opcion
}

const listarLugares = async(lugares = []) => {
    const choices = lugares.map((lugar, i) => {
        const idx = `${i+1}.`.green;

        return {
            value: lugar.id,
            name: `${idx} ${lugar.nombre}`
        }
    })

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    })
    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'Selecciona: ',
        choices
    }]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async(message) => {
    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const pausa = async() => {
    await inquirer.prompt(preguntas2)
}

const leerInput = async(message) => {
    const question = [{
        type: 'input',
        name: 'escribe',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Por favor ingrese un valor'
            } else {
                return true
            }
        }
    }]
    let { escribe } = await inquirer.prompt(question)
    return escribe
}

const listadoTareasCompletadas = async(tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i+1}.`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    })

    const pregunta = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Opciones',
        choices
    }]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    listadoTareasCompletadas
}