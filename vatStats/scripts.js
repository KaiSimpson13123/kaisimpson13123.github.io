const apiUrl = "https://data.vatsim.net/v3/vatsim-data.json";
let flightData = [];
let aircraftTypeCount = {};

// Fetch data from the API
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        flightData = data.pilots;
        processAircraftTypes();
        populateFlightsTable();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Count aircraft types and sort them, display top 10
function processAircraftTypes() {
    aircraftTypeCount = {};
    flightData.forEach(flight => {
        const type = flight.flight_plan?.aircraft_short;
        if (type) {
            aircraftTypeCount[type] = (aircraftTypeCount[type] || 0) + 1;
        }
    });
    const topTypes = Object.entries(aircraftTypeCount)
                            .sort((a, b) => b[1] - a[1])
                            .slice(0, 10);
    displayAircraftTypes(topTypes);
}

// Display the top 10 aircraft types
function displayAircraftTypes(topTypes) {
    const aircraftList = document.getElementById("aircraftTypeList");
    if (aircraftList) {  // Ensure element exists
        aircraftList.innerHTML = topTypes.map(([type, count]) => `
            <div class="aircraft-card">
                <h3>${type}</h3>
                <p>Connections: ${count}</p>
            </div>
        `).join("");
    }
}

// Populate the flights table
function populateFlightsTable() {
    const table = document.getElementById("flightsTable");
    if (table) {  // Ensure element exists
        table.innerHTML = flightData.map(flight => `
            <tr onclick="showFlightDetails(${flight.cid})">
                <td>${flight.callsign}</td>
                <td>${flight.flight_plan?.aircraft_short || 'N/A'}</td>
                <td>${flight.flight_plan?.departure || 'N/A'}</td>
                <td>${flight.flight_plan?.arrival || 'N/A'}</td>
                <td>${flight.altitude}</td>
                <td>${flight.groundspeed}</td>
                <td>${flight.transponder}</td>
            </tr>
        `).join("");
    }
}

// Filter flights based on input fields
function filterFlights() {
    const typeFilter = document.getElementById("aircraftFilter").value.toUpperCase();
    const departingFilter = document.getElementById("departingFilter").value.toUpperCase();
    const arrivingFilter = document.getElementById("arrivingFilter").value.toUpperCase();
    
    const filteredData = flightData.filter(flight =>
        (flight.flight_plan?.aircraft_short?.toUpperCase().includes(typeFilter) || !typeFilter) &&
        (flight.flight_plan?.departure?.toUpperCase().includes(departingFilter) || !departingFilter) &&
        (flight.flight_plan?.arrival?.toUpperCase().includes(arrivingFilter) || !arrivingFilter)
    );
    populateFilteredFlightsTable(filteredData);
}

// Display filtered flights in the table
function populateFilteredFlightsTable(filteredData) {
    const table = document.getElementById("flightsTable");
    if (table) {  // Ensure element exists
        table.innerHTML = filteredData.map(flight => `
            <tr onclick="showFlightDetails(${flight.cid})">
                <td>${flight.callsign}</td>
                <td>${flight.flight_plan?.aircraft_short || 'N/A'}</td>
                <td>${flight.flight_plan?.departure || 'N/A'}</td>
                <td>${flight.flight_plan?.arrival || 'N/A'}</td>
                <td>${flight.altitude}</td>
                <td>${flight.groundspeed}</td>
                <td>${flight.transponder}</td>
            </tr>
        `).join("");
    }
}

// Show detailed flight information in a modal
function showFlightDetails(cid) {
    const flight = flightData.find(f => f.cid === cid);
    const modal = document.getElementById("flightModal");
    const details = document.getElementById("flightDetails");

    if (flight && modal && details) {  // Ensure elements exist
        details.innerHTML = `
            <h3>${flight.callsign}</h3>
            <p>Aircraft Type: ${flight.flight_plan?.aircraft_short || 'N/A'}</p>
            <p>Departure: ${flight.flight_plan?.departure || 'N/A'}</p>
            <p>Arrival: ${flight.flight_plan?.arrival || 'N/A'}</p>
            <p>Altitude: ${flight.altitude} ft</p>
            <p>Speed: ${flight.groundspeed} kts</p>
            <p>Transponder: ${flight.transponder}</p>
            <p>Route: ${flight.flight_plan?.route || 'N/A'}</p>
        `;
        modal.style.display = "flex";
    }
}

// Close modal
function closeModal() {
    document.getElementById("flightModal").style.display = "none";
}

// Initialize data fetching
fetchData();
