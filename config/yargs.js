const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Permite que se ingrese un número para realizar la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muesra la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: '10',
        describe: 'Permite indicar hasta qué número queremos la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número'
        }
        return true;
    })
    .argv;

    module.exports = argv;