document.addEventListener("DOMContentLoaded", async function() {
    let airports = [];

    // Load the airports data on page load
    async function loadAirports() {
        try {
            const response = await fetch('airports.json');
            airports = await response.json();
        } catch (error) {
            console.error("Error loading airports data:", error);
            alert("Could not load airport data at this time.");
        }
    }

    // Call the function to load airports data
    await loadAirports();

    // Function to validate and display the ICAO code and airport name
    function validateICAO() {
        const inputICAO = document.getElementById("icao-input").value.trim().toUpperCase();
        if (!inputICAO) {
            alert("Please enter an ICAO code.");
            return;
        }

        // Search for the airport by ICAO code
        const airport = airports.find(ap => ap.icao === inputICAO);

        if (airport) {
            const conta = document.getElementById('start');
            conta.remove();
            // Remove any previous card
            const oldCard = document.getElementById("AirportCard");
            if (oldCard) oldCard.remove();

            // Create and display the airport card
            const airportCard = document.createElement("div");
            airportCard.id = "AirportCard";
            airportCard.className = "APcard";
            airportCard.innerHTML = `<span style="font-size: 35px;">${airport.icao}</span><br>${airport.name}<br><br><hr width="70%" style="margin: auto;">`;
            document.body.appendChild(airportCard);
        } else {
            alert("Invalid ICAO code.");
        }
    }

    // Attach the validate function to the button
    document.getElementById("search-btn").addEventListener("click", validateICAO);
});
