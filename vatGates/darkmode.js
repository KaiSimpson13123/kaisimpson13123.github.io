
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


function updateDarkModeIcon(isDarkMode) {
    const darkModeIcon = document.getElementById('dark-mode-icon');
    if (isDarkMode) {
        darkModeIcon.textContent = '🌙';
    } else {
        darkModeIcon.textContent = '🌞';
    }
}


function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode.toString());
    updateDarkModeIcon(isDarkMode);
}


document.addEventListener('DOMContentLoaded', loadDarkMode);


const darkModeButton = document.getElementById('dark-mode-button');
if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
}
