const fs = require('fs')


console.log((process.hrtime()[0] / 60).toFixed(5));
console.log("ANTES DA LEITURA");

const dados = fs.readFile("arquivo.txt", (err, data) => {
    if (err) throw err;

});



console.log((process.hrtime()[0] / 60).toFixed(5));
console.log("DEPOIS DA LEITURA");