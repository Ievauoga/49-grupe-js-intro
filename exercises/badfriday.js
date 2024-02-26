/*
Sukurti du kintamuosius. 
Jiems priskirti savo mylimo aktoriaus vardą 
ir pavardę kaip stringus (Jonas Jonaitis).
Atspausdinti trumpesnį stringą.

*/

const vardas = 'Angelina';
const surname = 'Jolie';

if (vardas.length <= surname.length) {

    console.log(vardas);
} else {
    console.log(surname);
}

/*
 Sukurkite 4 kintamuosius,
 kurie saugotų jūsų vardą, pavardę, 
 gimimo metus ir šiuos metus (nebūtinai tikrus).
 Parašykite kodą, kuris pagal gimimo metus
 paskaičiuotų jūsų amžių ir naudodamas vardo ir 
 pavardės kintamuosius atspausdintų tokį sakinį :
 "Aš esu Vardenis Pavardenis. 
 Man yra XX metai(ų)".

*/

const vardas1 = 'Bredas';

const pavarde = 'Pitas';

const gimimas = 1960;

const metai = 2024;

const manoAmzius = (metai - gimimas);

console.log(`As esu ${vardas1} ${pavarde}. Man yra ${manoAmzius} metai(ų). `);

/*

Sukurti du kintamuosius.Jiems priskirti 
savo mylimo aktoriaus vardą ir pavardę kaip stringus.
Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą
 iš trijų paskutinių vardo ir pavardės kintamųjų raidžių.Jį atspausdinti.

 */

const vardas2 = 'Emma';

const pavarde2 = 'Stone';

const newName = vardas2.slice(-3) + pavarde2.slice(-3);

console.log(newName);

/*

Sukurti kintamąjį su stringu:
“Once upon a time in hollywood”.
Jame visas “o” (didžiąsias ir mažąsias) 
pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

*/

let text = 'Once upon a time in hollywood';
let result = text.toLowerCase().replace(/o/g, '*');



console.log(result);

/*


Pasinaudokite atsitiktinio skaičiaus
generavimo funkcija.Sukurkite du kintamuosius
ir naudodamiesi funkcija jiems priskirkite
atsitiktines reikšmes nuo 0 iki 4. Didesnę 
reikšmę padalinkite iš mažesnės.Atspausdinkite
rezultatą jį suapvalinę iki 2 skaičių po kablelio.

*/
let a = 1;
const pirmassk = Math.floor(Math.random() * 5);
const antrassk = Math.floor(Math.random() * 5);
if (pirmassk > antrassk) {
    a = pirmassk / antrassk;
    console.log(pirmassk, antrassk, Math.round(a));
} else {
    a = antrassk / pirmassk;
    console.log(pirmassk, antrassk, Math.round(a));

}

let rezultatas = pirmassk > antrassk ? pirmassk / antrassk : antrassk / pirmassk;

console.log(rezultatas);





/*

Naudokite funkciją ir sukurkite
tris kintamuosius kuriems priskirkite 
atsitiktines reikšmes nuo 0 iki 25.
Raskite ir atspausdinkite vidurinę reikšmę.

*/

// function vidurine(vienas2, du, trys)

const vienas2 = Math.floor(Math.random() * 26);

const du = Math.floor(Math.random() * 26);

const trys = Math.floor(Math.random() * 26);
let i = [vienas2, du, trys];
i.sort((a, b) => a - b);
console.log(i[1]);

// console.log(vidurine(vienas2, du, trys));
console.log(vienas2, du, trys);
console.log(i);



/*
Sukurti du kintamuosius.
Jiems priskirti savo mylimo
aktoriaus vardą ir pavardę kaip stringus. 
Sukurti trečią kintamąjį ir jam priskirti stringą, 
sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių.
 Jį atspausdinti.

 */

const vardas3 = 'Angelina';
const surname2 = 'Jolie';
const inicialai = `${vardas3[0]}.${surname2[0]}.`;
console.log(inicialai);

/*
Parašyti kodą, kuris generuotų atsitiktinį
stringą iš lotyniškų mažųjų raidžių.Stringo
ilgis 3 simboliai.


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
*/

// const lotynu = 'abcdefghijklmnopqrstuvwxyz';

// let stringas = '';

// let lotyniskosRaides = 'abcdefghijklmnopqrstuvwxyz';

// for (let i = 0; i < 3; i++);

// // function rand(min, max) {
// //     min = Math.ceil(min);
// //     max = Math.floor(max);
// //     return Math.floor(Math.random() * (max - min + 1) + min)
// // }

function randomLetter() {
    let randomabc = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // for (let i = 0; i < 3; i++);
    // randomabc = randomabc + alphabet Math.floor(Math.random() * 27);
    return alphabet

    // console.log(randomabc);
}

const rasti = typeof alphabet;
console.log(rasti);


























