console.log('Executando module-01.js')

const oculta = ()=>{
    console.log('Executando função oculta')

}

const executa = ()=>{
    console.log('Executando a função executa')
}
let welcome = 'Bem vindo ao módulo module-01.js'

module.exports = {welcome, executa}