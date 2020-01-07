function soma (x, callback){
    return setTimeout(()=>{
        return callback(null, x + 5015);
    },1000) ;
    
}

//callback function
function resollveSoma(err,resultado){
    if (err) throw err;
    console.log(resultado);
}

soma (200, resollveSoma);
