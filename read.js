var fs = require('fs');
var textract = require('textract');

textract.fromFileWithPath('./aa.pdf', function(error, text) {
    console.log("-------------------------------")
    console.log(text)
    console.log("-------------------------------")
    fs.appendFile('log.txt', text, function(err) {
        if (err) {
            console.log("append failed")
        } else {
            console.log("Text file created")
        }
    })
})



// var WordExtractor = require("word-extractor");
// var extractor = new WordExtractor();
// var extracted = extractor.extract("/var/www/html/readfile/bb.doc");
// console.log(extracted)
// extracted.then(function(doc) {
//     console.log(doc.getBody());
// });
