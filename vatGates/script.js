const mapContainer = document.getElementById('mapContainer');
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
    initializeMap(icaoCode);
});

function initializeMap(icaoCode) {
    // Initialize the map using Leaflet
    map = L.map(mapContainer).setView([0, 0], 1); // Default to JFK location

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(map);

    // Get the coordinates for the ICAO code and center the map
    getAirportCoordinates(icaoCode).then(coords => {
        if (coords) {
            map.setView(coords, 15);
            addPlanesLayer();
            startUpdatingPlanes();
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
    // Clear the existing markers
    planesLayer.clearLayers();
    
    fetch('https://data.vatsim.net/v3/vatsim-data.json')
        .then(response => response.json())
        .then(data => {
            const planesOnGround = data.pilots.filter(plane => plane.altitude < 1000); // Filter planes on ground
            planesOnGround.forEach(plane => {
                const departure = plane.flight_plan.departure; // Get departure airport code
                const arrival = plane.flight_plan.arrival; // Get arrival airport code
                // Create a custom icon with rotation
                const icon = L.divIcon({
                    className: 'plane-icon',
                    html: `<div style="transform: rotate(${plane.heading}deg);">
                               <img src="picon.png" style="width: 30px; height: 30px;" />
                           </div>`,
                    iconSize: [30, 30],
                    iconAnchor: [15, 15]
                });

                const marker = L.marker([plane.latitude, plane.longitude], { icon }).addTo(planesLayer);
                marker.bindPopup(`<b>${plane.callsign}</b><br>${departure} - ${arrival}<br>Altitude: ${plane.altitude}`);
            });
        })
        .catch(error => console.error('Error fetching VATSIM data:', error));
    
    // Update every 10 seconds
    clearInterval(updateInterval);
    updateInterval = setInterval(() => {
        startUpdatingPlanes();
        console.log("Planes Updated!")
    }, 10000);
}
