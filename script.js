let funcionando = "JS funcionando";

const { agregarArchivoJs } = require("./agregarArchivo");

const { borrarArchivoJs } = require("./borrarArchivo");

const fs = require("fs");

//fs.stat verifica existencia
fs.stat( "Nombre.txt", (error) => {
    if (error) {
        agregarArchivoJs();
    } else {
        borrarArchivoJs();
    }
  }
);
