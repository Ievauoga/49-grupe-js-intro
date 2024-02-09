/*
BOOLEAN - logine reiksme

Galimos reiksmes:
-true
-false

Loginiai operatoriai:
 - && (and)
 - || (or)
 - ! (not/invert)

*/

const arSninga = false;
const arLyja = true;

// SPORTAS
// - varzybos vyksta tik dienos metu
// - varzybos vyksta tik jei turime bent 2 komandas

const arDiena = true;
const arYraDviKomandos = true;

// varzybos vyksta kai tenkinamos VISOS salygos

const arVykstaVarzybos = arDiena && arYraDviKomandos;
console.log('Varzybos:', arVykstaVarzybos);

// KERMOSIUS
// - vaikas noretu gaidelio
// - vaikas noretu lazdeles
// - vaikas noretu grybuko

const arTurimGaidelio = true;
const arTurimLazdeles = false;
const arTurimGrybuko = true;

// saldaini gauna kai turimas BENT VIENA preke

const arVaikasGausSaldaini = arTurimGaidelio || arTurimLazdeles || arTurimGrybuko;
console.log('Kermosius:', arVaikasGausSaldaini);

const a = true;
const b = false;
const c = true;

console.log(a && b, '->', false);
console.log(a || b, '->', true);
console.log(a || b || c, '->', true);
console.log(a && b && c, '->', false);


console.log(a && b || c, '->', true);

// console.log (true && false || true, '->', );
// console.log (true && false || true, '->', );
// console.log (false || true, '->', );
// console.log(true, '->', );

console.log(a || b && c, '->', true);

// console.log (true || false && true, '->', );
// console.log (true && true, '->', );
// console.log(true, '->', ); 

console.log(false && false || false, '->', false);
console.log(false && false || true, '->', true);

// console.log(false && true || false, '->', );
console.log(false && true || false, '->', false);

// console.log(false && true || true, '->', );
console.log(false && true || true, '->', true);

// console.log(true && true || false, '->', );
console.log(true && true || false, '->', true);

// console.log(true && true || true, '->', );
console.log(true && true || true, '->', true);

// console.log(true && false || false, '->', );
console.log(true && false || false, '->', false);

// console.log(true && false  || true, '->', );
console.log(true && false || true, '->', true);

console.clear();

// console.log(false || false && false, '->', );
console.log(false || false && false, '->', false);

// console.log(false || false && true, '->',, );
console.log(false || false && true, '->', false);

// console.log( false|| true && false, '->', );
console.log(false || true && false, '->', false);

// console.log(false || true && true, '->',, );
console.log(false || true && true, '->', true);

// console.log(true || true && true, '->', );
console.log(true || true && true, '->', true);

// console.log(true || false && true, '->', );
console.log(true || false && true, '->', true);


console.log(true || true && false, '->', false); // ???
console.log(true || false && false, '->', false); // ????

console.clear();

console.log((true && true) || (false && false));

console.log(((true && true) || false) && false);

console.log(!true);
console.log(!false);

const arMiega = false;
console.log(!arMiega);

console.clear();

// Visi stringai yra true, isskyrus tuscias

console.log(!'Labas');
console.log(! '');

// Visi skaiciai yra true, isskyrus nulis

console.log(!5);
console.log(!-5);
console.log(!0);

// positive, negative numbers
// truthy, falsy number values



























