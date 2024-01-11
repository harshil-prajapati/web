// Function to calculate and update the countdown
function updateCountdown() {
    // Set the launch date (year, month (0-based), day, hour, minute, second)
    const launchDate = new Date(2024, 8, 9, 0, 0, 0); // September 9, 2024, 00:00:00

    // Get the current date and time
    const currentDate = new Date();

    // Calculate the time remaining in seconds
    const timeRemaining = (launchDate - currentDate) / 1000;

    if (timeRemaining > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / 86400); // 86400 seconds in a day
        const hours = Math.floor((timeRemaining % 86400) / 3600); // 3600 seconds in an hour
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = Math.floor(timeRemaining % 60);

        // Display the countdown in the HTML
        const countdownElement = document.getElementById('launch-date');
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        // Display a message when the launch date has passed
        const countdownElement = document.getElementById('launch-date');
        countdownElement.textContent = 'Launched!';
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();
