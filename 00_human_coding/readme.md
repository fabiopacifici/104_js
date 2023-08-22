# HUMAN CODING

## Problema/Situazione: Selezionare un CD di jazz da ascoltare

Steps:

- mi sposto in dietro con la sedia e mi giro di 180-deg
- mi alzo dalla sedia
- mi dirigo verso i cd
- scorro i cd presenti nello scaffale ie. ['cd1', 'cd2', 'cd3', 'cd4']:
  
  - ? SE (é del genere Jazz):
    - ? SE NON lo (ho giá ascoltato):
      - prendo il cofanetto del cd
      - lo apro e lo estraggo dal cofanetto (?)
      - apro lo stereo e inserisco il cd (?)
      - chiudo lo sportello del lettore
      - avvio la riproduzione
    - ALTRIMENTI:
      - continuo a scorrere i cd
  - : ALTRIMENTI:
    - continuo a scorrere i cd

<!-- 

  ? SE ( NON é del genere Jazz):
    - continuo a scorrere i cd
  :Altrimenti: 
  - ? SE NON lo (ho giá ascoltato):
      - prendo il cofanetto del cd
      - lo apro e lo estraggo dal cofanetto (?)
      - apro lo stereo e inserisco il cd (?)
      - chiudo lo sportello del lettore
      - avvio la riproduzione
    - ALTRIMENTI:
      - continuo a scorrere i cd

 -->

## scelgo un film su netflix: qual è il mio mood? preferisco serie o film? quale genere?

contesto: sono a casa, ho finito di lavorare e sono in cucina.

- prendo il telecomando
- accendo la tv
- seleziono netflix
- SE ho meno di 40 minuti
  - seleziono la voce serie tv
  - SCORRO tra le serie tv
    - SE (voglio rilassarmi)
      - seleziono generi crime o commedia
      - SCORRO tra i titoli disponibili
        - seleziono tra i titoli un serie che mi colpisce
        - leggo la trama
        - guardo il trailer
        - SE mi piace la serie
          - la seleziono e la guardo
        - ALTRIMENTI
          - vado avanti
    - ALTRIMENTI SE (sono triste)
      - scelge genere tragedia
    - ALTRIMENTI SE (allegro)
      - seleziono una film comico
    - ALTRIMENTI:
      - seleziono un'altro genere (azione, docuserie etc)
- ALTRIMENTI:
  - seleziono la voce film
  - SCORRO tra i film
    - SE (voglio rilassarmi)
      - seleziono generi crime o commedia
      - SCORRO tra i titoli disponibili
        - seleziono tra i titoli un serie che mi colpisce
        - leggo la trama
        - guardo il trailer
        - SE mi piace il film
          - la seleziono e la guardo
        - ALTRIMENTI
          - vado avanti
    - ALTRIMENTI SE (sono triste)
      - scelge genere tragedia
    - ALTRIMENTI SE (allegro)
      - seleziono una film comico
    - ALTRIMENTI:
      - seleziono un'altro genere (azione, docuserie etc)

<!--  REFACTORING TODO -->

- SE ho meno di 40 minuti
  - scelgo serie tv
- ALTRIMENTI
  - scelgo film

- SCORRO tra la gli elementi della scelta fatta
  - SE (voglio rilassarmi)
    - seleziono generi crime o commedia
    - SCORRO tra i titoli disponibili
      - seleziono tra i titoli un elemento colpisce
      - leggo la trama
      - guardo il trailer
      - SE mi piace
        - seleziono l'elemento e lo guardo
      - ALTRIMENTI
        - vado avanti
  - ALTRIMENTI SE (sono triste)
    - scelge genere tragedia
  - ALTRIMENTI SE (allegro)
    - seleziono una film comico
  - ALTRIMENTI:
    - seleziono un'altro genere (azione, docuserie etc)

## Layout

implementare un layout assegnato come esercitazione pomeridiana.
  (lo fanno tutti i giorni, dovrebbero avere una mappa mentale di come procedere
 e gli step da eseguire inclusi eventuali imprevisti tipo: se sono bloccato apro
 un ticket, se ho completato una sezione faccio un commit e pusho di github)

- apro slack e leggo la traccia assegnata
- confermo la lettura della traccia
- scarico eventuali assets
- creo la repo su github
- clono la repo in locale con vsCode
- creo file e cartelle per initial commit
- committo e pusho le modifiche sul remote
- analizzo layout con penpot
- cerco il font da selezionare
- SE il font non é disponibile
  - ne scelgo uno simile

- FINTANTO Che (ci sono sezioni del layout da sviluppare) 🔁

  - Lavoro alla sezione
  - SE c'é un errore
    - apro brower
    - apro ispector
    - cerco l'errore
    - leggo la documentazione
      - SE (non riesco a risovere da solo AND sono passati 15 min): 1 AND 0 = 0
        - apro un ticket
      - ALTRINTI SE (non sono passato 15 min)
        - continuo a provare a risolvere il bug
      - Altrimenti:
        - fixo il bug e vado avanti
    - commit & push
  - ALTRIMENTI
    - vado alla prossima sezione

- Ricontrollo il codice per fare pulizia e refactoring
- Se ci sono correzioni
  - correggo
- Committo e pusho (finish)
