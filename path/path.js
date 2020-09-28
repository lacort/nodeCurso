const path = require('path');

//Caminho e devolve o ultimo arquivo
console.log('Base Name: ',path.basename('\/\/home\/lacort\/devs\/next.websocket.agent\/test\/assets\/agentTest.html'))

//Normalisa o path mesmo se escrever algo errado
console.log('Normalize: ',path.normalize('\/\/home\/lacort\/devs\/next.websocket.agent\/////test\/assets\/agentTest.html'))

//Junta um path 
console.log('Join path: ', path.join('teste','teste2','teste3/teste4', 'dir2','.'))

console.log('Resolve: ',path.resolve('path.js'))


console.log('Extension: ',path.extname('path.js'))