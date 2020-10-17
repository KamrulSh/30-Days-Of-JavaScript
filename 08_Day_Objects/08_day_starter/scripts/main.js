// level 2 ========================>

// 1, 2
let loggedInCount = 0;
let point50Count = 0;


for (const user in users) {
    let hasSkills = users[user]['skills'];
    let hasLoggedIn = users[user]['isLoggedIn'];
    let pointCount = users[user]['points'];
    console.log(user, hasSkills, hasSkills.length, hasLoggedIn, pointCount);
    if (hasSkills.length > 1) {
        console.log(user);
    }
    if (hasLoggedIn == true) {
        loggedInCount++;
    }
    if (pointCount >= 50) {
        point50Count++;
    }
    // let mern = ['MongoDB', 'Express', 'React', 'Node'];
    // let isMERN = mern.every(val => hasSkills.includes(val));
    // console.log(isMERN);
}
console.log(loggedInCount, point50Count);

// 7
console.log(countries.length, typeof(countries))
for (const all of countries) {
    console.log(all.name, all.capital, all.population, all.languages);
}