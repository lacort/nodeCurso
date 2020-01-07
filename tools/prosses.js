require('./subdirectory/subs')

console.log('--------------------------------')
console.log(`Nome do Arquivo:`,__filename)
console.log(`Diretório do Arquivo:`,__dirname)
console.log(`Parâmetros de execução:`,process.env.OS)
    switch(process.argv[2]){
        case '-a':
            console.log('Execute rotina principal');
            break;
        case '-i':
            console.log('Execute Instlação');
            break;
        case '-q':
            console.log('Encerrando Aplicação');
            process.exit(); // Interrompe imediatamente o codigo
            break;
        default:
            console.log('Sem Parametro');
            break;
    }
console.log(`Ambiente do Servidor:`,process.platform)
