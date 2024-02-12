const conf = require("../config/conf");

// Mobius Server 정보 (IP/Port/CSEBase Name 등)
const options = {
    hostname: conf.csebaseip,
    port: conf.csebaseport,
    path: '/' + conf.csebasename,
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-M2M-RI': 'aa',
        'X-M2M-Origin': '/Mobius'
    }
};

module.exports = options;