document.getElementById('submitButton').addEventListener('click', getGateInfo);

async function getGateInfo() {
    const icaoCode = document.getElementById('icaoInput').value.toUpperCase();
    const resultDiv = document.getElementById('result');

    try {
        // Construct file path based on ICAO code
        const country = getCountryFromICAO(icaoCode);
        if (!country) throw new Error('Country not recognized');

        // Determine if running on localhost or remote server
        const filePath = `vatGates/airports/${country}/${icaoCode}.json`;
        const fetchUrl = window.location.hostname === "localhost" 
            ? filePath 
            : `https://kaisimpson.xyz/${filePath}`;

        const response = await fetch(fetchUrl);

        if (!response.ok) throw new Error('Airport not found');

        const gateData = await response.json();

        // Display gate and airline information
        resultDiv.innerHTML = `<h2>Gates for ${icaoCode}</h2>`;
        
        // Group gates by terminal
        const gatesByTerminal = gateData.gates.reduce((acc, gate) => {
            if (!acc[gate.terminal]) {
                acc[gate.terminal] = [];
            }
            acc[gate.terminal].push(gate);
            return acc;
        }, {});

        for (const terminal in gatesByTerminal) {
            resultDiv.innerHTML += `<h3>${terminal}</h3>`;
            gatesByTerminal[terminal].forEach(gate => {
                resultDiv.innerHTML += `
                    <div class="card">
                        <img src="${getAirlineLogo(gate.airline)}" class="airline-logo" alt="${gate.airline}" />
                        <h3>${gate.airline}</h3>
                        <p>Gate: ${gate.gate}</p>
                    </div>
                `;
            });
        }
    } catch (error) {
        resultDiv.innerHTML = `<p>Could not retrieve data for ICAO code: ${icaoCode}</p>`;
    }
}

function getCountryFromICAO(icaoCode) {
    // Simple mapping of ICAO codes to countries for demonstration purposes
    const countryMapping = {
        "YSSY": "Australia",
        "KJFK": "USA",
        // Add more ICAO codes and corresponding countries as needed
    };
    return countryMapping[icaoCode] || null;
}

function getAirlineLogo(callsign) {
    // Placeholder for airline logos
    const logos = {
        "QFA": "https://example.com/logos/qantas.png", // Replace with actual logo URL
        "VAU": "https://example.com/logos/virgin.png", // Replace with actual logo URL
        "AAL": "https://example.com/logos/american.png", // Replace with actual logo URL
        "DAL": "https://example.com/logos/delta.png", // Replace with actual logo URL
        "UAL": "https://example.com/logos/united.png", // Replace with actual logo URL
        "SWG": "https://example.com/logos/southwest.png", // Replace with actual logo URL
        // Add more airlines as needed
    };
    return logos[callsign] || "https://example.com/logos/default.png"; // Default logo
}
