document.getElementById('check-button').addEventListener('click', checkAirportCompatibility);

// Add keydown event listener for the input field
document.getElementById('airport-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Check if the pressed key is "Enter"
        checkAirportCompatibility(); // Call the function directly
    }
});

function checkAirportCompatibility() {
    const airportCode = document.getElementById('airport-input').value.toUpperCase();
    const popupMessage = document.getElementById('popup-message');
    const popup = document.getElementById('popup');
    const loadingIcon = document.getElementById('loading-icon');

    // Show loading icon
    loadingIcon.style.display = 'block';

    // Check if the airport is in the compatible list
    fetch('airports.txt')
        .then(response => response.text())
        .then(data => {
            const airports = data.split('\n').map(line => line.trim().toUpperCase());
            const isCompatible = airports.includes(airportCode);

            if (isCompatible) {
                // Fetch manual gates data from manualGates.json
                fetch('manualGates.json')
                    .then(response => response.json())
                    .then(manualData => {
                        // Retrieve manual gates for the given airport code
                        const manualGatesList = manualData[airportCode] || [];
                        const compatibleManualGates = manualGatesList.filter(gate => gate.maxSize === 'F');

                        // Fetch gate data from the API for the compatible airport
                        fetch(`https://kaicors-6abf9658da78.herokuapp.com/https://gateapi-ae6bb7ff61e6.herokuapp.com/GateAPI/${airportCode}`)
                            .then(response => response.json())
                            .then(apiData => {
                                const compatibleApiGates = apiData.gates
                                    .filter(gate => gate.maxSize === 'F')
                                    .map(gate => gate.name);

                                // Combine manual and API gates
                                const combinedGates = [...compatibleManualGates.map(gate => gate.name), ...compatibleApiGates];
                                const uniqueGates = Array.from(new Set(combinedGates)); // Ensure unique gate names

                                const gateInfo = uniqueGates.length
                                    ? `Compatible gates:<br> ${uniqueGates.join(', ')}`
                                    : "No gates with max size 'F' found.";

                                popupMessage.innerHTML = `The airport ${airportCode} is A380 <span style="color: #5cb85c;">compatible!</span><br><br><span title="${airportCode}">${gateInfo}</span>`;
                                popup.style.display = 'flex';
                            })
                            .catch(error => {
                                console.error('Error fetching gate data:', error);
                                popupMessage.innerHTML = `The airport ${airportCode} is A380 <span style="color: #5cb85c;">compatible!</span><br>Could not retrieve gate information.`;
                                popup.style.display = 'flex';
                            })
                            .finally(() => {
                                // Hide loading icon when done
                                loadingIcon.style.display = 'none';
                            });
                    })
                    .catch(error => {
                        console.error('Error fetching manual gates:', error);
                        popupMessage.innerHTML = `The airport ${airportCode} is A380 <span style="color: #5cb85c;">compatible!</span><br>Could not retrieve manual gate information.`;
                        popup.style.display = 'flex';
                    })
                    .finally(() => {
                        // Hide loading icon when done
                        loadingIcon.style.display = 'none';
                    });
            } else {
                popupMessage.innerHTML = `The airport "${airportCode}" is <span style="color: #ED4337;">NOT A380 compatible</span> or does not exist.`;
                popup.style.display = 'flex';
                loadingIcon.style.display = 'none'; // Hide loading icon if not compatible
            }
        })
        .catch(error => {
            console.error('Error:', error);
            loadingIcon.style.display = 'none'; // Hide loading icon on error
        });
}

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
