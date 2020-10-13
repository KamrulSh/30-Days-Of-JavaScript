// Solve: Level 2 ===========================>

// 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

// 3
let ss = '10';
let sn = 10;
console.log(ss === sn);
ss = parseInt(ss);
console.log(ss === sn);

// 4
let sf = parseFloat('9.8');
let st = 10;
console.log(sf == st);
sf = Math.ceil(sf);
console.log(sf === st);

// 5
let py = 'python';
let ja = 'jargon';
console.log(py.includes('on'));
console.log(ja.includes('on'));

//6
let sen = 'I hope this course is not full of jargon.';
console.log(sen.includes('jargon'));

// 7, 8, 9
console.log(Math.floor(Math.random() * 101)); // 0 to 100 inclusively
console.log(Math.floor(Math.random() * 51) + 50); // 50 to 100 inclusively
console.log(Math.floor(Math.random() * 256)); // 0 to 255 inclusively

// 10
let js = 'JavaScript';
let len = js.length - 1;
let rn = Math.round(Math.random() * len);
console.log(js[rn]);

// 11
console.log(
    '1 1 1 1 1',
    '\n2 1 2 4 8',
    '\n3 1 3 9 27',
    '\n4 1 4 16 64',
    '\n5 1 5 25 125');

// 12
let str = 'You cannot end a sentence with because because because is a conjunction';
let i1 = str.indexOf('because');
console.log(str.substr(i1, 24));


// Solve: Level 3 ===========================>

// 1
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let count = love.toLowerCase().match(/love/g);
console.log(count);

// 2
let bec = 'You cannot end a sentence with because because because is a conjunction';
let cnt = bec.toLowerCase().match(/because/g);
console.log(cnt);

// 3
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
sentence = sentence.replace(/[^a-zA-Z ]/g, '');
console.log(sentence);

// 4
let inc = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let num = inc.match(/\d+/g);
console.log(num);
for (let index = 0; index < num.length; index++) {
    num[index] = +num[index];
}
console.log(num);
console.log(num.reduce((a,b) => a+b));
