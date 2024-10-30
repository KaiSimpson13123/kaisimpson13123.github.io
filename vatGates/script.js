const mapContainer = document.getElementById('mapContainer');
const searchContainer = document.getElementById('searchContainer');
const submitButton = document.getElementById('submitButton');

import airportCoordinates from './airportCoordinates.js';

let map; // To store the map instance
let planesLayer; // Layer to hold plane markers
let updateInterval;

submitButton.addEventListener('click', () => {
    const icaoCode = document.getElementById('icaoInput').value.toUpperCase();
    if (map) {
        map.remove(); // Remove the existing map if present
    }

    if (icaoCode) {
        // Hide the search container and show the map
        searchContainer.classList.add('hidden');
        mapContainer.style.display = 'block';

        initializeMap(icaoCode);
    }
});

function initializeMap(icaoCode) {
    // Initialize the map with the chosen airport coordinates or default to JFK
    const defaultCoords = [0, 0];
    const initialCoords = airportCoordinates[icaoCode] || defaultCoords;
    
    map = L.map(mapContainer).setView(initialCoords, 12); // Set initial view

    // Use a dark map tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    }).addTo(map);

    addPlanesLayer();
    startUpdatingPlanes();

    // Center the map on the airport coordinates
    getAirportCoordinates(icaoCode).then(coords => {
        if (coords) {
            map.setView(coords, 13);
        } else {
            alert('Could not find ICAO code.');
        }
    });
}

function getAirportCoordinates(icaoCode) {
    const coordinates = airportCoordinates[icaoCode];
    return Promise.resolve(coordinates);
}

function addPlanesLayer() {
    planesLayer = L.layerGroup().addTo(map); // Create a layer for planes
}

function startUpdatingPlanes() {
    planesLayer.clearLayers();

    fetch('https://data.vatsim.net/v3/vatsim-data.json')
        .then(response => response.json())
        .then(data => {
            const planesOnGround = data.pilots.filter(plane => plane.altitude < 1000); // Filter planes on ground
            planesOnGround.forEach(plane => {
                const departure = plane.flight_plan?.departure || "Unknown";
                const arrival = plane.flight_plan?.arrival || "Unknown";
                
                // Create a marker for each plane
                const marker = L.marker([plane.latitude, plane.longitude]).addTo(planesLayer);
                
                // Rotate marker based on heading if rotation plugin is available
                if (typeof marker.setRotationAngle === 'function') {
                    marker.setRotationAngle(plane.heading);
                }
                
                // Update the popup content to include departure and arrival
                marker.bindPopup(`
                    <b>${plane.callsign}</b><br>
                    Altitude: ${plane.altitude} ft<br>
                    Route: ${departure} - ${arrival}
                `);
            });
        })
        .catch(error => console.error('Error fetching VATSIM data:', error));

    // Update every 10 seconds
    clearInterval(updateInterval);
    updateInterval = setInterval(() => {
        startUpdatingPlanes();
    }, 10000);
}
