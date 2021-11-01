/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/
'use strict'
const generateList = (tomb) => {
    let a = '';
    tomb.forEach(item => {
        a = a + "<li>" + item + "</li>";
        return a;
    });
    return "<ul>" + a + "</ul>";
}

//console.log(generateList(["első", "masodik", "harmadik"]));