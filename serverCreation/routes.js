const fs = require('fs');

const requestHandler = ((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {

        fs.readFile('message.txt', (err, data) => {
            let message = '';
            if (!err && data) {
                message = data;
            }

            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Front Page</title></head>');
            res.write('<body><form action="/message" method="POST">');
            res.write('<input type="text" name="name"><br><br>');
            res.write('<button type="submit">Submit</button></form>');

            if (message) {
                res.write(`<h2>${message}</h2>`);
            }

            res.write('</body></html>');
            return res.end();
        });

    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedData = Buffer.concat(body).toString();
            const message = parsedData.split('=')[1];

            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.error(err);
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
});

module.exports = requestHandler;