document.addEventListener('DOMContentLoaded', function () {
  const gateForm = document.getElementById('gate-form');
  const icaoInput = document.getElementById('icao-input');
  const aircraftInput = document.getElementById('aircraft-input');
  const showAllToggle = document.getElementById('show-all-toggle');
  const toggleLabel = document.getElementById('toggle-label');
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  gateForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const icao = icaoInput.value.trim().toUpperCase();
      const aircraftType = aircraftInput.value.trim().toUpperCase();

      if (!icao || !aircraftType) {
          swal("Error", "Please enter both airport and aircraft.", "error");
          return;
      }

      fetchGates(icao, aircraftType, false);
  });

  const randomButton = document.querySelector('button[type="button"]');
  randomButton.addEventListener('click', function () {
      const icao = icaoInput.value.trim().toUpperCase();
      const aircraftType = aircraftInput.value.trim().toUpperCase();

      if (!icao || !aircraftType) {
          swal("Error", "Please enter both airport and aircraft.", "error");
          return;
      }

      fetchGates(icao, aircraftType, true);
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

  function fetchGates(icao, aircraftType, isRandom) {
      const apiUrl = `https://gateapi.fly.dev/GateAPI/${icao}`;

      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              const apiGates = data.gates || [];
              const manualGatesForIcao = manualGates[icao] || [];
              const allGates = [...apiGates, ...manualGatesForIcao];

              filterGates(allGates, icao, aircraftType, manualGatesForIcao, isRandom);
          })
          .catch(err => {
              console.error('Error fetching gate data:', err);
              swal("Error", "An error has occurred when fetching gate data. Please try again later. Submit Error: https://shorturl.at/i2HAU", "error");
          });
  }

  function filterGates(gates, icao, aircraftType, manualGatesForIcao, isRandom) {
      const gateContainer = document.getElementById('gates-container');
      gateContainer.innerHTML = '';

      const maxClass = aircraftData[aircraftType];
      if (!maxClass) {
          swal("Error", "Invalid Aircraft Type! Submit Error: https://shorturl.at/i2HAU", "error");
          return;
      }

      const showAll = showAllToggle.checked;

      const availableGates = gates.filter(gate => {
          const isManualGate = manualGatesForIcao.some(manualGate => manualGate.name === gate.name);

          
          if (isManualGate) {
              return true;
          }

          
          return showAll ? gate.maxSize >= maxClass : gate.maxSize === maxClass;
      });

      if (isRandom) {
          
          const randomGate = availableGates[Math.floor(Math.random() * availableGates.length)];
          if (randomGate) {
              displayRandomGate(randomGate); 
          } else {
              swal("Error", "No available gates for this aircraft at the selected airport. Submit Error: https://shorturl.at/i2HAU", "error");
          }
      } else {
          // Display all available gates
          if (availableGates.length === 0) {
              gateContainer.innerHTML = 'No available gates for this aircraft at the selected airport.';
              return;
          }

          availableGates.forEach(gate => {
              displayGate(gate);  // Display gates normally in the list
          });
      }
  }

  // Function to display a random gate in the modal
  function displayRandomGate(gate) {
      const modal = document.getElementById('random-gate-modal');
      const gateName = document.getElementById('random-gate-name');
      const gateSize = document.getElementById('random-gate-size');
      const gateLocation = document.getElementById('random-gate-location');

      // Set modal content
      gateName.textContent = `Gate: ${gate.name}`;
      gateSize.textContent = `Max Size: Class ${gate.maxSize}`;

      // Show the modal
      modal.style.display = "block";
  }

  // Function to display gates normally in the list
  function displayGate(gate) {
      const gateContainer = document.getElementById('gates-container');

      const gateCard = document.createElement('div');
      gateCard.classList.add('gate-card');
      gateCard.innerHTML = `
          <h3>${gate.name}</h3>
          <p>Max Size: Class ${gate.maxSize}</p>
      `;
      gateContainer.appendChild(gateCard);
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

  // Modal close functionality
  document.querySelector('.close').addEventListener('click', function () {
      document.getElementById('random-gate-modal').style.display = "none";
  });

  // Close the modal when clicking anywhere outside the modal
  window.addEventListener('click', function (event) {
      const modal = document.getElementById('random-gate-modal');
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});
