    function formatTime(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            return `${hours}:${minutes}:${seconds}`;
        }

        function updateCurrentTime() {
            var now = new Date();
            document.getElementById("currentTime").innerHTML = formatTime(now);
        }

        // Update the current time every second
        setInterval(updateCurrentTime, 1000);
        updateCurrentTime();
