document.getElementById('check-button').addEventListener('click', function() {
    const airportICAO = document.getElementById('airport-input').value.trim().toUpperCase();
    if (airportICAO) {
        fetchAirportData(airportICAO);
    }
});

async function fetchAirportData(icao) {
    // Show loading icon
    document.getElementById('loading-icon').style.display = 'block';

    try {
        // Fetch the airport data from the corresponding JSON file
        const response = await fetch(`Airports/${icao}.json`);
        const data = await response.json();

        // Hide the loading icon
        document.getElementById('loading-icon').style.display = 'none';

        // If no data is found, show a message
        if (Object.keys(data).length === 0) {
            showPopup('No airline data found for this airport.');
            return;
        }

        // Clear previous content
        document.getElementById('popup-message').innerHTML = '';
        
        
        // Create cards for each airline
        for (let airline in data) {
            const gates = data[airline].join(', ');

            const airlineCard = document.createElement('div');
            airlineCard.classList.add('airline-card');

            // Add airline name
            const airlineName = document.createElement('h3');
            airlineName.textContent = airline;
            airlineCard.appendChild(airlineName);

            // Add gates information
            const gatesInfo = document.createElement('p');
            gatesInfo.textContent = `${gates}`;
            airlineCard.appendChild(gatesInfo);

            // Append the card to the popup message
            document.getElementById('popup-message').appendChild(airlineCard);
        }

        // Show the popup
        document.getElementById('popup').style.display = 'block';
        document.getElementById(`popup-overlay`).style.display = 'block';
    } catch (error) {
        // Hide the loading icon
        document.getElementById('loading-icon').style.display = 'none';
        showPopup('Error fetching data. Please try again later.');
    }
}

function showPopup(message) {
    document.getElementById('popup-message').innerHTML = message;
    document.getElementById('popup').style.display = 'block';
}

// Close popup when clicked
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById(`popup-overlay`).style.display = 'none';
});
