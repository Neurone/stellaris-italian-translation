# Traduzione italiana di Stellaris

Questo mod, **compatibile** con l'**Ironmode** e gli **achievement di Steam**, sostituisce la lingua inglese con la lingua italiana.

Compatibile con versione: **Lee 2.4.***
Da tradurre: DLC Ancient Relics

Questa traduzione è ricavata dai testi redatti diligentemente dal team [Battle of Paradox Italia](http://www.bopitalia.org) ed in particolare dal buon Puxxup - **Grande lavoro!**.

NOTA BENE: a causa della modalità con la quale Stellaris effettua il check dei mod all'avvio, per poter conservare ironmode e achievement ho dovuto rimuovere parte delle frasi presenti nel lavoro di traduzione originale di Puxxup (es. nomi delle navi, nomi degli alieni, nomi delle fazioni e delle città, ecc.). Se avete già completato gli achievement e l'ironmode, o comunque non siete interessati alla cosa, usate il [mod di Puxxup](https://steamcommunity.com/sharedfiles/filedetails/?id=823306244) per un'esperienza di traduzione completa!

## Modifiche rispetto al mod ufficiale BoP

- compatibile con ironmode e achievement
- non modifico il nome degli achievement, solo la loro descrizione

## Installazione mod da release

Trovate le release già pronte del mod nell'apposita sezione [releases](https://github.com/Neurone/stellaris-italian-translation/releases). Scaricate la release che vi interessa e unzippatela all'interno della cartella:

    <%USERPROFILE%>\Documents\Paradox Interactive\Stellaris\mod

Nel caso non fosse presente la cartella `mod` potete crearla voi normalmente.

## Creazione mod da codice sorgente

Clonare il repository:

    git clone https://github.com/Neurone/stellaris-italian-translation.git

Installare le dipendenze:

    cd stellaris-italian-translation
    npm install

### Versione release

Creare il mod:

    npx grunt

L'output sarà simile al seguente:

    ~\stellaris-italian-translation> npx grunt
    npx: installed 1 in 2.252s
    Path must be a string. Received undefined
    ~\stellaris-italian-translation\node_modules\grunt\bin\grunt
    Running "clean:folder" (clean) task
    >> 91 paths cleaned.

    Running "copy:standalone" (copy) task
    Created 1 directory, copied 86 files

    Running "compress:main" (compress) task
    >> Compressed 87 files.

    Running "copy:complete" (copy) task
    Copied 1 file

    Done.

Verrà creato il file `stellaris-italian-translation-x.x.x.zip` all'interno della cartella `build\dist`, dove `x.x.x` sarà la verione corrente del mod (es. `1.0.0`).

Per installare il mod, scompattare il file all'interno della cartella:

    <%USERPROFILE%>\Documents\Paradox Interactive\Stellaris\mod

Nel caso non fosse presente la cartella `mod` potete crearla voi normalmente. La struttura finale dei file sarà la seguente:

    <%USERPROFILE%>\Documents\Paradox Interactive\Stellaris\mod\stellaris-italian-translation.zip
    <%USERPROFILE%>\Documents\Paradox Interactive\Stellaris\mod\stellaris-italian-translation.mod

### Versione sviluppo

La versione sviluppo del mod è utile per fare modifiche, test o per effettuare l'upload sullo Steam Workshop. La versione release **non permette** di fare l'upload sullo Steam Workshop.

Creare il mod in versione sviluppo:

    npx grunt dev

L'output sarà simile al seguente:

    ~\stellaris-italian-translation> npx grunt dev
    npx: installed 1 in 2.625s
    Path must be a string. Received undefined
    ~\stellaris-italian-translation\node_modules\grunt\bin\grunt
    Running "clean:folder" (clean) task
    >> 0 paths cleaned.

    Running "copy:dev" (copy) task


    Done.

Verrà creata la cartella `build\dist` e all'interno troverete un file ed una cartella:

    stellaris-italian-translation\*
    stellaris-italian-translation.mod

Per installare il mod, copiate tutto **il contenuto** della cartella `build\dist` all'interno della cartella:

    <%USERPROFILE%>\Documents\Paradox Interactive\Stellaris\mod

Nel caso non fosse presente la cartella `mod` potete crearla voi normalmente. La struttura finale dei file sarà la seguente:

    <%USERPROFILE%>\Documents\Paradox Interactive\Stellaris\mod\stellaris-italian-translation\...
    <%USERPROFILE%>\Documents\Paradox Interactive\Stellaris\mod\stellaris-italian-translation.mod
