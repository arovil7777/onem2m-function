const conf = require("../config/conf");

// function options(state) {
//     if (state == 'oneM2M') {
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
// return options;
//     }
// }

module.exports = options;