/*
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges 
típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként 
megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, 
ha nem, akkor -1 legyen az értéke
- `allElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömb minden eleme number típusú-e vagy sem
- `someElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömbben van-e number típusú elem vagy sem
*/
'use strict'
const checker = (tomb, a) => {
    //const exist_v=tomb.some(item=>item==a);
    //findIndex(item=>item==a) != -1;
    return {
        exists: tomb.some(item => item == a),
        index: tomb.findIndex(item => item == a),
        allElementsAreNumbers: tomb.every(item => !isNaN(item)), //!tomb.some(item => isNaN(item)),
        someElementsAreNumbers: tomb.some(item => !isNaN(item)), //!tomb.every(item => isNaN(item))
    }
}
