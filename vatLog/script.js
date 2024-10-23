// Initialize the log type (Pilot only)
const logTable = document.getElementById('log-table-body');
const form = document.getElementById('log-form');

// Event Listeners
form.addEventListener('submit', addLog);

// Get logs from localStorage
function getLogsFromStorage() {
  return JSON.parse(localStorage.getItem('flightLogs')) || [];
}

// Save log to localStorage
function saveLogToStorage(logEntry) {
  const logs = getLogsFromStorage();
  logs.push(logEntry);
  localStorage.setItem('flightLogs', JSON.stringify(logs));
}

// Delete log from localStorage
function deleteLogFromStorage(logEntry) {
  let logs = getLogsFromStorage();
  logs = logs.filter(log => {
    return !(log.date === logEntry.date && 
             log.departure === logEntry.departure && 
             log.arrival === logEntry.arrival && 
             log.aircraft === logEntry.aircraft && 
             log.flightTime === logEntry.flightTime && 
             log.notes === logEntry.notes);
  });
  localStorage.setItem('flightLogs', JSON.stringify(logs));
}

// Add new log (pilot only)
function addLog(e) {
  e.preventDefault();

  const date = document.getElementById('date').value;
  const notes = document.getElementById('notes').value;
  const departure = document.getElementById('departure').value.toUpperCase();
  const arrival = document.getElementById('arrival').value.toUpperCase();
  const aircraft = document.getElementById('aircraft').value.toUpperCase();
  const flightTime = document.getElementById('flight-time').value; // Accepts decimals

  const logEntry = { date, departure, arrival, aircraft, flightTime, notes };

  // Save to localStorage
  saveLogToStorage(logEntry);

  // Add to the table
  addLogToTable(logEntry);

  // Reset form
  form.reset();
}

// Add log entry to the table
function addLogToTable(logEntry) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${logEntry.date}</td>
    <td>${logEntry.departure}</td>
    <td>${logEntry.arrival}</td>
    <td>${logEntry.aircraft}</td>
    <td>${logEntry.flightTime} hrs</td>
    <td>${logEntry.notes}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  logTable.appendChild(row);

  // Add delete functionality
  row.querySelector('.delete-btn').addEventListener('click', function() {
    row.remove();
    deleteLogFromStorage(logEntry);
  });
}

// Load existing logs from localStorage on page load
function loadExistingLogs() {
  const flightLogs = getLogsFromStorage();
  flightLogs.forEach(logEntry => addLogToTable(logEntry));
}

// Initialize
loadExistingLogs();
