const fs = require('fs')

fs.readFile('text.txt', (err, data) => {
    //console.log(data.toString());

})

//boqueante
const text = fs.readFileSync('text.txt');
console.log(`Text : ${text}`)