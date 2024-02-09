const text = 'Pomidoras';

const lower = text.toLowerCase();
console.log(lower);

const upper = text.toUpperCase();
console.log(upper);

const combo = text.toUpperCase().toLowerCase();
console.log(combo);


const firstLetter = text[0];
console.log(firstLetter);

const lastLetter = text[8];
console.log(lastLetter);

const crazyLetter1 = text[-1];
console.log(crazyLetter1);

//"Pomidoras" turi 9 raides.

const sakinys = `"${text}" turi ${text.length} raides.`
console.log(sakinys);


const ilgis = 'Kiek cia simboliu?'.length;
console.log(ilgis);

const name1 = 'Jonas';
const surname1 = 'Jonaitis';
const name2 = 'Maryte';
const surname2 = 'Marytaite';
const name3 = 'Petras';
const surname3 = 'Petraitis';
const name4 = 'Ona';
const surname4 = 'Onaite';

// Vardo "Jonas" ilgis yra 5 simboliai.
// Asmens Jonas Jonaitis inicialai yra J.J.

const vardas1 = `Vardo "${name1}" ilgis yra ${name1.length} simboliai.`;
console.log(vardas1);
const pavarde1 = `Pavarde "${surname1}" ilgis yra ${surname1.length} simboliai.`;
console.log(pavarde1);
const inicialai = `Asmens ${name1} ${surname1} inicialai yra ${name1[0]}.${surname1[0]}.\n`;
console.log(inicialai);

const vardas2 = `Vardo "${name2}" ilgis yra ${name2.length} simboliai.`;
console.log(vardas2);
const pavarde2 = `Pavarde "${surname2}" ilgis yra ${surname2.length} simboliai.`;
console.log(pavarde2);
const inicialai1 = `Asmens ${name2} ${surname2} inicialai yra ${name2[0]}.${surname2[0]}.\n`;
console.log(inicialai1);

















