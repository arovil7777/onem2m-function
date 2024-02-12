const http = require('http');

async function httpRequest(res, options, body) {
    const http_req = http.request(options, response => {
        let resData = '';
        response.on('data', data => {
            resData += data;
        });

        response.on('end', () => {
            console.log(`statusCode: ${response.statusCode}`);
            const jsonObj = JSON.parse(resData);
            res.status(response.statusCode).json(jsonObj);
        });
    });

    http_req.on('error', error => {
        console.error(error);
    });

    if (body) {
        http_req.write(JSON.stringify(body));
    }

    http_req.end();

    return http_req;
}

module.exports = httpRequest;