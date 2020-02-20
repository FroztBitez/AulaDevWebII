const fs = require('fs');

fs.readFile('pokemon.txt', (err, data) =>{
    if(err) console.error(err);
    console.log(data.toString());

})