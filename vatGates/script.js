// Get references to DOM elements
const mapContainer = document.getElementById('mapContainer');
const submitButton = document.getElementById('submitButton');

// Import airport coordinates
import airportCoordinates from './airportCoordinates.js';

let map; // To store the map instance
let planesLayer; // Layer to hold plane markers
let updateInterval;

// Event listener for the submit button
submitButton.addEventListener('click', () => {
    const icaoCode = document.getElementById('icaoInput').value.toUpperCase();
    
    // Remove existing map if present
    if (map) {
        map.remove();
    }
    
    initializeMap(icaoCode);
});

// Function to initialize the map
function initializeMap(icaoCode) {
    // Set default view to JFK location
    map = L.map(mapContainer).setView([40.6413, -73.7781], 10);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Get coordinates for the ICAO code and center the map
    getAirportCoordinates(icaoCode).then(coords => {
        if (coords) {
            map.setView(coords, 10); // Center map on the airport
            addPlanesLayer();
            startUpdatingPlanes();
        } else {
            alert('Could not find ICAO code.');
        }
    });
}

// Function to get airport coordinates based on ICAO code
function getAirportCoordinates(icaoCode) {
    const coordinates = airportCoordinates[icaoCode]; // Retrieve coordinates
    return Promise.resolve(coordinates); // Return as a resolved Promise
}

// Function to create a rotated marker icon
function createRotatedIcon(heading) {
    const iconUrl = 'path/to/your/plane-icon.png'; // Replace with your icon path
    const iconSize = [30, 30]; // Size of the icon

    // Create a custom icon
    const icon = L.icon({
        iconUrl: iconUrl,
        iconSize: iconSize,
        iconAnchor: [iconSize[0] / 2, iconSize[1] / 2], // Center the icon
    });

    // Create a marker
    const marker = L.marker([0, 0], { icon: icon }).addTo(planesLayer);

    // Rotate the icon using CSS
    const iconElement = marker.getElement();
    if (iconElement) {
        iconElement.style.transform = `rotate(${heading}deg)`;
    }
    
    return marker;
}

// Function to add planes layer to the map
function addPlanesLayer() {
    planesLayer = L.layerGroup().addTo(map); // Create and add a layer for planes
}

// Function to start updating plane markers on the map
function startUpdatingPlanes() {
    // Clear existing markers
    planesLayer.clearLayers();
    
    // Fetch VATSIM data
    fetch('https://data.vatsim.net/v3/vatsim-data.json')
        .then(response => response.json())
        .then(data => {
            const planesOnGround = data.pilots.filter(plane => plane.altitude < 1000); // Filter planes on ground
            
            // Add markers for each plane
            planesOnGround.forEach(plane => {
                const marker = createRotatedIcon(plane.heading);
                marker.setLatLng([plane.latitude, plane.longitude]); // Set the position of the marker
                marker.bindPopup(`<b>${plane.callsign}</b><br>Altitude: ${plane.altitude} ft`); // Bind popup with plane details
            });
        })
        .catch(error => console.error('Error fetching VATSIM data:', error));
    
    // Update every 10 seconds
    clearInterval(updateInterval);
    updateInterval = setInterval(startUpdatingPlanes, 10000); // Call the function every 10 seconds
}
