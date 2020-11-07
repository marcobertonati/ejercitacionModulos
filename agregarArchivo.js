console.log(`Se muestra js: agregarArchivo`)

const {mostrarNumeros} = require("./externo");
const fs = require("fs");

function agregarArchivoJs() {
    const contenidoArchivo = mostrarNumeros();
    fs.writeFile("Nombre.txt", contenidoArchivo, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`El archivo se generó exitosamente`);
        }
    })
}

module.exports = {agregarArchivoJs}
// ¿PORQUE EL MODULAR ME EStÁ TRAYENDO EL CONSOLE LOG DE LA PRIMERA LINEA? ¿Con este module no solo le paso la función?