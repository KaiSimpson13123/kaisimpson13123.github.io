// Check if dark mode is already enabled in localStorage
function loadDarkMode() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';

    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        updateDarkModeIcon(true);
    } else {
        document.body.classList.remove('dark-mode');
        updateDarkModeIcon(false);
    }
}

// Update dark mode icon based on current mode
function updateDarkModeIcon(isDarkMode) {
    const darkModeIcon = document.getElementById('dark-mode-icon');
    if (isDarkMode) {
        darkModeIcon.textContent = '🌙'; // Change to dark mode icon (moon)
    } else {
        darkModeIcon.textContent = '🌞'; // Change to light mode icon (sun)
    }
}

// Toggle dark mode on button click
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode.toString());
    updateDarkModeIcon(isDarkMode);
}

// Initialize dark mode when the page loads
document.addEventListener('DOMContentLoaded', loadDarkMode);

// Add event listener to toggle dark mode when button is clicked
const darkModeButton = document.getElementById('dark-mode-button');
if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
}
