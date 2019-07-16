var convert = require('xml-js');
var xml = require('fs').readFileSync(__dirname +'/flighdata_A.xml', 'utf8');

var result = convert.xml2json(xml,{compact: false, spaces: 4});

console.log(result);

use flights_db;
db.dropDatabase();

//insert many? or insert one? reformat json?
db.flights.insert(xml)
