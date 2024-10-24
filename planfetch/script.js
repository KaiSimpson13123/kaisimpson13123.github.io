document.getElementById('searchBtn').addEventListener('click', async () => {
    const cid = document.getElementById('cid').value;
    const flightPlansDiv = document.getElementById('flightPlans');

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

        if (data.length === 0) {
            flightPlansDiv.innerHTML = '<p>No flight plans found for this CID.</p>';
            return;
        }

        data.forEach(flight => {
            const flightPlanDiv = document.createElement('div');
            flightPlanDiv.className = 'flight-plan';

            // Calculate the time ago
            const filedTime = new Date(flight.filed);
            const timeAgo = getTimeAgo(filedTime);

            flightPlanDiv.innerHTML = `
                <h3><strong>Callsign:</strong> ${flight.callsign}</h3>
                <p>Flight Plan ID: ${flight.id}</p>
                <p><strong>Aircraft:</strong> ${flight.aircraft}</p>
                <p><strong>Departure:</strong> ${flight.dep} | Arrival: ${flight.arr}</p>
                <p><strong>Route:</strong> ${flight.route}</p>
                <p><strong>Remarks:</strong> ${flight.rmks}</p>
                <a href="javascript:swal('Date Filed', '${filedTime}', 'info');" style="text-decoration: none;color: white;"><p style="text-align: right;"><strong>Filed:</strong> ${timeAgo} ago</p></a>
            `;

            flightPlansDiv.appendChild(flightPlanDiv);

        });
    } catch (error) {
        console.error('Error fetching flight plans:', error);
        flightPlansDiv.innerHTML = '<p>Error fetching flight plans. Please try again later.</p>';
    }
});

// Function to calculate time ago
function getTimeAgo(filedDate) {
    const now = new Date();
    const diffInMilliseconds = now - filedDate;

    const seconds = Math.floor(diffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const formattedTime = `${days}d:${hours % 24}h:${minutes % 60}m`;
    return formattedTime;
}
