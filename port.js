setInterval(async () => {
  try {
    const response = await fetch("https://kaicors-6abf9658da78.herokuapp.com/https://cryptic-oasis-29524-463375c70f7b.herokuapp.com/status");
    const data = await response.json();

    const { down } = data.status || {};

    if (down) {
      window.location.href = "/other/down.html";
    }
  } catch (error) {
    console.error("Error checking maintenance status:", error);
  }
}, 10000); // Runs every 10 seconds
