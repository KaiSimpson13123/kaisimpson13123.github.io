async function generateICS() {
    const response = await fetch('https://kaicors-6abf9658da78.herokuapp.com/https://my.vatsim.net/api/v2/events/latest');
    const { data: events } = await response.json();
  
    let icsContent = `BEGIN:VCALENDAR
  VERSION:2.0
  CALSCALE:GREGORIAN
  PRODID:-//VATSIM Events//EN`;
  
    events.forEach((event) => {
      const start = event.start_time.replace(/[-:]/g, '').replace('.000000Z', 'Z');
      const end = event.end_time.replace(/[-:]/g, '').replace('.000000Z', 'Z');
      const description = event.description.replace(/\r\n/g, '\\n');
      const location = event.airports.map((airport) => airport.icao).join(', ');
  
      icsContent += `
  BEGIN:VEVENT
  UID:${event.id}@vatsim.net
  SUMMARY:${event.name}
  DESCRIPTION:${description}
  DTSTART:${start}
  DTEND:${end}
  LOCATION:${location}
  URL:${event.link}
  END:VEVENT`;
    });
  
    icsContent += '\nEND:VCALENDAR';
  
    // Download the ICS file
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vatsim-events.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  // Call the function when a button is clicked
  document.querySelector('#downloadICS').addEventListener('click', generateICS);
  