let gridContainer = document.getElementById('gridContainer');

function ShowCountryCards(data) {
    if(gridContainer.children.length > 0) {
        console.log(data)
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
    return;
    
}