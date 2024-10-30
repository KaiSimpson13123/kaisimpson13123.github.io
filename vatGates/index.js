// Function to fetch gate info based on ICAO code
async function getGateInfo() {
    const icaoCode = document.getElementById('icaoInput').value.toUpperCase();
    const resultDiv = document.getElementById('result');

    try {
        // Construct file path based on ICAO code
        const country = getCountryFromICAO(icaoCode);
        if (!country) throw new Error('Country not recognized');

        // Determine if running on localhost or remote server
        const filePath = `vatGates/airports/${country}/${icaoCode}.json`; // Ensure the path includes vatGates
        const fetchUrl = window.location.hostname === "localhost" 
            ? filePath 
            : `https://kaisimpson.xyz/${filePath}`; // Adjusted to include vatGates

        const response = await fetch(fetchUrl);

        if (!response.ok) throw new Error('Airport not found');

        const gateData = await response.json();

        // Display gate and airline information
        resultDiv.innerHTML = `<h2>Gates for ${icaoCode}</h2>`;
        gateData.gates.forEach(gate => {
            resultDiv.innerHTML += `
                <div>
                    <img src="${getAirlineLogo(gate.airline)}" class="airline-logo" alt="${gate.airline}" />
                    Gate ${gate.gate}: ${gate.airline}
                </div>
            `;
        });
    } catch (error) {
        resultDiv.innerHTML = `<p>Could not retrieve data for ICAO code: ${icaoCode}</p>`;
    }
}


// Display gate and airline information
resultDiv.innerHTML = `<h2>Gates for ${icaoCode}</h2>`;
gateData.gates.forEach(gate => {
    resultDiv.innerHTML += `
        <div class="card">
            <img src="${getAirlineLogo(gate.airline)}" class="airline-logo" alt="${gate.airline}" />
            <h3>${gate.airline}</h3>
            <p>Gate: ${gate.gate}</p>
        </div>
    `;
});


// Helper function to map ICAO to country
function getCountryFromICAO(icaoCode) {
    if (icaoCode.startsWith('Y')) return 'Australia';
    if (icaoCode.startsWith('K')) return 'United_States'; // Updated for American ICAO codes
    return null; // Extend this to include more countries as needed
}

// Helper function to return airline logo URL
function getAirlineLogo(airline) {
    const logos = {
        QFA: 'https://example.com/qantas.png', // Placeholder URLs
        AAL: 'https://example.com/american.png',
        DAL: 'https://example.com/delta.png'
    };
    return logos[airline] || 'https://example.com/default.png';
}
