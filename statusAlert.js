// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Dynamically add the CSS for the alert
  const style = document.createElement("style");
  style.textContent = `
    .alert {
      padding: 20px;
      background-color: #f44336;
      color: white;
      position: fixed;
      right: 10px;
      top: 5px;
      font-size: medium;
      z-index: 9999999;
      display: none;
      border-radius: 10px;
    }
    .closebtn {
      margin-left: 15px;
      color: white;
      font-weight: bold;
      float: right;
      font-size: 22px;
      line-height: 20px;
      cursor: pointer;
      transition: 0.3s;
    }
    .closebtn:hover {
      color: black;
    }
  `;
  document.head.appendChild(style);

  // Create the alert container
  const alertDiv = document.createElement("div");
  alertDiv.className = "alert";
  alertDiv.id = "outage";
  alertDiv.innerHTML = `
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
    <span><strong>Alert!</strong> Planned Outage Approaching!</span>
  `;
  document.body.appendChild(alertDiv);

  const alertElement = document.getElementById("outage");

  // Function to check the status
  const checkStatus = async () => {
      try {
          // Fetch the status from the /status endpoint (with CORS proxy)
          const response = await fetch("https://kaicors-6abf9658da78.herokuapp.com/http://admin.kaisimpson.xyz/status");
          const data = await response.json();

          // Check if "warn" is true
          if (data.status.warn) {
              alertElement.style.display = "block"; // Show the alert
          } else {
              alertElement.style.display = "none"; // Hide the alert
          }
      } catch (error) {
          console.error("Error fetching status:", error);
      }
  };

  // Check the status every second
  setInterval(checkStatus, 1000);

  // Initial check
  checkStatus();
});
