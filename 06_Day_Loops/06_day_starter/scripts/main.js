//console.log(countries)

// level 1 ===============================>

// 13 - generate array of 5 random numbers
let num = [];
for (let index = 0; index < 5; index++) {
    const n = Math.round(Math.random() * 10);
    num.push(n);
}
console.log(num);

// 14 - generate array of 5 unique random numbers
let num1 = [];
while (num1.length < 5) {
    let rn = Math.round(Math.random() * 100);
    if (num1.indexOf(rn) === -1) {
        num1.push(rn);
    }
}
console.log(num1);

// 15 - generate a six characters random id
// let rr = Math.random().toString(36).substring(6);
// console.log(rr);
let res = '';
let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let index = 0; index < 5; index++) {
    res += char.charAt(Math.random() * char.length);
}
console.log(res);

// level 2 ===============================>

// 1
res = '';
let rnd = Math.round(Math.random() * 30) + 1;
console.log(rnd);
for (let index = 0; index < rnd; index++) {
    res += char.charAt(Math.random() * char.length);
}
console.log(res);

// 2 - generates a random hexadecimal number
let hex = Math.round(Math.random() * 2 ** 24).toString(16).padStart(6, '0');
console.log('#' + hex);

// 6 - array of arrays
let coun = [];
let newCoun = [];
let newCountries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
for (let index = 0; index < newCountries.length; index++) {
    coun.push([newCountries[index], newCountries[index].slice(0, 3).toUpperCase(), newCountries[index].length]);
}
newCoun.push(coun);
console.log(newCoun);

// 8
let iaCountry = [];
let index;
for (index = 0; index < newCountries.length; index++) {
    if (newCountries[index].includes('ia')) {
        iaCountry.push(newCountries[index]);
    }
}
console.log(iaCountry);

// 9
let countryLength = [];
let maxVal = 0, i;
for (let index = 0; index < newCountries.length; index++) {
    let len = newCountries[index].length;
    countryLength.push();
    if (len > maxVal) {
        maxVal = len;
        i = index;
    }
}
console.log(newCountries[i], maxVal);