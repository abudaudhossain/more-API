const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

loadCountries();
const displayCountries = (countries) => {
    const countryContainer = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="detailinfo('${country.name}')">details</button>
        `;
        countryContainer.appendChild(div);
        // console.log(country);
    })
}

const detailinfo = (country) => {
    const url = `https://restcountries.eu/rest/v2/name/${country}`
    fetch(url).then(res => res.json()).then(data => displayInfo(data));



    // console.log(url);
}

const displayInfo = (info) => {
    const detailsContainer = document.getElementById('details-info');
    const div = document.getElementById('ad');
    div.classList.add('country-ditails');
    info.forEach(countryInfo => {   
        div.innerHTML = ` 
        <div>
            <h4>${countryInfo.name}</h4>
            <h5>${countryInfo.nativeName}</h5>
            <p>${countryInfo.population}</p>
        </div>
        <img width=300px; src="${countryInfo.flag}" alt="">
        `;
        detailsContainer.appendChild(div)
        console.log(countryInfo);
    })
    // console.log(info);
}