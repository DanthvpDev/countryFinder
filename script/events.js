const searchBtn = document.getElementById('searchBtn');
const inputText = document.getElementById('inputText');
const form = document.getElementById('formSearch');


//* Function builds up the functionality
async function StartApp() {
    try {
        //? Stores data brought from the  API 
        let storageData = await SavingLocalStorage();

        ShowCountryCards(storageData);
        InitializeSearchEvents(storageData);
    }
    catch (exc) {
        console.log(`Hubo un error al iniciar la aplicación ${exc}`)
    }
}

//* *Initializes the event on the more button that opens the modal
function InitializeModalEvent(data) {
    const moreBtn = document.querySelectorAll('.btnCountryInfo');
    moreBtn.forEach(element => {
        element.addEventListener('click', (e) => {
            element.setAttribute('data-bs-toggle', "modal")
            element.setAttribute('data-bs-target', "#modalCountries")
            let parent = e.target.parentElement;
            let cardTitle = parent.children[0].children[0].textContent.toLowerCase();
            console.log(data);
            let countryInfo = SearchCountryByName(data, cardTitle);

            RenderModal(countryInfo);
        })
    })
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
        const comboRegions = document.getElementById('comboRegions');
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