const countriesAPI = "https://restcountries.eu/rest/v2/all";

// ========================> level 1

let areaArr = [];
const fetchCountriesData = async () => {
    try {
        const response = await fetch(countriesAPI);
        const data = await response.json();
        //data = JSON.stringify(data);
        //document.getElementById("countryData").innerHTML = JSON.stringify(data, undefined, 4);
        for (const country of data) {
            areaArr.push({ country: country["name"], area: country["area"] });
            console.log(
                country["name"],
                country["capital"],
                country["languages"],
                country["population"],
                country["area"]
            );
        }
        // ========================> level 3
        // # 2
        // top 10 largest country
        areaArr.sort((a, b) => {
            return b.area - a.area;
        });
        for (let i = 0; i < 10; i++) {
            console.log(i, areaArr[i]);
        }
    } catch (error) {
        console.log(error);
    }
};

fetchCountriesData();
