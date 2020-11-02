const catsAPI = "https://api.thecatapi.com/v1/breeds";

// ========================> level 2

const fetchCatsData = async () => {
    try {
        const response = await fetch(catsAPI);
        const data = await response.json();
        for (const cat of data) {
            console.log(cat, cat["name"]);
        }
    } catch (error) {
        console.log(error);
    }
};

fetchCatsData();
