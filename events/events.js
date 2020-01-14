const EventEmitter = require('events');

class Evento extends EventEmitter {};

const myEvent = new Evento();


myEvent.on('security', (x, y) => {
    console.log(`Executando o evento 'Segurança': ${x} ${y}`)
});

myEvent.emit('security', 'userAdmin', 'Alterou Salário');