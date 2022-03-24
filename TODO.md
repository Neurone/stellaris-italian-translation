federations_l_english.yml in fase di traduzione

|events_2_l_english.yml| **in revisione**|

|l_english.yml| **parziale**|
|megacorp_l_english.yml| **parziale**|

|aquatics_l_english.yml| **da tradurre**|
|nemesis_content_l_english.yml| **da tradurre**|
|nemesis_custodian_l_english.yml| **da tradurre**|
|nemesis_espionage_l_english.yml| **da tradurre**|
|nemesis_intel_l_english.yml| **parziale**|

------------------------------

dip_messages_l_english.yml -> alcune frasi ancora da tradurre verso la riga 2218

forse: Stazione d'Osservazione => Posto d'Osservazione
Observation Post è l'unica "stazione" che non è chiamata Station. Post significa postazione, posto, palo. Dà molto di più il senso di un avanposto dedicato rispetto al termine stazione.

Uplift => **Elevare** e NON *Evolvere*

Modifiche Epigenetiche => Inneschi Epigenetici

Warp Drive => Motore a Curvatura
Warp => Curvatura

Warform => trovare unica traduzione. Inizio con "Costrutto di Guerra"

Army/Armies => **Esercito/Eserciti** NON *Armata*

verificare "spawning pools", da tradurre come "vasche di riproduzione"

Leader Pool => Elenco Leader Disponibili

POP => Pop quando è una unità, oppure Popolazione quando si riferisce a tutti i POP

Contingente -> Contingenza

Amenities -> Comodità (più che servizi "generici")

Jobs => "Posti di Lavoro" è una traduzione migliore di "Lavori". In progress, ma servirebbe revisione generale, altrimenti accettabile anche:

**XXX Job** => **Lavoro da XXX** oppure **Posto di Lavoro da XXX**

Quando la traduzione è troppo lunga

----------------------------------------
REVISIONI DEEPL completate

clone_army
event_chains
events_6

----------------------------
Nuovo client Transifex

Pull da git:
git pull
npm run clean-transifex-files

Pull:
../../transifex/cli/bin/tx pull -l it -t
npm run clean-transifex-files

Push:
npm run prepare-it-files-for-transifex
../../transifex/cli/bin/tx push -l it -t

----------------------------





-----------------------------
OLD, usare nuovo client

tx config mapping-bulk -p stellaris-italian-translation --source-language en --type "YML GENERIC" -f ".yml" --source-file-dir src/transifex-en --expression "src/transifex-<lang>/{filename}{extension}" --execute