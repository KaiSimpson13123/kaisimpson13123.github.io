document.addEventListener('DOMContentLoaded', () => {
    const openskyIcon = document.getElementById('opensky-icon');
    const vatsimIcon = document.getElementById('vatsim-icon');
    const openskyPing = document.getElementById('opensky-ping');
    const vatsimPing = document.getElementById('vatsim-ping');

    async function checkConnection(url, icon, pingElement) {
        const controller = new AbortController();  // Create an AbortController instance
        const timeout = setTimeout(() => controller.abort(), 5000);  // Set a 5-second timeout

        try {
            const startTime = new Date().getTime();
            const response = await fetch(url, { signal: controller.signal });  // Pass the signal to fetch
            const endTime = new Date().getTime();
            const ping = endTime - startTime;

            clearTimeout(timeout);  // Clear the timeout if request succeeds

            if (response.ok) {
                if (ping > 1000) {
                    icon.style.color = '#f0ad4e'; // Ping > 1000 ms, set to yellow
                } else {
                    icon.style.color = '#5cb85c'; // Connected
		    setTimeout(() => {
        	    	icon.style.textShadow = '0px 0px 20px #5cb85c';
      		    }, 500);
                }
                pingElement.textContent = `Ping: ${ping} ms`;
            } else { 
                icon.style.color = '#ED4337'; // Not Connected
                pingElement.textContent = 'Ping: -- ms';
            }
        } catch (error) {
            icon.style.color = '#ED4337'; // Not Connected or timeout
            pingElement.textContent = 'Ping: -- ms';
        }
    }

    // Replace these URLs with the actual endpoints you use
    const openskyAPI = 'https://opensky-network.org/api/states/all';
    const vatsimAPI = 'https://data.vatsim.net/v3/vatsim-data.json';

    checkConnection(openskyAPI, openskyIcon, openskyPing);
    checkConnection(vatsimAPI, vatsimIcon, vatsimPing);
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the popup and close button elements
    const errorPopup = document.getElementById('errorPopup');
    const closeBtn = document.getElementById('closeBtn');

    // Show the error popup when the page loads
    errorPopup.style.display = 'flex';

    // Hide the error popup when the close button is clicked
    closeBtn.addEventListener('click', function () {
        errorPopup.style.display = 'none';
    });
});
