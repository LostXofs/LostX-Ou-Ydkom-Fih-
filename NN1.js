      // Set the target date to 30 days from now
        function getTargetDate() {
            var now = new Date();
            now.setDate(now.getDate() + 30); // Add 30 days
            return now;
        }

        // Format date as DD/MM/YYYY
        function formatDate(date) {
            var day = date.getDate();
            var month = date.getMonth() + 1; // Months are 0-based
            var year = date.getFullYear();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();

            // Add leading zeros for single-digit numbers
            day = day < 10 ? "0" + day : day;
            month = month < 10 ? "0" + month : month;
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        }

        // Calculate the remaining time
        function getRemainingTime(targetDate) {
            var now = new Date();
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

        // Initialize the countdown
        var targetDate = getTargetDate();
        document.getElementById("target-date").innerText = `Expires on: ${formatDate(targetDate)}`;

        function updateCountdown() {
            document.getElementById("remaining-time").innerText = `Time remaining: ${getRemainingTime(targetDate)}`;
        }

        // Update the countdown every second
        setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call to set the first val
