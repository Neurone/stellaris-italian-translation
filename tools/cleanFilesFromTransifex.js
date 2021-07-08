// Ripulisce i file scaricati da Transifex

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
            if (fs.lstatSync(srcFolder + element).isFile() && element != ".gitkeep")
                prepareFile(srcFolder, element);
        });
});

// Ripulisce file scaricato da Transifex
function prepareFile(folder, fileName) {
    const liner = new lineByLine(folder + fileName);

    let line;
    let lineNumber = 0;

    fileName = fileName.replace("for_use_stellaris-italian-translation_", "");
    let file = fs.createWriteStream(dstFolder + fileName, {
        'flags': 'w'
    });
    file.on('error', function (err) {
        console.error("> Error", err);
    });

    while (line = liner.next()) {
        line = line.toString("utf-8");
        line = restoreVersion(line);
        line = restoreQuotes(line);
        //line = restoreNewLine(line);
        file.write(line + "\n");
        lineNumber++;
    }

    console.log(fileName, lineNumber, "linee elaborate");
    file.end();
}

function restoreVersion(line) {
    return line.replace(/: \"/, ":0 \"");
}

function restoreQuotes(line) {
    return line.replace(/\\\"/g, "\"");
}