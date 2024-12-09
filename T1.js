    function formatTime(date) {
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            return `${hours}:${minutes}:${seconds}`;
        }

        function updateDateTime() {
            const fixedDateInput = document.getElementById("fixedDateInput").value; // Get the editable date
            const now = new Date();
            const timeString = formatTime(now); // Format the current time

            document.getElementById("datetime").innerHTML = `${fixedDateInput} ${timeString}`; // Combine date and time
        }

        // Update the date and time every second
        setInterval(updateDateTime, 1000);
        updateDateTime();