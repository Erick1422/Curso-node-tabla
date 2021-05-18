const { crearArchivo } = require('../03-bases-node/helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();

//const num = 3;
crearArchivo(argv.b, argv.l, argv.h)
    .then(crearArchivo => console.log(crearArchivo, 'Se ha creado'))
    .catch(err => console.log(err));






//Tomamos el argumento 3 de proccess
/* const [ , , arg3 = 'base=5'] = process.argv;

//Separamos el argumento y guaramos el resultado, en caso de no ser un número o no ser encontrado le agregamos un valor por defecto
const [ , num = 6 ] = arg3.split('=');
console.log(num);

//const num = 3;
crearArchivo(num)
    .then(crearArchivo => console.log(crearArchivo, 'Se ha creado'))
    .catch(err => console.log(err)); */