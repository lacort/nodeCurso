function sum (x){
    return new Promise((resolve, reject)=>{
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject(`Tá de Bincadeira ???`);
        }
        setTimeout(()=>{
            resolve(x + 5000);
        },3000);
    }) 
}

async function man(){
    try {
        const result = await sum('#');
        console.log(`Resultado com asyns await: ${result}`);
    } catch (error) {
        console.log(`Temos Problemas: ${error}`);
        
    }
}

man();