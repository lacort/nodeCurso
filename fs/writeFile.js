const {writeFile} = require('fs');


writeFile('file.txt', 'Creating text file with writFile', err =>{
    if(err) throw err;
    console.log(`successfully created file`);
})