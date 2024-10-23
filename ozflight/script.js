const map = L.map('map', { scrollWheelZoom: true }).setView([-25.2744, 133.7751], 4); // Center map on Australia

const airports = [
        { name: "YPPH (Perth)", coords: [-31.9403, 115.9668], link: "YPPH.html" },
        { name: "YMML (Melbourne)", coords: [-37.6733, 144.8433], link: "YMML.html" },
        { name: "YSSY (Sydney)", coords: [-33.9399, 151.1753], link: "YSSY.html" },
        { name: "YBBN (Brisbane)", coords: [-27.3842, 153.1175], link: "YBBN.html" },
        { name: "YPAD (Adelaide)", coords: [-34.9450, 138.5306], link: "YPAD.html" },
	{ name: "YPDN (Darwin)", coords: [-12.41236, 130.876374], link: "YPDN.html" }
    ];

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const atcIcon = L.icon({
        iconUrl: 'atc.png', // Path to your custom icon image
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Anchor point of the icon (center-bottom)
        popupAnchor: [0, -32] // Popup appears above the icon
    });

// Icons for planes
const realPlaneIcon = L.icon({
    iconUrl: 'plane-icon.png', // Path to your real flight icon
    iconSize: [16, 16],
    iconAnchor: [8, 8],
});

const vatsimPlaneIcon = L.icon({
    iconUrl: 'plane-icon2.png', // Path to your VATSIM flight icon
    iconSize: [16, 16],
    iconAnchor: [8, 8],
});

const specialVatsimPlaneIcon = L.icon({
    iconUrl: 'plane-icon3.png', // Path to the special VATSIM flight icon
    iconSize: [16, 16],
    iconAnchor: [8, 8],
});

let selectedPlane = null; // Store the currently selected plane
let vatsimMarkers = []; // Store VATSIM markers

function convertVelocityToKnots(velocity) {
    return (velocity && velocity > 0 ? (velocity * 1.94384).toFixed(2) : 'N/A');
}

function convertAltitudeToFeet(altitude) {
    return (altitude && altitude > 0 ? (altitude * 3.28084).toFixed(2) : 'N/A');
}

async function fetchOpenSkyData() {
    const username = 'smacklepackle'; // Replace with your OpenSky username
    const password = 'Megatron1$'; // Replace with your OpenSky password

    const response = await fetch('https://opensky-network.org/api/states/all', {
        headers: {
            'Authorization': 'Basic ' + btoa(username + ':' + password)
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data.states;
    } else {
        console.error('Failed to fetch flight data:', response.statusText);
        return [];
    }
}

async function fetchVatsimData() {
    const response = await fetch('https://data.vatsim.net/v3/vatsim-data.json');

    if (response.ok) {
        const data = await response.json();
        return data.pilots;
    } else {
        console.error('Failed to fetch VATSIM data:', response.statusText);
        return [];
    }
}

async function displayFlights() {
    const flights = await fetchOpenSkyData();
    const australiaFlights = flights.filter(flight => {
        const lat = flight[6];
        const lon = flight[5];
        return lat > -44 && lat < -10 && lon > 112 && lon < 154;
    });

    // Clear previous markers
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker && layer.options.icon === realPlaneIcon) {
            map.removeLayer(layer);
        }
    });

    // Add markers for each flight
    australiaFlights.forEach(flight => {
        const lat = flight[6];
        const lon = flight[5];
        const heading = flight[10] || 0;
        const squawk = flight[3] || 'N/A'; // Squawk (transponder code)
        const onGround = flight[8] ? 'Yes' : 'No'; // On Ground status
        const callsign = flight[1] || 'N/A';
        const velocity = flight[9] ? convertVelocityToKnots(flight[9]) : 'N/A';
        const altitude = flight[7] ? convertAltitudeToFeet(flight[7]) : 'N/A';

        const marker = L.marker([lat, lon], {
            icon: realPlaneIcon,
            rotationAngle: heading
        }).addTo(map).bindPopup(`
            <b>Callsign:</b> ${callsign}<br>
            <b>Heading:</b> ${heading}°<br>
            <b>Velocity:</b> ${velocity} knots<br>
            <b>Altitude:</b> ${altitude} feet<br>
            <b>Squawk:</b> ${squawk}<br>
            <b>On Ground:</b> ${onGround}
        `);

        // Add click event to center map on selected plane
        marker.on('click', () => {
            selectedPlane = marker;
            map.setView(marker.getLatLng()); // Center map on selected plane without changing zoom
        });
    });
}

async function displayVatsimFlights() {
    const flights = await fetchVatsimData();
    const australiaVatsimFlights = flights.filter(flight => {
        const lat = flight.latitude;
        const lon = flight.longitude;
        return lat > -44 && lat < -10 && lon > 112 && lon < 154;
    });

    // Remove previous VATSIM markers
    vatsimMarkers.forEach(marker => map.removeLayer(marker));
    vatsimMarkers = []; // Clear the array

    // Add new markers for each VATSIM flight
    australiaVatsimFlights.forEach(flight => {
        const lat = flight.latitude;
        const lon = flight.longitude;
        const heading = flight.heading || 0;
        const altitude = flight.altitude ? convertAltitudeToFeet(flight.altitude) : 'N/A';
        const groundSpeed = flight.groundspeed ? convertVelocityToKnots(flight.groundspeed) : 'N/A';
        const callsign = flight.callsign || 'N/A';
        const cid = flight.cid || 'N/A'; // CID of the pilot

        // Choose icon based on CID
        const icon = String(cid).trim() === '1777823' ? specialVatsimPlaneIcon : vatsimPlaneIcon;

        const marker = L.marker([lat, lon], {
            icon: icon,
            rotationAngle: heading
        }).addTo(map).bindPopup(`
            <b>Callsign:</b> ${callsign}<br>
            <b>CID:</b> ${cid}
        `);


        // Add click event to center map on selected plane
        marker.on('click', () => {
            selectedPlane = marker;
            map.setView(marker.getLatLng()); // Center map on selected plane without changing zoom
        });

        vatsimMarkers.push(marker); // Add the marker to the array
    });
}

// Center map on click anywhere on the map to stop following the selected plane
map.on('click', () => {
    selectedPlane = null; // Deselect the plane
});

// Refresh flights every 10 seconds
setInterval(() => {
    displayFlights();
    displayVatsimFlights();

    if (selectedPlane) {
        // Re-center map on selected plane during each update without changing zoom
        const latLng = selectedPlane.getLatLng();
        map.setView(latLng);
    }
}, 10000);

airports.forEach(airport => {
        L.marker(airport.coords, { icon: atcIcon }).addTo(map)
            .bindPopup(`
                <b>${airport.name}</b><br><br>
                <button class="atis-btn" onclick="window.location.href='${airport.link}'">OPEN ATIS</button>
            `);
    });

// Initial load
displayFlights();
displayVatsimFlights();
