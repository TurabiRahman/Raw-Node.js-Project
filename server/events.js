// const path = require('path');

// const myPath = 'C:/Users/USERAS/Downloads/Raw-Node.js-Project/server/index.js';

// console.log(path.basename(myPath)); // C:/Users/USERAS/Downloads/Raw-Node.js-Project
// console.log(path.parse(myPath)); // C:/Users/USERAS/Downloads/Raw-Node.js-Project

// const os = require('os');

// // console.log(os.platform());
// // console.log(os.cpus());

const fs = require('fs');

fs.writeFileSync('modules.txt', 'The modules i learnt in Node.js are: os, path, fs, events');
fs.readFile('modules.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

const School = require('./school');

const mySchool = new School();

mySchool.on('bellRing', (data) => {
    console.log(`The bell has rung for the ${data.period} period at ${data.time}`);
});

//mySchool.start_period()

//C:\Users\USERAS\Downloads\Raw-Node.js-Project\server