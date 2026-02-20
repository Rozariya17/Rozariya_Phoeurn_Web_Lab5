// Clock Management
let clockInterval;


// Updates the time display with current time

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const timeElement = document.getElementById("time");
    timeElement.textContent = timeString;
}


// Stops the running clock and shows confirmation

function stopClock() {
    clearInterval(clockInterval);
    alert("Clock stopped");
}


// Initiates the clock update every second
 
function initClock() {
    updateTime();
    clockInterval = setInterval(updateTime, 1000);
}


// Opens a popup window and redirects to fake login after delay
 
function goToTiktok() {
    const windowObj = window.open("https://www.tiktok.com/en/", "_blank");
    setTimeout(() => {
        windowObj.location.replace("./fake_login.html");
    }, 5000);
}

// Start clock on page load
initClock();