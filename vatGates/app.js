document.addEventListener('DOMContentLoaded', function () {
  const gateForm = document.getElementById('gate-form');
  const icaoInput = document.getElementById('icao-input');
  const aircraftInput = document.getElementById('aircraft-input');
  const showAllToggle = document.getElementById('show-all-toggle');
  const toggleLabel = document.getElementById('toggle-label');
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  gateForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const icao = icaoInput.value.trim().toUpperCase();
      const aircraftType = aircraftInput.value.trim().toUpperCase();

      if (!icao || !aircraftType) {
          swal("Error", "Please enter both airport and aircraft.", "error");
          return;
      }

      fetchGates(icao, aircraftType);
  });

  loadJsonData();

  let aircraftData = {};
  let manualGates = {};

  function loadJsonData() {
      fetch('aircraft.json')
          .then(response => response.json())
          .then(data => aircraftData = data)
          .catch(err => console.error('Error loading aircraft data:', err));

      fetch('manualGates.json')
          .then(response => response.json())
          .then(data => {
              manualGates = data;
              console.log('Manual Gates Loaded:', manualGates);
          })
          .catch(err => console.error('Error loading manual gates:', err));
  }

  function fetchGates(icao, aircraftType) {
      const apiUrl = `https://kaicors-6abf9658da78.herokuapp.com/https://gateapi-ae6bb7ff61e6.herokuapp.com/GateAPI/${icao}`;
      
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              const apiGates = data.gates || [];
              const manualGatesForIcao = manualGates[icao] || [];
              const allGates = [...apiGates, ...manualGatesForIcao];

              filterGates(allGates, icao, aircraftType, manualGatesForIcao);
          })
          .catch(err => {
              console.error('Error fetching gate data:', err);
              swal("Error", "An error has occured when fetching gate data. Please try again later.", "error");
          });
  }

  function filterGates(gates, icao, aircraftType, manualGatesForIcao) {
      const gateContainer = document.getElementById('gates-container');
      gateContainer.innerHTML = '';

      const maxClass = aircraftData[aircraftType];
      if (!maxClass) {
          swal("Error", "Invalid Aircraft Type!", "error");
          return;
      }

      const showAll = showAllToggle.checked;

      const availableGates = gates.filter(gate => {
          const isManualGate = manualGatesForIcao.some(manualGate => manualGate.name === gate.name);

          // Manual gates should always be included
          if (isManualGate) {
              return true;
          }

          // Apply max size condition based on toggle switch
          return showAll ? gate.maxSize >= maxClass : gate.maxSize === maxClass;
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
              <p>Max Size: Class ${gate.maxSize}</p>
          `;
          gateContainer.appendChild(gateCard);
      });
  }

  // Dark Mode Toggle Functionality
  function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      const isDarkMode = document.body.classList.contains('dark-mode');
      localStorage.setItem('dark-mode', isDarkMode);
      updateDarkModeIcon(isDarkMode);
  }

  function updateDarkModeIcon(isDarkMode) {
      const icon = isDarkMode ? '🌙' : '🌞';
      darkModeToggle.innerHTML = icon;
  }

  // Check if dark mode was saved in localStorage
  const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
  if (savedDarkMode) {
      document.body.classList.add('dark-mode');
      updateDarkModeIcon(true);
  } else {
      updateDarkModeIcon(false);
  }

  // Event listener for the dark mode toggle button
  darkModeToggle.addEventListener('click', toggleDarkMode);
});
