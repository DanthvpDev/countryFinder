//? Filter among names of countries that includes the input text
function SearchCountryByName(data, prompt) {
    return data.filter(e => e.name.common.toLowerCase().includes(prompt));
}

//? Filter among regions that includes the input text
function SearchCountryByRegion(data, prompt) {
    return data.filter(e => e.region.toLowerCase().includes(prompt));
}