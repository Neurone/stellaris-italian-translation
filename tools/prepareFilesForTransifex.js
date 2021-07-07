const lineByLine = require('n-readlines');
const liner = new lineByLine('./input.yml');

let line;
let lineNumber = 0;

while (line = liner.next()) {
    console.log('Line ' + lineNumber + ': ' + line.toString('utf8'));
    lineNumber++;
}

console.log('end of line reached');