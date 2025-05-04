function updateCountdown() {
  // ISO format with +03:00 for Greece time (EEST)
  const eventDate = new Date("2025-10-05T12:00:00+03:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.querySelector(".countdown-container").innerHTML =
      "The wedding has begun!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
