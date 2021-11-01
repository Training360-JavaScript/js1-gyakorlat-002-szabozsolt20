/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/
'use strict'
const brutto = tomb => {
    return Math
        .round(tomb.map(item => item * 1.27)
            .reduce((akku, kovetkezo) => akku + kovetkezo));
}

/* A feladat leírása alapján a fenti az elvárt megoldás, de a szorzás művelet asszociatívitása miatt a map() ki is hagyható
        const brutto2 = tomb => {
            return Math.round(tomb.reduce((akku, kovetkezo) => akku + kovetkezo) * 1.27);
        }
 */