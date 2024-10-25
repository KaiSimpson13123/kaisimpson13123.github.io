document.getElementById('searchBtn').addEventListener('click', () => {
    const icao = document.getElementById('icaoInput').value.trim().toUpperCase();
    if (icao) {
        fetchATCData(icao);
    }
});

async function fetchATCData(icao) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `<p>Loading data for ${icao}...</p>`;
    
    try {
        const response = await fetch(`https://kaicors-6abf9658da78.herokuapp.com/https://my.vatsim.net/api/v2/aip/airports/${icao}/stations`);
        
        if (!response.ok) throw new Error('Invalid ICAO code or data not available');
        
        const data = await response.json();

        // Access the array within 'data'
        const stations = data.data;

        if (!Array.isArray(stations) || stations.length === 0) {
            resultContainer.innerHTML = `<p>No ATC stations found for ICAO code "${icao}".</p>`;
            return;
        }

        // Clear previous results
        resultContainer.innerHTML = '';

        // Display each station in a card
        stations.forEach(station => {
            const { callsign, name, frequency, ctaf } = station;
            
            const stationCard = document.createElement('div');
            stationCard.classList.add('station-card');

            stationCard.innerHTML = `
                <div class="station-header">${name} (${callsign})</div>
                <div class="station-details">
                    <div><strong>Frequency:</strong> ${frequency}</div>
                    <div><strong>CTAF:</strong> <span class="${ctaf ? 'ctaf-true' : ''}">${ctaf}</span></div>
                </div>
            `;
            
            resultContainer.appendChild(stationCard);
        });
    } catch (error) {
        resultContainer.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}
