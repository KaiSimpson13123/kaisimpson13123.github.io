document.addEventListener("DOMContentLoaded", function () {
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
    Promise.all([
        fetch('manualGates.json').then(res => res.json()).catch(() => ({})), // Fetch manual gates
        fetch(`https://gateapi.fly.dev/GateAPI/${airport}`).then(res => res.json()).catch(() => ({ gates: [] })), // Fetch gates from API
        fetch('deletedGates.json').then(res => res.json()).catch(() => ({})) // Fetch deleted gates
    ])
    .then(([manualGatesData, apiGatesData, deletedGatesData]) => {
        const manualGatesList = manualGatesData[airport] || [];
        const compatibleManualGates = manualGatesList.filter(gate => gate.maxSize === 'F').map(gate => gate.name);

        const compatibleApiGates = apiGatesData.gates
            .filter(gate => gate.maxSize === 'F')
            .map(gate => gate.name);

        // Get the deleted gates for this airport
        const deletedGates = deletedGatesData[airport] || [];
        
        // Combine and filter gates
        const combinedGates = [...compatibleManualGates, ...compatibleApiGates];
        const uniqueGates = Array.from(new Set(combinedGates)); // Ensure unique gate names

        // Remove any gates that are in the deleted gates list
        const finalGates = uniqueGates.filter(gate => !deletedGates.includes(gate));

        if (finalGates.length) {
            displayPopup(airport, finalGates);
        } else {
            displayPopup(airport, ["No class F gates found."]);
        }
    })
    .catch(error => {
        console.error('Error fetching gate data:', error);
        displayPopup(airport, ["Error retrieving gate information."]);
    });
}

function displayPopup(airport, gates) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    
    popupMessage.innerHTML = `Gates for Airport: ${airport}<br>${gates.join(', ')}`;
    
    popup.style.display = 'flex';
}

// Close popup when the close button is clicked
document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});
