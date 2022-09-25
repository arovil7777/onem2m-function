const fs = require('fs');

var conf = {};
try {
    conf = JSON.parse(fs.readFileSync('./config/conf.json', 'utf8'));
}
catch (e) {
    conf.csebaseip = localhost;
    conf.csebaseport = 7579;
    conf.csebasename = "Mobius";
    conf.csebaseid = "/Mobius2";
    fs.writeFileSync('./config/conf.json', JSON.stringify(conf, null, 4), 'utf8');
}

module.exports = conf;