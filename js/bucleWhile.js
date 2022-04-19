
// repeticion while

let table = parseInt(prompt("Que tabla quieres que calcule?"));

document.write(`Empezamos con la tabla del ${table}<br/>`)

let i = 1;
// while (i <= 10) {
//     resultado = table * i
//     document.write(`${table}*${i}=${resultado}<br/>`);
//     i = i + 1;
// }

do {
    resultado = table * i
    document.write(`${table}*${i}=${resultado}<br/>`);
    i++;
} while (i <= 10);
document.write("Termina el bucle do while<br/>");