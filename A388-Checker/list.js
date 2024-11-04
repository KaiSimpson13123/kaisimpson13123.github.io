document.addEventListener('DOMContentLoaded', () => {
    const regionFilter = document.getElementById('region-filter');
    const countryFilter = document.getElementById('country-filter');
    const cardContainer = document.getElementById('card-container');

    // Example structure for airport data
    let airports = [];

    // Fetch airport data from airports.txt
    fetch('airports.txt')
        .then(response => response.text())
        .then(data => {
            airports = data.split('\n').map(line => {
                const [icao, name, country, region] = line.split(',');
                return { icao, name, country, region };
            });
            displayAirports(airports);
        })
        .catch(error => console.error('Error fetching airports:', error));

    // Display filtered airport cards
    function displayAirports(filteredAirports) {
        cardContainer.innerHTML = ''; // Clear existing cards
        filteredAirports.forEach(airport => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${airport.name}</h3>
                <p>ICAO: ${airport.icao}</p>
                <p>Country: ${airport.country}</p>
                <p>Region: ${airport.region}</p>
            `;
            card.addEventListener('click', () => {
                window.location.href = `https://kaicors-6abf9658da78.herokuapp.com/https://gateapi-ae6bb7ff61e6.herokuapp.com/GateAPI/${airport.icao}`;
            });
            cardContainer.appendChild(card);
        });
    }

    // Filter by region or country
    function filterAirports() {
        const selectedRegion = regionFilter.value;
        const selectedCountry = countryFilter.value;

        const filtered = airports.filter(airport => {
            return (selectedRegion === '' || airport.region === selectedRegion) &&
                   (selectedCountry === '' || airport.country === selectedCountry);
        });
        displayAirports(filtered);
    }

    // Event listeners for dropdown filters
    regionFilter.addEventListener('change', filterAirports);
    countryFilter.addEventListener('change', filterAirports);
});
