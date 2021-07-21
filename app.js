fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))


const displayCountries = countries => {


    countries.forEach(country => {

        const countriesDiv = document.getElementById('countriesList');

        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
    
            <h3 class="country-name">${country.name}</h3>
            <p class="country-capital">${country.capital}</p>
            <button onClick="displayCountryDetails('${country.name}')" class="btn">Show Details</button>
    `

        countryDiv.innerHTML = countryInfo;

        countriesDiv.appendChild(countryDiv);


    });

}

const displayCountryDetails = name =>{

    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryDetails(data[0]))
}

const renderCountryDetails = country =>
{
    const countryDetailsDiv = document.getElementById('countryDetails');
    // console.log(country.currencies);
    countryDetailsDiv.innerHTML = `
        
        <h3>Country-Name: ${country.name}</h3>
        <p>Population: ${country.population}</p>
        <img src = '${country.flag}'>
        <p>Languages: ${country.languages[0].nativeName}</p>
        <p>Currencies: ${country.currencies[0].name }</p>
    
    `
}

