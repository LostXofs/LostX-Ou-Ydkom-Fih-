// Set the target date to 30 days from now
function getTargetDate() {
    var now = new Date();
    now.setDate(now.getDate() + 30); // Add 30 days
    return now;
}

// Calculate the remaining time and format it
function getRemainingTime() {
    var now = new Date();
    var targetDate = getTargetDate();
    var diff = targetDate - now; // Difference in milliseconds

    if (diff <= 0) {
        return "Expired"; // If time is up
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days} days, ${hours} hrs, ${minutes} mins, ${seconds} secs`;
}

// Update the countdown span with the remaining time
function updateCountdown() {
    document.getElementById("datetime").innerHTML = getRemainingTime();
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Call the updateCountdown function once to initialize the display
updateCountdown();
