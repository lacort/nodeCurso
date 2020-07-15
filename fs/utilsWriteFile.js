const {promisify} = require('util');


const writeFile = promisify(require('fs').writeFile);
const content = `Create the file until promisify of module native`


writeFile('utilFile.txt', content).then(()=>{
    console.log('File utilFile create with success')
}).catch((err)=>{
    console.log(`Get error: ${err}`)
});