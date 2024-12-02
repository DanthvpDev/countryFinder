const searchBtn = document.getElementById('searchBtn');
const input = document.getElementById('inputText');

function SearchCountryByName(data, prompt) {
    return data.filter(e => e.name.common.toLowerCase().includes(prompt));
}

//? This initializes the search events 
function InitializeSearchEvents(data) {
        searchBtn.addEventListener('click',  ()=> {
            let inputData = input.value.toLowerCase();
            SearchCountryByName(data, inputData);
        }, false);
}

//* Function builds up the functionality
async function StartApp() {
    try { 
        //* Checks if API's info is saved in local storage 
        let storageData = await SavingLocalStorage();
        
        InitializeSearchEvents(storageData);
    }
    catch(exc) {
        console.log(`Hubo un error al iniciar la aplicación ${exc}`)
    }
}


document.addEventListener('DOMContentLoaded', StartApp,false);