document.getElementById('searchBtn').addEventListener('click', async () => {
    const cid = document.getElementById('cid').value;
    const flightPlansDiv = document.getElementById('flightPlans');
    const sorttext = document.getElementById('sort');

    if (!cid) {
        flightPlansDiv.innerHTML = '<p>Please enter a valid CID.</p>';
        return;
    }

    try {
        const response = await fetch(`https://kaicors-6abf9658da78.herokuapp.com/https://api.vatsim.net/v2/members/${cid}/flightplans`);

        if (!response.ok) {
            if (response.status === 404) {
                flightPlansDiv.innerHTML = '<p>No flight plans found for this CID.</p>';
            } else {
                flightPlansDiv.innerHTML = `<p>Error: ${response.status} ${response.statusText}</p>`;
            }
            return;
        }

        const data = await response.json();
        flightPlansDiv.innerHTML = ''; // Clear previous results
        sorttext.innerHTML = 'Sorts the most recent entries at the top.';

        if (data.length === 0) {
            flightPlansDiv.innerHTML = '<p>No flight plans found for this CID.</p>';
            return;
        }

        data.forEach(flight => {
            const flightPlanDiv = document.createElement('div');
            flightPlanDiv.className = 'flight-plan';

            flightPlanDiv.innerHTML = `
                <h3><strong>Callsign:</strong> ${flight.callsign}</h3>
                <h4>Flight Plan ID: ${flight.id}</h4>
                <p><strong>Aircraft:</strong> ${flight.aircraft}</p>
                <p><strong>Departure:</strong> ${flight.dep} | Arrival: ${flight.arr}</p>
                <p><strong>Filed Time:</strong> ${new Date(flight.filed).toLocaleString()}</p>
                <p><strong>Route:</strong> ${flight.route}</p>
                <p><strong>Remarks:</strong> ${flight.rmks}</p>
            `;
            flightPlansDiv.appendChild(flightPlanDiv);
        });
    } catch (error) {
        console.error('Error fetching flight plans:', error);
        flightPlansDiv.innerHTML = '<p>Error fetching flight plans. Please try again later.</p>';
    }

});
