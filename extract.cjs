const fs = require('fs');
const { PDFParse } = require('pdf-parse');

const dataBuffer = fs.readFileSync('./src/imports/Hamida_Gholami-Creative_Portfolio.pdf');

const parser = new PDFParse();
parser.parse(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error) {
    console.error(error);
});
