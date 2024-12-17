async function searchFrequency() {
    const searchButton = document.getElementById("searchButton");
    const frequencyInput = document.getElementById("frequencyInput");

    if (!searchButton || !frequencyInput) {
        console.error("Missing elements in the DOM.");
        return;
    }

    const searchValue = frequencyInput.value;
    const formattedFrequency = searchValue.replace('.', '');

    searchButton.disabled = true;
    searchButton.textContent = "Searching...";

    try {
        const response = await fetch("https://kaicors-6abf9658da78.herokuapp.com/https://data.vatsim.net/v3/transceivers-data.json");
        const data = await response.json();

        const matchingTransceivers = data.filter(entry =>
            entry.transceivers.some(transceiver =>
                transceiver.frequency.toString().startsWith(formattedFrequency)
            ) && !entry.callsign.includes("_")
        );

        displayResults(matchingTransceivers, searchValue);
    } catch (error) {
        alert("Failed to fetch data. Please try again later.");
    } finally {
        searchButton.disabled = false;
        searchButton.textContent = "Search";
    }
}

function displayResults(matchingTransceivers, frequency) {
    const popup = document.querySelector(".popup");
    const popupContent = document.querySelector(".popup-content");

    if (!popup || !popupContent) {
        console.error("Popup elements not found.");
        return;
    }

    // Clear any existing content in the popup
    popupContent.innerHTML = '';

    const total = matchingTransceivers.length;
    popupContent.innerHTML = `
        <span class="close-btn" onclick="closePopup()">&times;</span>
        <h2><strong>${total}</strong> Transceivers Found on ${frequency}</h2>
        <br>
        <button onclick='viewList(${JSON.stringify(matchingTransceivers)})'>View List</button>
    `;

    popup.style.display = "block";
}

function viewList(matchingTransceivers) {
    const popupContent = document.querySelector(".popup-content");

    if (!popupContent) {
        console.error("Popup content element not found.");
        return;
    }

    // Generate the list of callsigns
    const callsigns = matchingTransceivers.map(entry => entry.callsign);
    const maxVisible = 10; // Show 10 callsigns initially
    const visibleCallsigns = callsigns.slice(0, maxVisible);
    const remainingCallsigns = callsigns.length - visibleCallsigns.length;

    // Generate the list HTML
    let listContent = `<h2>Callsigns on frequency.</h2>`;

    // Scrollable list div
    let scrollableListContent = `
        <div class="scrollable-list">
            <ul>${callsigns.map(cs => `<li>${cs}</li>`).join('')}</ul>
        </div>
    `;

    // Add visible callsigns to the top
    

    // Add remaining message
    if (remainingCallsigns > 0) {
        listContent += `<p></em></em></p>`;
    }

    // Insert the full content into the popup
    popupContent.innerHTML = `
        <span class="close-btn" onclick="closePopup()">&times;</span>
        ${listContent}
        ${scrollableListContent}
    `;

}

function closePopup() {
    const popup = document.querySelector(".popup");

    if (!popup) {
        console.error("Popup element not found.");
        return;
    }

    popup.style.display = "none";
}
