document.addEventListener("DOMContentLoaded", function() {
    fetch('airports.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const airports = data.split('\n').map(line => line.trim()).filter(line => line); // Filter out empty lines
            displayAirports(airports);
        })
        .catch(error => {
            console.error('Error fetching airports:', error);
            document.getElementById('airport-list-container').innerHTML = 'Failed to load airports.';
        });
});

function displayAirports(airports) {
    const airportListContainer = document.getElementById('airport-list-container');
    airportListContainer.innerHTML = ''; // Clear any existing content

    airports.forEach(airport => {
        const card = document.createElement('div');
        card.className = 'airport-card';
        card.innerHTML = `
            <div class="airport-name">${airport}</div>
            <br>
            <button class="card-button">View Gates</button>
        `;
        card.addEventListener('click', () => {
            viewGates(airport);
        });
        airportListContainer.appendChild(card);
    });
}

function viewGates(airport) {
    // Fetching manual gates data
    fetch('manualGates.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(manualData => {
            // Retrieve manual gates for the given airport code
            const manualGatesList = manualData[airport] || [];
            const compatibleManualGates = manualGatesList.filter(gate => gate.maxSize === 'F').map(gate => gate.name);

            // Fetching gate data from the API
            fetch(`https://kaicors-6abf9658da78.herokuapp.com/https://gateapi-ae6bb7ff61e6.herokuapp.com/GateAPI/${airport}`)
                .then(response => response.json())
                .then(apiData => {
                    const compatibleApiGates = apiData.gates
                        .filter(gate => gate.maxSize === 'F')
                        .map(gate => gate.name);

                    // Combine manual and API gates
                    const combinedGates = [...compatibleManualGates, ...compatibleApiGates];
                    const uniqueGates = Array.from(new Set(combinedGates)); // Ensure unique gate names

                    const gateInfo = uniqueGates.length
                        ? `Gates for ${airport}: ${uniqueGates.join(', ')}`
                        : `No gates with max size F found for ${airport}.`;

                    showPopup(gateInfo);
                })
                .catch(error => {
                    console.error('Error fetching gate data from API:', error);
                    showPopup(`Could not retrieve gates for ${airport}.`);
                });
        })
        .catch(error => {
            console.error('Error fetching manual gates:', error);
            showPopup(`Could not retrieve manual gates for ${airport}.`);
        });
}

function showPopup(message) {
    const popupMessage = document.getElementById('popup-message');
    const popup = document.getElementById('popup');
    
    popupMessage.innerHTML = message;
    popup.style.display = 'flex';
}

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
