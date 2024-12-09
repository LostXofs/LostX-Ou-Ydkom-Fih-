   // Get the current time
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format the time
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

// Update the datetime span with the fixed date and current time
function updateDateTime() {
    const fixedDate = "2027/01/01ㅤ"; // Fixed date
    const currentTime = getCurrentTime(); // Current time
    document.getElementById("datetime").innerHTML = `${fixedDate} ${currentTime}`; // Combine date and time
}

// Update the datetime every second
setInterval(updateDateTime, 1000);

// Call the updateDateTime function once to initialize the datetime
updateDateTime();
