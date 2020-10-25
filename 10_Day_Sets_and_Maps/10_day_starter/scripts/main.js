const languageArray = [];
const languageSet = new Set();

// pushed all language array into a single array
for (const cLang of countries) {
    languageArray.push(cLang.languages);
    languageSet.add(cLang.languages);
}
console.log(languageArray);
console.log(languageSet);

const allLanguageInOneArray = languageArray.flat();
console.log(allLanguageInOneArray);

const allLanguageInOneSet = new Set(allLanguageInOneArray);
console.log(allLanguageInOneSet);

const languageCount = [];
for (const language of allLanguageInOneSet) {
    const filteredLanguage = allLanguageInOneArray.filter(
        (lang) => language === lang
    );
    languageCount.push({ Lang: language, count: filteredLanguage.length });
}
console.log(languageCount);

languageCount.sort((a, b) => {
    return b.count - a.count;
});
console.log(languageCount);

const element = new Set();
function mostSpokenLanguages(languageCount, length) {
    for (let i = 0; i < length; i++) {
        element.add(`${languageCount[i].Lang} : ${languageCount[i].count}`);
    }
}
mostSpokenLanguages(languageCount, 10);
console.log(element);
