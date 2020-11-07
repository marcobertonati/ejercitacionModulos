let funcionando = "JS funcionando";

// console.log("Hola mundo");
// console.log(2+2);
// console.log(funcionando);

// const puerto = require('./externo'); // LOS REQUIRE SE PONEN ARRIBA DE TODO

// console.log(puerto);

// const fs = require('fs');
// console.log(typeof fs);

// fs.writeFile("Nombre.txt", "Cotenido", (error) => {
//     if(error) throw error;
//     console.log("El archivo se genero se genero exitosamente");

// })

const { mostrarNumeros } = require("./externo");
const fs = require("fs");


// const contenido = mostrarNumeros();
// fs.writeFile("Nombre.txt",contenido, //fs.writeFile agrega archivo
//     (error) => {
//         if(error) console(error);
//         else console.log("El archivo se genero exitosamente");
//     }
// )

fs.stat( "Nombre.txt", (error) => {
   
    //fs.stat verifica existencia
    if (error) {
      const contenido = mostrarNumeros();
      fs.writeFile(
        "Nombre.txt",
        contenido, //fs.writeFile agrega archivo
        (error) => {
          if (error) console(error);
          else console.log("El archivo se genero exitosamente");
        }
      );
    }

    //fs.unlink borra archivo
    fs.unlink("Nombre.txt", (error) => {
      if (error) throw error;
      console.log("El archivo se borró exitosamente");
    });
  }
);
