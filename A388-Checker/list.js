document.addEventListener("DOMContentLoaded", function () {
    const airportListContainer = document.getElementById("airport-list");

    // Fetch and display airports
    fetch("airports.txt")
        .then(response => response.text())
        .then(data => {
            const airports = data.split('\n').map(line => line.trim()).filter(Boolean);
            airports.forEach(airportCode => {
                createAirportCard(airportCode);
            });
        })
        .catch(error => console.error("Error fetching airports:", error));

    // Function to create an airport card
    function createAirportCard(airportCode) {
        const card = document.createElement("div");
        card.classList.add("airport-card");
        card.innerHTML = `
            <h2>${airportCode}</h2>
            <button class="view-gates-btn">View Gates</button>
        `;

        card.querySelector(".view-gates-btn").addEventListener("click", () => showGateInfo(airportCode));
        airportListContainer.appendChild(card);
    }

    // Function to fetch and show gate information
    function showGateInfo(airportCode) {
        fetch(`https://kaicors-6abf9658da78.herokuapp.com/https://gateapi-ae6bb7ff61e6.herokuapp.com/GateAPI/${airportCode}`)
            .then(response => response.json())
            .then(apiData => {
                const gates = apiData.gates
                    .filter(gate => gate.maxSize === 'F')
                    .map(gate => gate.name)
                    .join(", ");
                alert(`Airport ${airportCode} has the following gates:\n${gates || "No compatible gates found."}`);
            })
            .catch(error => console.error("Error fetching gate information:", error));
    }
});
