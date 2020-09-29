import {EventEmitter}  from'events';

class Evento extends EventEmitter {};

const myEvent = new Evento();


myEvent.on('security', (x, y) => {
    console.log(`Executando o evento 'Segurança': ${x} ${y}`)
});

myEvent.emit('security', 'userAdmin', 'Alterou Salário');


myEvent.on('close', (msg)=>{
    console.log(`Assinate: ${msg}`)
})

myEvent.emit('close', `fechado`)