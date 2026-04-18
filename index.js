const path = require('path');

const myPath = 'C:/Users/USERAS/Downloads/Raw-Node.js-Project/index.js';

console.log(path.basename(myPath)); // C:/Users/USERAS/Downloads/Raw-Node.js-Project
console.log(path.parse(myPath)); // C:/Users/USERAS/Downloads/Raw-Node.js-Project

const os = require('os');

// console.log(os.platform());
// console.log(os.cpus());

const fs = require('fs');

fs.writeFileSync('modules.txt', 'The modules i learnt in Node.js are: os, path, fs');
fs.readFile('modules.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});
