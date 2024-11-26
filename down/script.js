// Function to check the status
const checkSiteStatus = async () => {
  try {
      // Fetch the status from the /status endpoint (with CORS proxy)
      const response = await fetch("https://kaicors-6abf9658da78.herokuapp.com/http://admin.kaisimpson.xyz/status");
      const data = await response.json();

      // Check if the site is no longer down
      if (!data.status.down) {
          // Redirect to the homepage
          window.location.href = "/";
      }
  } catch (error) {
      console.error("Error checking site status:", error);
  }
};

// Check the status every second
setInterval(checkSiteStatus, 1000);

// Initial check
checkSiteStatus();
