/*
NUMBERS

KINTAMUJU INICIAVIMAS:
  - const (default)
  - let (kai informacija turi buti kintama)
  - var (niekada nenaudoti, nebent zinai ka darai)

  SKAICIU KATEGORIJOS:
- normalus
  -teigiami/neigiami
  -sveikieji/desimtainiai
- ne normalus
  - Infinity (begalybes)
  - NaN (not-a-number)

  OPERATORIAI:
    - priskyrimo (=)
    - matematiniai:
     - aritmetiniai: +, -, /, *, % (liekana), ** (kelimas laipsniu)
     - aritmetiniai priskyrimo: +=, -=, /=, *=, %= , **= 
     -aritmetiniai: ++, --
*/


console.log(1);
console.log(2);
console.log(3.1415);
console.log(-4);
console.log(-5.555);
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

console.clear();

console.log(555);

const a = 1;
const b = -22;
const PI = 3.1415;

console.log(a);
console.log(b);
console.log(PI);

const number1 = 111;
const number2 = 222;
const number3 = 333;

console.log(number1);
console.log(number2);
console.log(number3);

console.clear();

const sum12 = number1 + number2;
console.log(sum12);

const sum23 = number2 + number3;
console.log(sum23);

const sum13 = number1 + number3;
console.log(sum13);

const x = 1 + 2 + 3 + 4;
console.log(x);

console.clear();

const n1 = 7;
const n2 = 5;

console.log(n1, n2);
console.log('labas rytas');

// 7 + 5 = 12

console.log(n1, '+', n2, '=', n1 + n2);

console.clear();

const sum = n1 + n2;

console.log(n1, '+', n2, '=', sum);


const diff = n1 - n2
console.log(n1, '-', n2, '=', diff);

const multi = n1 * n2
console.log(n1, '*', n2, '=', multi);

const div = n1 / n2
console.log(n1, '/', n2, '=', div);

const du0 = 2 ** 0;
const du1 = 2 ** 1;
const du2 = 2 ** 2;
const du3 = 2 ** 3;
const du4 = 2 ** 4;

console.log(du0);
console.log(du1);
console.log(du2);
console.log(du3);
console.log(du4);

console.clear();

console.log(28 / 5);
console.log(28 % 5);

console.log(9 / 3);
console.log(9 % 3);

// Pirmadienis = 1, 8, 15
// Antradienis = 2, 9, 16
//....
//Sekmadienis = 7, 14

const diena = 8;
const savaitesDiena = diena % 7;

console.log(diena, savaitesDiena);

console.clear();

const valandos = 20;

// naktis = 0; diena = 1;
const dienaArNaktis = (valandos - (valandos % 12)) / 12;
console.log(dienaArNaktis);


// 2+2*2 = 6
// 2+2*2 = 8

console.log(2 + 2 * 2);
console.log((2 + 2) * 2);

console.log(2 + 2 * 2 ** 2);
//console.log(2 + 2 * 4);
//console.log(2 + 8);
//console.log (10);

console.log(4 * 4 / 4);
console.log(4 / 4 * 4);

console.log(45214 / 0);
console.log(-45214 / 0);
console.log(45214 * 0);
console.log(-45214 * 0);

console.clear();


let pinigine = 10;
console.log(pinigine);

pinigine = pinigine + 5;
console.log(pinigine);

pinigine = pinigine + 8;
console.log(pinigine);

pinigine = pinigine - 7;
console.log(pinigine);

console.log('--------------');

let money = 10;
console.log(money);

money += 5;
console.log(money);

console.clear();

let k = 10;
console.log(k);

k += 8;
console.log(k);

k *= 2;
console.log(k);

k /= 4;
console.log(k);

k %= 7;
console.log(k);

k -= 7;
console.log(k);

k **= 2;
console.log(k);

let i = 0;
console.log(i);

i = i - 1;
console.log(i);

i = i - 1;
console.log(i);

i -= 1;
console.log(i);

i -= 1;
console.log(i);

i--;
console.log(i);

i--;
console.log(i);

console.clear();

// dydinimas vyksta po panaudojimo (spausdinimo)
let p = 0;
console.log(p);
console.log(p++);
console.log(p++);
console.log(p++);
console.log(p++);
console.log(p++);

console.log('----------');

// dydinimas vyksta pries panaudojima (spausdinima)
let r = 0;
console.log(r);
console.log(++r);
console.log(++r);
console.log(++r);
console.log(++r);
console.log(++r);




























