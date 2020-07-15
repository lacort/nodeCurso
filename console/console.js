console.log('exibindo uma mensagem no console')

console.error(new Error('Exibindo mensagem de erro : temos problemas'))

const carros = ['GM', 'FIAT', 'TOYOTA', 'PEUGEOUT']

console.table(carros)

console.count('processo')
console.count('processo')
console.count('processo')
let object = []
console.time('CONTADOR')
for (var index = 0; index < 100; index++) {
    object.push({name:'tentativa',Numero:index})
    //console.table(object)
}
console.table(object)
console.timeEnd('CONTADOR')

console.assert(true, 'Faça alguma coisa')

console.assert(false, 'Ih Rapaz %s, que pena!', 'Não Funcionou')