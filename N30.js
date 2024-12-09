  // Set the target date to 30 days from now
        var targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 30);

        // Format date and time as DD/MM/YYYY HH:mm:ss
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

        // Update the countdown datetime display
        function updateDateTime() {
            var now = new Date();

            if (now >= targetDate) {
                document.getElementById("datetime").innerHTML = "Expired";
                clearInterval(timer); // Stop the timer once the target date is reached
                return;
            }

            // Display the current target date and time
            document.getElementById("datetime").innerHTML = formatDate(targetDate);
        }

        // Update the display every second
        var timer = setInterval(updateDateTime, 1000);
        updateDateTime(); // Initial call to set the first value
