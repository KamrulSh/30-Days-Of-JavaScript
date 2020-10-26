// level 3 ========================>

// #1

const showCountryData = () => {
    for (const {
        name,
        capital,
        languages,
        population,
        flag,
        currency,
    } of countries) {
        console.log(name, capital, languages, population, flag, currency);
    }
};

console.log(showCountryData(countries));

// #3
const students = [
    ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
    ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
let stuObj = [];
let convertArrayToObject = (stu) => {
    for (s of stu) {
        stuObj.push({ Name: s[0], skills: s[1], scores: s[2] });
    }
    return stuObj;
};
console.log(convertArrayToObject(students));

// #4
const student = {
    name: "David",
    age: 25,
    skills: {
        frontEnd: [
            { skill: "HTML", level: 10 },
            { skill: "CSS", level: 8 },
            { skill: "JS", level: 8 },
            { skill: "React", level: 9 },
        ],
        backEnd: [
            { skill: "Node", level: 7 },
            { skill: "GraphQL", level: 8 },
        ],
        dataBase: [{ skill: "MongoDB", level: 7.5 }],
        dataScience: ["Python", "R", "D3.js"],
    },
};
student.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
student.skills.dataScience.push("SQL");
console.log(student);
