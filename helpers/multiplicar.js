//No se necesita instalar nada, en teoria al instalar node ya se encuentra todo
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (num = 2, listar = false, hasta) => {

    try {
        let salida = '';
        let i = 1;
        while (i <= hasta) {
            salida += `${num} x ${i} = ${num * i}\n`;
            i++;
        }
        
        if (listar) {
            console.log(colors.green( '============'));
            console.log('Tabla del:'.green, num);
            console.log(colors.green( '============'));

            console.log(colors.rainbow(salida));
        }

        fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);
        return `tabla-${ num }.txt`.underline.blue;
    }
    catch (error) { 
        throw error;
    }
}

module.exports = {
    crearArchivo
}

//Ejemplo implementado en el video
    /* const num = 5;
    for(let i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    } */