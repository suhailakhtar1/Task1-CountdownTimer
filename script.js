// Set the date of the event you want to countdown to
const eventDate = new Date("2024-01-01T00:00:00").getTime();

// Update the countdown every second
const timer = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Find the time remaining between now and the event date
  const timeRemaining = eventDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown timer
  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (timeRemaining < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "The event has already occurred!";
  }
}, 1000);