var convert = require('xml-js');
var xml = require('fs').readFileSync(__dirname +'/flighdata_A.xml', 'utf8');

var result = convert.xml2json(xml,{compact: false, spaces: 4});

console.log(result);

//export default result; ????
