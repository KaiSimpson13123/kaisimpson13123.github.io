document.getElementById('searchBtn').addEventListener('click', async () => {
    const cid = document.getElementById('cid').value;
    const flightPlansDiv = document.getElementById('flightPlans');

    if (!cid) {
        flightPlansDiv.innerHTML = '<p>Please enter a valid CID.</p>';
        return;
    }

    try {
        console.log(`Fetching flight plans for CID: ${cid}`);
        const response = await fetch(`https://api.vatsim.net/v2/members/${cid}/flightplans`);

        console.log(`Response status: ${response.status}`);

        if (!response.ok) {
            if (response.status === 404) {
                flightPlansDiv.innerHTML = '<p>No flight plans found for this CID.</p>';
            } else {
                flightPlansDiv.innerHTML = `<p>Error: ${response.status} ${response.statusText}</p>`;
            }
            return;
        }

        const data = await response.json();
        console.log('Flight plan data:', data);

        flightPlansDiv.innerHTML = ''; // Clear previous results

        if (data.length === 0) {
            flightPlansDiv.innerHTML = '<p>No flight plans found for this CID.</p>';
            return;
        }

        data.forEach(flight => {
            const flightPlanDiv = document.createElement('div');
            flightPlanDiv.className = 'flight-plan';

            flightPlanDiv.innerHTML = `
                <h3>Flight Plan ID: ${flight.id}</h3>
                <p><strong>Callsign:</strong> ${flight.callsign}</p>
                <p><strong>Aircraft:</strong> ${flight.aircraft}</p>
                <p><strong>Departure:</strong> ${flight.dep} | Arrival: ${flight.arr}</p>
                <p><strong>Departure Time:</strong> ${new Date(flight.deptime).toLocaleString()}</p>
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
