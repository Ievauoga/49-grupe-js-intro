/*
STRING - tekstas, simboliu grandinele

Iniciavimo simboliai/budai: ' vienguba ('), dviguba (") kabutes ir ` (backtick) kabutes
*/

const text1 = 'Pirmas tekstas.';
console.log(text1);

const text2 = "O cia jau antras tekstas.";
console.log(text2);

// Cia yra tekstas be kabuciu.

const text31 = 'Cia yra tekstas be kabuciu.';
const text32 = "Cia yra tekstas be kabuciu.";

console.log(text31);
console.log(text32);

// Vienguba (') kabute.

const kabute21 = "Vienguba (') kabute.";
console.log(kabute21);

// Dviguba (") kabute.
const kabute12 = 'Dviguba (") kabute.';
console.log(kabute12);


const vardas = 'Chuck';
const pavarde = 'Norris';

const fullName = vardas + ' ' + pavarde;
console.log(fullName);

// Vienguba (') ir dviguba (") kabutes.

const kabutesMix1 = "Vienguba (') ir " + 'dviguba (") kabutes.';
console.log(kabutesMix1);

const kabutesMix21 = 'Vienguba (\') ir dviguba (") kabutes.';
console.log(kabutesMix21);

const kabutesMix22 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(kabutesMix22);

const kabutesMix23 = 'Vienguba (\') ir dviguba (\") kabutes.';
console.log(kabutesMix23);

const kabutesMix24 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(kabutesMix24);

console.clear();

const gele = 'tulpe';
const spalva = 'geltona';

// As turiu tulpe kuri yra geltona.
const sakinys = 'As turiu ' + gele + ' kuri yra ' + spalva + '.';
console.log(sakinys);

const backtick = `Backtick sakinys.`;
console.log(backtick);

const backtick12 = `Vienguba (') ir dviguba (") kabutes.`;
console.log(backtick12);

const backtick123 = `Vienguba (') ir dviguba (") ir backtick (\`) kabutes.`;
console.log(backtick123);

console.clear();


const backticGelytes = `As turiu ${gele} kuri yra ${spalva}.`;
console.log(backticGelytes);

const n1 = 7;
const n2 = 55;

// 7 + 5 = 12;

const pliusas = `${n1} + ${n2} = ${n1 + n2};`;
console.log(pliusas);

//Stai sarasas:
// - pirmas
// - antras
// - trecias

// \r - return
// \n - new line
// \t - tab

const eilute = 'Stai sarasas:\r\n\
- pirmas\r\n\
- antras\r\n\
- trecias';


console.log(eilute);

/*
  <header>
       <img src="#" alt="">
       <nav>
         <a href="#">Link</a>
         <a href="#">Link</a>
         <a href="#">Link</a>
       </nav>
  </header>
  */

const HTML = `<header>
    < img src= "#" alt = "">
        <nav>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
        </nav>
  </header >`;

console.log(HTML);





















