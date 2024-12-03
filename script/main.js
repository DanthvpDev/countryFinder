const searchBtn = document.getElementById('searchBtn');
const inputText = document.getElementById('inputText');
const form = document.getElementById('formSearch');
const comboRegions = document.getElementById('comboRegions')

//? This initializes the search events 
function InitializeSearchEvents(data) {

    //* Search button event initialization
    searchBtn.addEventListener('click', () => {
        let inputData;
        let filteredData;
        if (inputText) {
            inputData = inputText.value.trim().toLowerCase();
            filteredData = SearchCountryByName(data, inputData)
            if (filteredData.length > 0) ShowCountryCards(filteredData)
        }

        if (comboRegions) {
            inputData = comboRegions.value.trim().toLowerCase();
            filteredData = SearchCountryByRegion(data, inputData)
            if (filteredData.length > 0) ShowCountryCards(filteredData)
        }

    }, false);
    console.log(inputText)

    if (inputText) {
        //* Search whent enter event initialization
        inputText.addEventListener('keypress', e => {
            if (e.key == 'Enter') {
                e.preventDefault();
                inputData = inputText.value.trim().toLowerCase()
                filteredData = SearchCountryByName(data, inputData);
                if (filteredData.length > 0) ShowCountryCards(filteredData)
            }
        })
    }
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