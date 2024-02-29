document.addEventListener('DOMContentLoaded', function () {
    const endDate = new Date;
    endDate.setDate(endDate.getDate() + 10);
    endDate.setHours(11, 30, 0, 0); // Set the end date to 10 days from now



    const deadlineElements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        Mins: document.getElementById('minutes'),
        Secs: document.getElementById('seconds'),
    };

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        const oneDay = 24 * 60 * 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneMinute = 60 * 1000;

        const days = Math.floor(timeLeft / oneDay);
        const hours = Math.floor((timeLeft % oneDay) / oneHour);
        const minutes = Math.floor((timeLeft % oneHour) / oneMinute);
        const seconds = Math.floor((timeLeft % oneMinute) / 1000);

        // Update the countdown values on the page
        deadlineElements.days.textContent = days.toString().padStart(2, '0');
        deadlineElements.hours.textContent = hours.toString().padStart(2, '0');
        deadlineElements.Mins.textContent = minutes.toString().padStart(2, '0');
        deadlineElements.Secs.textContent = seconds.toString().padStart(2, '0');

        if (timeLeft < 0) {
            clearInterval(countdown);
            // Handle expired giveaway here if needed
        }
    }

    // Update the countdown every second
    const countdown = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial display
});