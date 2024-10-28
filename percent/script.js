const schedule = [
    { name: "Tutor Group", start: "08:30", end: "08:55" },
    { name: "Period 1", start: "08:55", end: "09:50" },
    { name: "Period 2", start: "09:50", end: "10:45" },
    { name: "Recess", start: "10:45", end: "11:10" },
    { name: "Period 3", start: "11:10", end: "12:05" },
    { name: "Period 4", start: "12:05", end: "13:00" },
    { name: "Lunch", start: "13:00", end: "13:35" },
    { name: "Period 5", start: "13:35", end: "14:30" },
    { name: "Period 6", start: "14:30", end: "15:25" }
  ];
  
  function toMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  }
  
  const startOfDay = toMinutes("08:30");
  const endOfDay = toMinutes("15:25");
  
  function updateProgress() {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
  
    const dayProgress = Math.min(
      100,
      Math.max(0, ((currentTime - startOfDay) / (endOfDay - startOfDay)) * 100)
    );
    const dayProgressText = document.getElementById("dayProgress");

    dayProgressText.textContent = `${Math.round(dayProgress)}%`;

    document.getElementById("dayProgress").textContent = `${Math.round(dayProgress)}%`;
    document.getElementById("dayProgressBar").style.width = `${dayProgress}%`;
    document.getElementById("barbg");

    if (dayProgress > 90) {
        document.getElementById("dayProgress").style.color = "#4CAF50"; // Change color to orange
        document.getElementById("dayProgressBar").style.backgroundColor = "#4CAF50"; // Change color to orange
        dayProgressText.classList.add("flash");
        barbg.classList.add("flash2");
      } else {
        document.getElementById("dayProgress").style.color = "#fff"; // Default color
        document.getElementById("dayProgressBar").style.backgroundColor = "#fff"; // Change color to orange
        dayProgressText.classList.remove("flash");
      }
  
    let currentPeriod = "At Home";
    let periodProgress = 0;
    for (let period of schedule) {
      const periodStart = toMinutes(period.start);
      const periodEnd = toMinutes(period.end);
  
      if (currentTime >= periodStart && currentTime < periodEnd) {
        currentPeriod = period.name === "Recess" || period.name === "Lunch" ? period.name.toUpperCase() : period.name;
        periodProgress = ((currentTime - periodStart) / (periodEnd - periodStart)) * 100;
        break;
      }
    }
  
    document.getElementById("currentPeriod").textContent = currentPeriod;
    document.getElementById("periodProgress").textContent = `${Math.round(periodProgress)}%`;
  
    setTimeout(updateProgress, 60000);
  }
  
  updateProgress();
  