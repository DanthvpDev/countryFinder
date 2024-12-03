const searchBtn = document.getElementById('searchBtn');
const inputText = document.getElementById('inputText');
const form = document.getElementById('formSearch');

//? Filter among data that includes the input text
function SearchCountryByName(data, prompt) {
    return data.filter(e => e.name.common.toLowerCase().includes(prompt));
}

//? This initializes the search events 
function InitializeSearchEvents(data) {

    //* Search button event initialization
    searchBtn.addEventListener('click', () => {
        let inputData = inputText.value.trim().toLowerCase();
        let filteredData = SearchCountryByName(data, inputData);
        if (filteredData.length > 0) ShowCountryCards(filteredData)
        else console.log('NO');
    }, false);

    //* Search whent enter event initialization
    inputText.addEventListener('keypress', e => {
        if (e.key == 'Enter') {
            e.preventDefault();
            let inputData = inputText.value.trim().toLowerCase()
            let filteredData = SearchCountryByName(data, inputData);
            if (filteredData.length > 0) ShowCountryCards(filteredData)
        }
    })
}

//* Function builds up the functionality
async function StartApp() {
    try {
        //* Checks if API's info is saved in local storage 
        let storageData = await SavingLocalStorage();
        let dataForCards = storageData.map(element => ({
            name: element.name.common,
            region: element.region,
            flag: element.flags.png
        }));
        InitializeSearchEvents(storageData);
        ShowCountryCards(dataForCards);
    }
    catch (exc) {
        console.log(`Hubo un error al iniciar la aplicación ${exc}`)
    }
}


document.addEventListener('DOMContentLoaded', StartApp, false);