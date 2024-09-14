const http = require('http');

const routs = require('./routes');

const server = http.createServer(routs);

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});