const estudiantes = [
 { id: 1, nombre: 'Ana', edad: 20 },
 { id: 2, nombre: 'Juan', edad: 22 },
 { id: 3, nombre: 'María', edad: 21 },
];



const busqueda = new Promise((resolve,reject) => {
    if (estudiantes) {
        resolve("Nombre", estudiantes.id, "Edad:", estudiantes.edad)
    } else {
        reject("no existe un estudiante con el ID", estudiantes.id)
    } 
});

busqueda
.then((result) => console.log("Resultado:", new Promise((resolve) => resolve(result))))
.catch((error) => console.log("ERROR" , reject(error)))