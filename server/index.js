const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="POST" action="/process"><input name= "message"></input></form></body>',
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        res.write('Welcome to the process page');
        res.end(); 
    } else {
        res.write('Page not found');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

// ourReadStream.on('data', (chunk) => {
//     console.log('New chunk received:');
//     console.log(chunk.toString());
// });
