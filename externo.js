// const puerto = 2020;

// module.exports = puerto;

function mostrarNumeros(){
    let retorno = "";
    for(let i=0 ; i < 10; i++){
        retorno = retorno + "Numero : "+ i+ "\n";
    }
    return retorno;
}
const numeros2 = 3;
const puerto = 2020;
module.exports = {mostrarNumeros,
    puerto,
numeros2};