document.getElementById('fetchBtn').addEventListener('click', function () {
    const icaoCode = document.getElementById('icaoInput').value.trim().toUpperCase();
    if (icaoCode) {
        fetchMetar(icaoCode);
    } else {
        displayMetar('Please enter a valid ICAO code.');
    }
});

function fetchMetar(icao) {
    const url = `https://kaicors-6abf9658da78.herokuapp.com/https://metar.vatsim.net/${icao}`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(metar => displayMetar(metar))
        .catch(error => displayMetar(`Error fetching METAR: ${error.message}`));
}

function displayMetar(metar) {
    const metarDisplay = document.getElementById('metarDisplay');
    metarDisplay.textContent = metar;
}
