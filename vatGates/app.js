document.addEventListener('DOMContentLoaded', function () {
    const gateForm = document.getElementById('gate-form');
    const icaoInput = document.getElementById('icao-input');
    const aircraftInput = document.getElementById('aircraft-input');
    const showAllToggle = document.getElementById('show-all-toggle');
    const toggleLabel = document.getElementById('toggle-label');
  
    gateForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const icao = icaoInput.value.trim().toUpperCase();
      const aircraftType = aircraftInput.value.trim().toUpperCase();
  
      if (!icao || !aircraftType) {
        alert("Please enter both ICAO code and aircraft type.");
        return;
      }
  
      fetchGates(icao, aircraftType);
    });
  
    // Load JSON data for aircraft, manual gates, and deleted gates
    loadJsonData();
  
    let aircraftData = {};
    let manualGates = {}; // Initialize manualGates as an object where ICAO code is the key
    let deletedGates = [];
  
    function loadJsonData() {
      fetch('aircraft.json')
        .then(response => response.json())
        .then(data => aircraftData = data)
        .catch(err => console.error('Error loading aircraft data:', err));
  
      fetch('manualGates.json')
        .then(response => response.json())
        .then(data => {
          manualGates = data; // Directly assign manual gates object
          console.log('Manual Gates Loaded:', manualGates); // Log to confirm data
        })
        .catch(err => console.error('Error loading manual gates:', err));
  
      fetch('deletedGates.json')
        .then(response => response.json())
        .then(data => deletedGates = data)
        .catch(err => console.error('Error loading deleted gates:', err));
    }
  
    function fetchGates(icao, aircraftType) {
      const apiUrl = `https://kaicors-6abf9658da78.herokuapp.com/https://gateapi-ae6bb7ff61e6.herokuapp.com/GateAPI/${icao}`;
      
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const apiGates = data.gates || [];
          
          // Get manual gates for the specified ICAO, if available
          const manualGatesForIcao = manualGates[icao] || [];
          
          // Combine the API gates with the manual gates
          const allGates = [...apiGates, ...manualGatesForIcao];
          
          filterGates(allGates, aircraftType);
        })
        .catch(err => {
          console.error('Error fetching gate data:', err);
          alert('Error fetching gate data.');
        });
    }
  
    // Handle filtering logic based on the toggle switch
    function filterGates(gates, aircraftType) {
      const gateContainer = document.getElementById('gates-container');
      gateContainer.innerHTML = '';
  
      const maxClass = aircraftData[aircraftType];
      if (!maxClass) {
        alert('Invalid aircraft type. Please try again.');
        return;
      }
  
      const showAll = showAllToggle.checked;
  
      // Show gates based on the toggle state
      const availableGates = gates.filter(gate => {
        if (showAll) {
          return gate.maxSize >= maxClass && !deletedGates.includes(gate.name); // Show all potential gates
        } else {
          return gate.maxSize === maxClass && !deletedGates.includes(gate.name); // Show only exact matches
        }
      });
  
      if (availableGates.length === 0) {
        gateContainer.innerHTML = 'No available gates for this aircraft at the selected airport.';
        return;
      }
  
      availableGates.forEach(gate => {
        const gateCard = document.createElement('div');
        gateCard.classList.add('gate-card');
        gateCard.innerHTML = `
          <h3>${gate.name}</h3>
          <p>Max Size: ${gate.maxSize}</p>
        `;
        gateContainer.appendChild(gateCard);
      });
    }
});
