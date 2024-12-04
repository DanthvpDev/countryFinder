//? Filter among names of countries that includes the prompt
function SearchCountryByName(data, prompt) {
    return data.filter(e => e.name.common ? e.name.common.toLowerCase().includes(prompt) : e.name.toLowerCase().includes(prompt));
}

//? Filter among regions that includes the prompt
function SearchCountryByRegion(data, prompt) {
    return data.filter(e => e.region.toLowerCase().includes(prompt));
}

//? Filter among continents that includes the prompt
function SearchCountryByContinent(data, prompt) {
    return data.filter(e => e.continents[0].toLowerCase().includes(prompt));
}