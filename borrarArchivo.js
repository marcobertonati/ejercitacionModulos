const fs = require("fs");

function borrarArchivoJs() {
    fs.unlink("Nombre.txt", (error) => {
        if (error) {
            console.log(errror)
        } else {
            console.log(`El archivo se borró exitosamente`)
        }
    })
}

module.exports = {borrarArchivoJs}
