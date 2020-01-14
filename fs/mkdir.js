const fs = require('fs');

const assets = ['css', 'js', 'images', 'fonts', 'lib'];




function make(dir) {
    dir.forEach((element) => {
        fs.mkdir(`project/assets/${element}`, {
            recursive: true
        }, (err) => {
            if (err) throw err
            console.log(`Successfully created directory: ${element}`);
        })
    });


}

make(assets);