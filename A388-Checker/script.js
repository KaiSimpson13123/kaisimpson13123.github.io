document.getElementById('check-button').addEventListener('click', function() {
    const airportCode = document.getElementById('airport-input').value.toUpperCase();
    fetch('airports.txt')
        .then(response => response.text())
        .then(data => {
            const airports = data.split('\n').map(line => line.trim().toUpperCase());
            const isCompatible = airports.includes(airportCode);
            const popupMessage = document.getElementById('popup-message');
            const popup = document.getElementById('popup');

            if (isCompatible) {
                popupMessage.innerHTML = `The airport ${airportCode} is A380 <span style="color: #5cb85c;">compatible!</span>`;
            } else {
                popupMessage.innerHTML = `The airport "${airportCode}" is <span style="color: #ED4337;">NOT A380 compatible</span> or does not exist.`;
            }

            popup.style.display = 'flex';
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
