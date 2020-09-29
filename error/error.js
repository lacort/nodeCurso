function execute(){
    executeTo();
}


function executeTo(){
    throw new Error(`Ah não é possivel, na minha máquina funciona!`)
}

function init(){
    try {
        execute();
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

init();
console.log(`Depois do erro`)