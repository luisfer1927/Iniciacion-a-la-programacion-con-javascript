// repeticion for

let table = parseInt(prompt("Que tabla quieres que calcule?"));

document.write(`Empezamos con la tabla del ${table}<br/>`)

for (let i = 1; i <= 10; i++){
    resultado = table * i;
    document.write(`${table}*${i}=${resultado}<br/>`)
}

