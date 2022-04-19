
const alumno = {
    nombre: "Jose",
    nota: 6
};
console.log(alumno);
alumno["nota"] = 5;
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
alumnos.push(alumnaNueva);
console.log(alumnos);
alumnos.splice(1, 1);  //borra un alumno posicion 1
console.log(alumnos);

//recorrer json
for (let i=0; i<alumnos.length; i++){
    console.log(`${alumnos[i].nombre}`);
    document.write(`${alumnos[i].nombre}<br/>`);
}