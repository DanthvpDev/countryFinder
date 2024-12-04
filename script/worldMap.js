const continentsSVG = document.querySelectorAll('.continents')
const p = document.getElementById('continentName');


Array.from(continentsSVG).forEach(continent => {
    let id;

    continent.addEventListener('click', (e)=> {
        let region =  SearchCountryByContinent(JSON.parse(localStorage.getItem('countriesData')), id);
        ShowCountryCards(region);
     })

    //? When over a contient, fills it  blue
    continent.addEventListener('mouseover', (event)=> {
        id = continent.getAttribute('id').split('_').join(' ');

        [...continent.children].forEach(element => {
            element.style.fill = 'rgb(44, 108, 187)'
        });

        console.log(p);

        let mousePositionX = event.clientX;
        let mousePositionY = event.clientY;
        p.style.display = 'inline-block';
        p.style.top = `${mousePositionY - 260}px`
        p.style.left = `${mousePositionX - 20}px`
        p.textContent = id;
        
    })

    //? When leave a contient, return the color to grey
    continent.addEventListener('mouseleave', ()=> {
        [...continent.children].forEach(element => {
            element.style.fill = '#0000005f'
        });

        p.style.display = 'none';
    })

    
});