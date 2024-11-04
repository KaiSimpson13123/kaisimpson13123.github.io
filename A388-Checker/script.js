document.getElementById('check-button').addEventListener('click', function() {
    const airportCode = document.getElementById('airport-input').value.toUpperCase();
    
    // Check if the airport is in the compatible list
    fetch('airports.txt')
        .then(response => response.text())
        .then(data => {
            const airports = data.split('\n').map(line => line.trim().toUpperCase());
            const isCompatible = airports.includes(airportCode);
            const popupMessage = document.getElementById('popup-message');
            const popup = document.getElementById('popup');

            if (isCompatible) {
                // Fetch gate data from the API for the compatible airport
                fetch(`https://gateapi-ae6bb7ff61e6.herokuapp.com/GateAPI/${airportCode}`)
                    .then(response => response.json())
                    .then(apiData => {
                        const compatibleGates = apiData.gates
                            .filter(gate => gate.maxSize === 'F')
                            .map(gate => gate.name)
                            .join(', ');

                        const gateInfo = compatibleGates 
                            ? `Compatible gates: ${compatibleGates}`
                            : "No gates with max size 'F' found.";

                        popupMessage.innerHTML = `The airport ${airportCode} is A380 <span style="color: #5cb85c;">compatible!</span><br>${gateInfo}`;
                        popup.style.display = 'flex';
                    })
                    .catch(error => {
                        console.error('Error fetching gate data:', error);
                        popupMessage.innerHTML = `The airport ${airportCode} is A380 <span style="color: #5cb85c;">compatible!</span><br>Could not retrieve gate information.`;
                        popup.style.display = 'flex';
                    });
            } else {
                popupMessage.innerHTML = `The airport "${airportCode}" is <span style="color: #ED4337;">NOT A380 compatible</span> or does not exist.`;
                popup.style.display = 'flex';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
