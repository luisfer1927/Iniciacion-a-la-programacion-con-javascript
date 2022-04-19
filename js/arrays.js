//crear arrays
const numeros = [];
console.log(numeros);

//crear con valores
const colores = ["rojo", "amarillo", "verde", "marron"];

console.log(colores);

//crear con valores iguales
const seis = new Array(10).fill(6);
console.log(seis);
//añadir valor
seis.push(8);
seis.push(12);
//eliminar el primero
seis.shift();

//mostrar
for (let i = 0; i < seis.length; i++){
    console.log(seis[i]);  
}

//mostrar parte del array
console.log(seis.slice(1, 4));
    
//recorrer array colores
for (color of colores) {
    console.log(color);
}

//otra forma de recorrer array
for (i in colores) {
    document.write(i);
    document.write(" : ", colores[i], "<br/>");
}

colores.reverse();
console.log(colores);