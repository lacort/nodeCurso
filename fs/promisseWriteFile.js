const {
    writeFile
} = require('fs');

function createFile(name, content) {
    return new Promise((resolve, reject) => {
        writeFile(name, content, err => {
            if (err) returnreject(err);
            resolve();
        })
    })
}
createFile(`promisseFile.txt`, `Creating a file until promisse`)
    .then(() => {
        console.log(`File promisseFile.txt createssuccely`)
    })
    .catch(err => {
        console.log(err)
    });