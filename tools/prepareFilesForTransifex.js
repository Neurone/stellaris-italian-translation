// Prepara i file per l'upload su Transifex

const fs = require('fs');
const { file } = require('grunt');
const lineByLine = require('n-readlines');

// Seleziona la cartella da esaminare
let srcFolder = process.argv[2];
if (srcFolder === '' || srcFolder === undefined) {
    console.warn("Attenzione: serve specificare la cartella contenente i file da leggere come primo parametro.");
    return false;
}
if (!srcFolder.endsWith("/")) srcFolder += "/";

// Seleziona la cartella di output
let dstFolder = process.argv[3];
if (dstFolder === '' || dstFolder === undefined) {
    console.warn("Attenzione: serve specificare la cartella di output come secondo parametro.");
    return false;
}
if (!dstFolder.endsWith("/")) dstFolder += "/";

// Elenca tutti i file della cartella
fs.readdir(srcFolder, (err, files) => {
    if (err) console.error(err)
    else
        files.forEach(element => {
            if (fs.lstatSync(srcFolder + element).isFile())
                prepareFile(srcFolder, element);
        });
});

// Prepara il file per l'upload a Transifex
function prepareFile(folder, fileName) {
    const liner = new lineByLine(folder + fileName);

    let line;
    let lineNumber = 0;

    let file = fs.createWriteStream(dstFolder + fileName, {
        'flags': 'w'
    });
    file.on('error', function (err) {
        console.error("> Error", err);
    });

    while (line = liner.next()) {
        line = line.toString("utf-8");
        //if (!(line.startsWith("#") || line.startsWith(" #"))) {
        line = removeVersion(line);
        line = escapeInnerQuotes(line);
        //}
        file.write(line + "\n");
        lineNumber++;
    }

    console.log(fileName, lineNumber, "linee elaborate");
    file.end();
}

function removeVersion(line) {
    return line.replace(/:\d\d/, ":").replace(/:\d/, ":");
}

function escapeInnerQuotes(line) {
    line = line.replace(/: "/, ": <!<!<!").replace(/"$/, "<!<!<!").replace(/" #/, "<!<!<! #")
    line = line.replace(/"/g, "\\\"")
    line = line.replace(/<!<!<!/g, "\"")
    return line;
}