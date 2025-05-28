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

let glitterCount = 0;

function createGlitter() {
  const glitter = document.createElement("div");
  glitter.classList.add("heart-glitter");
  glitter.style.left = `${Math.random() * 100}vw`;
  glitter.style.top = `0`;
  glitter.style.position = "absolute";

  // Alternate color based on even/odd
  const isEven = glitterCount % 2 === 0;
  const heartColor = isEven ? "#97cbd3" : "#ecd9a3";

  // Vary heart size: 12–20px
  const size = 12 + Math.random() * 8;
  glitter.style.animationDuration = `${2 + Math.random() * 2}s`;

  glitter.innerHTML = `
    <svg viewBox="0 0 32 29.6" width="${size}" height="${size}" fill="${heartColor}" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.6,0c-3.1,0-5.9,1.8-7.6,4.5C14.3,1.8,11.5,0,8.4,0C3.8,0,0,3.8,0,8.4c0,4.2,3.3,7.6,10.3,13.5
      c2.4,2,4.6,3.7,5.4,4.2c0.3,0.2,0.8,0.2,1.1,0c0.8-0.5,3-2.2,5.4-4.2C28.7,16,32,12.6,32,8.4C32,3.8,28.2,0,23.6,0z"/>
    </svg>
  `;

  document.getElementById("glitterContainer").appendChild(glitter);

  setTimeout(() => {
    glitter.remove();
  }, 4000);

  // Increase and reset glitter count
  glitterCount++;
  if (glitterCount >= 10) glitterCount = 0;
}

setInterval(() => {
  for (let i = 0; i < 10; i++) {
    createGlitter();
  }
}, 3000);
