async function APIConnection(value, param) {
    let data;
    param != undefined && value 
        ? data = await fetch(`https://restcountries.com/v3.1/${value}=${param}`)
        : data = await fetch('https://restcountries.com/v3.1/all');
    return data.json();

}

//* Checks if local storage exists. If not, it saves the API response 
async function SavingLocalStorage() {
    if(!localStorage.getItem('countriesData')) {
        let APIData = await APIConnection();
        localStorage.setItem('countriesData', JSON.stringify(APIData));
    }
    return JSON.parse(localStorage.getItem('countriesData'))
} 