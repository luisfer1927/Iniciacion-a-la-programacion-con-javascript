
const alumno = {
    nombre: "Jose",
    nota: 6
};
console.log(alumno);
alumno["nota"] = 5;  //cambia 
console.log(alumno);
console.log(alumno.nombre);
console.log(alumno.nota);

// estructura compleja json

const alumnos = [
    {
        nombre: "Jose",
        nota: 6
    },
    {
        nombre: "Luis",
        nota: 10
    },
    {
        nombre: "Eva",
        nota: 10
    }
];

console.log(alumnos);

//agregar alumno nuevo
let alumnaNueva = {
    nombre: "Maria",
    nota: 9
};

let alumnoNuevo = {
    nombre: "Jorge",
    nota: 8
}
alumnos.push(alumnaNueva);  //para agregar un nuevo alumno
alumnos.push(alumnoNuevo);
console.log(alumnos);
alumnos.splice(2, 1);  //borra un alumno posicion 1
// console.log(alumnos);

//recorrer json
for (let i=0; i<alumnos.length; i++){
console.log(`${alumnos[i].nombre}`);
document.write(`${alumnos[i].nombre}<br/>`);
}