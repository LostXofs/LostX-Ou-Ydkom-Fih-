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

// Update the datetime span with the current time
function updateDateTime() {
    document.getElementById("datetime").innerHTML = getCurrentTime();
}

// Update the datetime every second
setInterval(updateDateTime, 1000);

// Call the updateDateTime function once to initialize the datetime
updateDateTime();
