const searchBtn = document.getElementById('searchBtn');
const inputText = document.getElementById('inputText');
const form = document.getElementById('formSearch');
const comboRegions = document.getElementById('comboRegions');




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
        ShowCountryCards(dataForCards);
        InitializeSearchEvents(storageData);
    }
    catch (exc) {
        console.log(`Hubo un error al iniciar la aplicación ${exc}`)
    }
}


//? This initializes the search events 
function InitializeSearchEvents(data) {
    
    //* Search button event initialization
    searchBtn.addEventListener('click', () => {
        let inputData;
        let filteredData;
        
        // *If the input text HTML element has been rendered
        if (inputText) {
            inputData = inputText.value.trim().toLowerCase();
            filteredData = SearchCountryByName(data, inputData)
        }
        
        // *If the option HTML element has been rendered
        if (comboRegions) {
            inputData = comboRegions.value.trim().toLowerCase();
            filteredData = SearchCountryByRegion(data, inputData)
        }
        if (filteredData.length > 0) ShowCountryCards(filteredData)
            
        }, false);
        
        
        if (inputText) {
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

        
        
        
    }

document.addEventListener('DOMContentLoaded', StartApp, false);