// condicion switch

console.log("Indica el numero de opcion");
console.log("1. Cargar\n");
console.log("2. Imprimir\n")
console.log("3. Salir\n")

opcion = parseInt(prompt("Dame una opcion"));

switch (opcion) {
    case 1:
        document.write("Cargando...");
        break;
    case 2:
        document.write("Imprimiendo....");
        break;
    case 3:
        console.log("Saliendo...");
        break;
    default:
        console.log("Seleccion no valida, intriduce opcion correcta")
        break;
}

