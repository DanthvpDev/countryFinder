let gridContainer = document.getElementById('gridContainer');
const infoList = document.getElementById('infoList');

function ShowCountryCards(data) {
    if(gridContainer.children.length > 0) {
        Array.from(gridContainer.children).forEach(element => {
            element.remove();
        });
    }
    data.forEach(element => {
        let newDiv = document.createElement('div');
        newDiv.className += 'col-3 bg-light text-black text-start py-3 px-3 rounded-2 cardShadow countryCard';
        newDiv.innerHTML = `
                <div class="col-12 d-flex justify-content-between w-100">
                    <h3 class="py-1 text-primary">${typeof(element.name) === 'object' ? element.name.common : element.name}</h3>
                    <img src='${typeof(element.flags) === 'object' ? element.flags.png : element.flag}' class='object-fit-contain' width="50" height="40"></img>
                </div>
                <p class="text-dark fs-5 cl-12 pb-2 w-100">${element.region}</p>
                <a class="btn btn-light fw-semibold btnCountryInfo">More</a>
        `
        gridContainer.appendChild(newDiv);
    });
    
    InitializeModalEvent(data);
    
}

function RenderModal(data) {
    data.forEach(element => {
        infoList.innerHTML = `
                <li>
                    <picture class="d-flex w-75 mx-auto">
                        <img src='${typeof(element.flags) === 'object' ? element.flags.png : element.flag}' class='object-fit-contain w-100'>
                    </picture>
                </li>
                <li>
                    <i class="fa-solid fa-star"></i> <p>${typeof(element.name) === 'object' ? element.name.official : element.name}</p>
                </li>
                <li>
                    <i class="fa-solid fa-landmark-flag"></i> <p>${element.capital}</p>
                </li>
                <li>
                    <i class="fa-solid fa-earth-americas"></i> <p>${element.region ? element.region : 'No Data'}</p>
                </li>
                <li>
                    <i class="fa-solid fa-map"></i> <p>${element.subregion ? element.subregion : 'No Data'}</p>
                </li>
                <li>
                    <i class="fa-solid fa-people-group"></i> <p>${element.population ? element.population.toLocaleString('es-ES') : 'No Data'}</p>
                </li>
                <li>
                    <i class="fa-solid fa-language"></i> <p>${typeof(element.languages) === 'object' ? Object.values(element.languages)[0] : element.languages}</p>
                </li>
                <li>
                    <i class="fa-solid fa-money-bill-1"></i> <p>${typeof(element.currencies) === 'object' ? Object.values(element.currencies)[0].name : element.currencies}</p>
                </li>`
    });
}