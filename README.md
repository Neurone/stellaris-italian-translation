# Traduzione italiana di Stellaris

Questo mod, **compatibile** con la **modalità Ironman** e gli **achievement di Steam**, sostituisce la lingua inglese con la lingua italiana.

Basato sulla versione: **Dick v3.0.3**

Grazie a [Nefando](https://github.com/Nefando), [AndryRock](https://github.com/AR-9217) e [Daddie2](https://github.com/Daddie2) sono attualmente tradotti tutti i DLC fino a Lithoids Species Pack, una prima versione corposa del DLC Federations e parte di Nemesis!

A causa della modalità con la quale Stellaris effettua il check dei mod all'avvio, **per poter conservare la modalità Ironman e achievement non è possibile tradurre completamente tutte le frasi presenti nel gioco** (es. nomi delle navi, nomi degli alieni, nomi delle fazioni e delle città, ecc.). Inoltre, per facilitare il confronto con il resto del mondo, **non sono tradotti volutamente i nomi degli achievement ma solo la loro descrizione**. Se avete già completato gli achievement e la modalità Ironman, o comunque non siete interessati alla cosa, usate il [mod di MM_Winther](https://steamcommunity.com/sharedfiles/filedetails/?id=2377568450) per un'esperienza di traduzione completa.

Questo mod nasce a maggio 2019 partendo dai testi tradotti diligentemente dal team Battle of Paradox Italia ed in particolare dal buon Puxxup - grande lavoro! - non con l'obiettivo di offrire una traduzione alternativa ma con quello di mantenere la compatibilità con achievements e modalità Ironman.

## Contribuire alla traduzione

Paradox aggiorna spesso i propri prodotti, non solo aggiungendo nuovi DLC e nuovi dialoghi, ma anche correggendo dove e quando serve quelli vecchi. Questo significa che è difficile avere una traduzione sempre aggiornata al 100% all'ultima release, quindi ogni aiuto con le traduzioni è ben accetto :)

Per come è strutturato il gioco, e poiché questo mod vuole mantenere gli achievement attivi, non è possibile aggiungere una lingua al gioco: l'unica alternativa per avere l'italiano è modificare una delle lingue disponibili. Per comodità quindi questo mod sovrascrive direttamente la lingua di default, ossia l'inglese. La fonte principale di frasi da tradurre di trova all'interno della cartella [src/mod/localisation/english](src/mod/localisation/english).

**Se non siete avvezzi all'utilizzo di git o GitHub per la modifica dei file, potete utilizzare in alternativa il progetto dedicato su [Transifex](https://www.transifex.com/internet-of-peers/stellaris-italian-translation)**.

### Stato della traduzione

Di seguito i file principali e lo stato della loro traduzione rispetto alla versione v3.0.3 del gioco:

| nome file | stato traduzione |
|--|--|
|achievements_l_english.yml| completa|
|ai_crisis_l_english.yml| completa|
|ancient_relics_events_l_english.yml| completa|
|ancient_relics_l_english.yml| completa|
|apocalypse_l_english.yml| completa|
|dip_messages_l_english.yml| completa|
|diplo_stances_l_english.yml| completa|
|distant_stars_l_english.yml| completa|
|dlc_recommendations_l_english.yml| **parziale**|
|event_chains_l_english.yml| completa|
|events_2_l_english.yml| completa|
|events_3_l_english.yml| completa|
|events_4_l_english.yml| completa|
|events_5_l_english.yml| completa|
|events_l_english.yml| completa|
|federations_anniversary_l_english.yml| **parziale**|
|federations_l_english.yml| **parziale**|
|federations_resolution_comments_l_english.yml| completa|
|horizonsignal_l_english.yml| completa|
|l_english.yml| **parziale**|
|leviathans_l_english.yml| completa|
|lithoids_l_english.yml| completa|
|mandates_l_english.yml| completa|
|marauder_l_english.yml| completa|
|megacorp_l_english.yml| **parziale**|
|messages_l_english.yml| completa|
|modifiers_2_l_english.yml| completa|
|modifiers_3_l_english.yml| completa|
|modifiers_l_english.yml| completa|
|modifiers_utopia_l_english.yml| completa|
|musicplayer_l_english.yml| completa|
|name_lists_l_english.yml| completa|
|necroids_l_english.yml| completa|
|nemesis_content_l_english.yml| **da tradurre**|
|nemesis_crisis_l_english.yml| completa|
|nemesis_custodian_l_english.yml| **da tradurre**|
|nemesis_espionage_l_english.yml| **da tradurre**|
|nemesis_intel_l_english.yml| **da tradurre**|
|observer_events_l_english.yml| completa|
|observer_l_english.yml| completa|
|pop_factions_l_english.yml| completa|
|prescripted_l_english.yml| completa|
|projects_2_l_english.yml| completa|
|projects_3_l_english.yml| completa|
|projects_4_l_english.yml| completa|
|projects_5_l_english.yml| completa|
|projects_l_english.yml| completa|
|scripted_loc_l_english.yml| completa|
|ship_browser_l_english.yml| completa|
|ship_sections_l_english.yml| completa|
|social_gui_l_english.yml| completa|
|standalone_l_english.yml| completa|
|synthetic_dawn_events_l_english.yml| completa|
|technology_l_english.yml| completa|
|traditions_l_english.yml| completa|
|triggers_effects_l_english.yml| completa|
|tutorial_l_english.yml| **parziale**|
|unrest_l_english.yml| completa|
|utopia_ascension_l_english.yml| completa|
|utopia_l_english.yml| completa|
|utopia_megastructures_l_english.yml| completa|
|void_dweller_traditions_l_english.yml| completa|

### Cosa posso modificare?

Tutto quello che trovate qui su GitHub è già traducibile senza rischi di disattivare la modalità Ironman e gli achievement, e in particolare i file che verranno sovrapposti a quelli del gioco si trovano tutti all'interno del percorso [src/mod](/src/mod).

Se dovesse servire invece aggiungere un file non ancora presente su questo repository, prima di modificarlo bisogna assicurarsi che non sia incluso nella lista di file che vengono controllati all'avvio del gioco.

Il file che indica a Stellaris la lista dei file _intoccabili_ si chiama `checksum_manifest.txt` e si trova all'interno della cartella principale di gioco. Attualmente il contenuto del file è il seguente:

```txt
directory 
name = common
sub_directories = yes
file_extension = .txt

directory 
name = common
sub_directories = yes
file_extension = .lua

directory
name = common
sub_directories = yes
file_extension = .csv

directory
name = events
sub_directories = yes
file_extension = .txt

directory
name = map
sub_directories = yes
file_extension = .lua

directory
name = map
sub_directories = yes
file_extension = .txt

directory
name = localisation_synced
sub_directories = yes
file_extension = .yml
```

Prendendo ad esempio la prima sezione, significa che all'avvio del gioco verranno controllati tutti i file `.txt` all'interno della cartella `common` e tutte le sue sotto cartelle. Se anche solo un file di questo tipo viene modificato, il controllo fallisce e il gioco impedisce l'attivazione della modalità Ironman e degli achievement. E lo stesso vale per tutte le altre sezioni indicate nel file di checksum.

### Chiavi e valori

Ogni file contiene delle stringhe formate da una chiave, uguale per ogni linguaggio, e dalla sua traduzione corrispondente. Es. all'interno del file [ai_crisis_l_english.yml](src/mod/localisation/english/ai_crisis_l_english.yml) si trova la linea:

```yml
crisis.2010.name:0 "Il Segnale Fantasma"
```

In questo caso `crisis.2010.name` è la chiave, `0` è la versione (in caso di aggiornamenti alla chiave la versione viene incrementata), mentre `"Il Segnale Fantasma"` è la traduzione. Da notare i doppi apici `"` che delimitano il valore vero e proprio della traduzione, in questo caso già tradotto.

### Commenti

Le linee che iniziano con il carattere speciale `#` sono dei commenti o delle frasi non più utilizzate. **Non sono da tradurre** perché non verranno mai visualizzate all'interno del gioco.

### Una riga, una traduzione

Non andate a capo durante la traduzione di un testo. Se serve andare a capo, si utilizza il doppio carattere speciale `\n\n` Lo vedrete utilizzare anche nella frase originale inglese, ma potrete usare il carattere per andare a capo in italiano dove preferite, non necessariamente nella stessa posizione della frase originale.

### Caratteri speciali

Alcune frasi contengono caratteri speciali quali `§H` oppure `§!`. **Non devono essere tradotti o rimossi**, il gioco li utilizza per dare enfasi alle frasi del gioco. Immaginate come se fossero dei delimitatori per le parole da mettere in grassetto, con `§H` che significa inizio grassetto e `§!` fine grassetto

### Variabili

Alcune frasi contengono delle variabili che possono essere racchiuse tra parentesi quadre - ad esempio `[Root.Capital.GetName]` - o dal carattere del dollaro - ad esempio `$ancrel.8010.intro$`. Queste parole **non vanno tradotte**: il gioco le sostituirà automaticamente in tempo reale con il valore corretto. **NOTA:** Alcune variabili in italiano vi creeranno problemi, in particolare tutte quelle che prevedono un articolo davanti, perché in italiano non sappiamo esattamente quale usare in anticipo. Prendete ad esempio la seguente frase:

```yml
mirror_trade_reply:0 "I was about to suggest that myself, for the benefit of all [Root.Owner.Species.GetNamePlural]!"
```

La traduzione corretta sarebbe:

```yml
mirror_trade_reply:0 "Stavo per suggerirlo io stesso, a beneficio di tutti/e i/gli/le [Root.Owner.Species.GetNamePlural]!"
```

Come potete notare, in inglese `the`, `of all`, ecc. funzionano praticamente sempre bene per tutto - _...of all Humanoids_, _...of all Reptilians_, ecc. - ma in italiano la specie potrebbe essere ad esempio "i Rettiliani", "gli Umanoidi", ecc. E questo solo per citare le specie esistenti e definite all'interno del file [name_lists_l_english.yml](src/mod/localisation/english/name_lists_l_english.yml). Ma in questo gioco anche l'utente può definire le sue specie personalizzate, quindi non lo sapremo mai con certezza a priori. Il gioco possiede variabili per il singolare e il plurale, ma non ad esempio per la differenza tra gli articoli da utilizzare.

Una possibile soluzione è quella di prenderci qualche libertà durante la traduzione e scrivere ad esempio:

```yml
mirror_trade_reply:0 "Stavo per suggerirlo io stesso, a beneficio di tutto il popolo [Root.Owner.Species.GetAdj]!"
```

In questo caso non solo ho aggiunto la parola `popolo`, ma ho usato la variabile utilizzata per definire l'aggettivo caratteristico della specie. All'interno del gioco quindi questa frase verrebbe tradotta con `popolo Rettiliano` o `popolo Umanoide`.

In generale, se vi trovate in una impasse sulla possibile traduzione, provate a vedere come è stato fatto in altri punti e seguite la stessa strada. Altrimenti aprite una segnalazione sul repo e discutiamo delle possibili traduzioni.

### Codifica dei caratteri

**La codifica dei caratteri (charset) deve essere UTF-8 con BOM**. Per sicurezza utilizzate direttamente un editor di testo che supporti più charset come ad esempio [Notepad++](https://notepad-plus-plus.org/downloads/) e il charset corretto verrà riconosciuto senza problemi.

Da notare inoltre che i file di testo possono utilizzare dei caratteri speciali all'inizio per determinare l'ordine di scrittura dei byte (il [BOM](https://it.wikipedia.org/wiki/Byte_Order_Mark)). Usando il metodo del _copia e incolla_ questo dettaglio è trascurabile, e solitamente anche se si modificano file esistenti l'editor non tocca il BOM se è presente. Se avete comunque un editor che vi permette di scegliere se applicare o meno il BOM, es. Notepad++ o Visual Studio Code, optate sempre per mantenerlo.

![Notepad++ con codifica "UTF-8-BOM"](meta/10.png)

![Visual Studio Code con codifica "UTF-8 with BOM"](meta/11.png)

### Ok, capito, ma come modifico i file?

Per contribuire alle traduzioni, potete clonare questo repository, aggiornare direttamente i file e poi procedere con una pull request per effettuare l'unione del vostro repository con quello principale.

Se non siete pratici di `git`, il mio suggerimento è di diventarlo :) È veramente semplice da utilizzare e vi permette di lavorare in locale sul vostro PC.

Un'alternativa, è lavorare comunque sul vostro PC ma effettuare la proposta di modifica direttamente online. Una volta scaricato e tradotto il file che volete aggiornare:

1. Tornate su questo repository, assicuratevi di essere sul ramo **dev**
![Ramo dev](meta/01.png)

1. Navigate fino al file che volete aggiornare e premete l'icona in alto a destra per la modifica, la matita che dice "Edit this file"
![Modifica file](meta/02.png)

1. GitHub vi avverte che non avete permessi di scrittura sul repo, che verrà creato un repository uguale a questo sulla vostra utenza e che verrà creato un nuovo ramo con le vostre modifiche. A quel punto, potrete proporre una pull request sul repository principale. Fate una modifica puntuale o, in caso di modifiche multiple, direttamente copia e incolla di tutto il contenuto del vostro file aggiornato
![Modifica file](meta/03.png)

1. premete `Preview changes` per verificare che le modifiche siano quelle che vi aspettate. Se è tutto ok, inserite un messaggio che descrive brevemente la vostra modifica e premete **Propose file change**
![Anteprima modifiche](meta/04.png)

1. A questo punto avete aggiornato il vostro repository, e potete procedere con la proposta di unione. Premete il pulsante **Create pull request**, modificate il testo del commit - se per qualche motivo volete cambiare il testo rispetto a quanto avete inserito precedentemente - e poi premete nuovamente **Create pull request** per confermate
![Verifica differenze](meta/05.png) ![Crea pull request](meta/06.png)

1. La vostra pull request è stata inoltrata correttamente, risulta in stato aperto (_Open_) e non dovrebbe dare errori di unione (_This branch has no conflicts with the base branch_)
![Stato pull request](meta/07.png)

1. Attendete che la PR sia accettata e unita

1. _Opzionale_. Una volta accetta la vostra PR sarà chiusa (_Closed_) e il vostro ramo con la modifica unito (_Merged_) a quello principale. Potete quindi decidere di cancellare il ramo che è rimasto nel vostro repository, visto che ha assolto al proprio compito di proporre la modifica che è stata accettata
![Ramo unito](meta/08.png) ![Cancella ramo](meta/09.png)

## Installazione mod da release

Trovate le release già pronte del mod nell'apposita sezione [releases](https://github.com/Neurone/stellaris-italian-translation/releases). Scaricate la release che vi interessa e decomprimetela all'interno della cartella:

```txt
(Windows)   : %USERPROFILE%\Documents\Paradox Interactive\Stellaris\mod
(GNU/Linux) : ~/.local/share/Paradox Interactive/Stellaris/mod
(Mac)       : ~/Documents/Paradox Interactive/Stellaris/mod
```

Nel caso non fosse presente la cartella `mod` potete crearla voi normalmente.

## Creazione mod da codice sorgente

Clonare il repository:

```bash
git clone https://github.com/Neurone/stellaris-italian-translation.git
```

Installare le dipendenze:

```bash
cd stellaris-italian-translation
npm install
```

### Versione release

Creare il mod:

```bash
npm run release
```

L'output sarà simile al seguente:

```bash
> stellaris-italian-translation@2.1.0 release
> npx grunt

Running "clean:init" (clean) task
>> 83 paths cleaned.

Running "copy:release" (copy) task
Created 5 directories, copied 73 files

Running "compress:build" (compress) task
>> Compressed 78 files.

Running "copy:complete" (copy) task
Copied 1 file

Running "compress:release" (compress) task
>> Compressed 2 files.

Running "clean:complete" (clean) task
>> 2 paths cleaned.

Done.
```

Verrà creato il file `stellaris-italian-translation-x.x.x.zip` all'interno della cartella `build\dist`, dove `x.x.x` sarà la versione corrente del mod (in questo esempio `2.1.0`).

Per installare il mod, scompattare il file all'interno della cartella:

```txt
(Windows)   : %USERPROFILE%\Documents\Paradox Interactive\Stellaris\mod
(GNU/Linux) : ~/.local/share/Paradox Interactive/Stellaris/mod
(Mac)       : ~/Documents/Paradox Interactive/Stellaris/mod
```

Nel caso non fosse presente la cartella `mod` potete crearla voi normalmente. La struttura finale dei file sarà la seguente:

```txt
[...]/Paradox Interactive/Stellaris/mod/stellaris-italian-translation.zip (zip con tutte le risorse del mod)
[...]/Paradox Interactive/Stellaris/mod/stellaris-italian-translation.mod (descrittore del mod)
```

### Versione sviluppo o per Workshop Steam

La versione sviluppo del mod è utile per fare modifiche, test o per effettuare il caricamento sul Workshop Steam. **La versione release non permette di fare il caricamento sul Workshop Steam**.

Creare il mod in versione sviluppo:

```bash
npm run dev
```

L'output sarà simile al seguente:

```bash
> stellaris-italian-translation@2.1.0 dev
> npx grunt dev

Running "clean:init" (clean) task
>> 83 paths cleaned.

Running "copy:dev" (copy) task
Created 5 directories, copied 75 files

Running "copy:testing" (copy) task
Created 6 directories, copied 75 files

Done.
```

Verrà creata la cartella `build\dist` e all'interno troverete un file ed una cartella:

```txt
stellaris-italian-translation\*
stellaris-italian-translation.mod
```

Lo script copierà automaticamente tutti file necessari per il test nella cartella dei mod, in particolare:

```txt
(Windows)   : %USERPROFILE%\Documents\Paradox Interactive\Stellaris\mod
(GNU/Linux) : ~/.local/share/Paradox Interactive/Stellaris/mod
(Mac)       : ~/Documents/Paradox Interactive/Stellaris/mod
```

La struttura finale dei file sarà la seguente:

```txt
[...]/Paradox Interactive/Stellaris/mod/stellaris-italian-translation/... (cartella contenente tutte le risorse del mod)
[...]/Paradox Interactive/Stellaris/mod/stellaris-italian-translation.mod (descrittore del mod)
```

## Configurazione di integrazione per Transifex

```yml
filters:
  - filter_type: dir
    file_format: YAML_GENERIC
    source_file_extension: yml
    source_language: en
    source_file_dir: src/transifex-en/
    translation_files_expression: 'src/transifex-<lang>/'
```
