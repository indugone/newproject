/* Typewriter effect */
const typeText = "Every heartbeat says your name ❤️";
let typeIndex = 0;

function typeEffect() {
  if (typeIndex < typeText.length) {
    document.getElementById("typeText").innerHTML += typeText.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

/* Name personalization */
function setName() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("personalMsg").innerText =
    `Happy Valentine's Day, ${name} ❤️`;
}

/* Love letter */
function openLetter() {
  document.getElementById("letter").style.display = "block";
}

/* Night mode */
function toggleMode() {
  document.body.classList.toggle("night");
}

/* Music */
const music = document.getElementById("bgMusic");
function toggleMusic() {
  music.paused ? music.play() : music.pause();
}

/* Kiss counter */
let kissCount = 0;
function sendLove() {
  kissCount++;
  document.getElementById("counter").innerText =
    `💋 Kisses sent: ${kissCount}`;
}

/* Floating hearts background */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "float-heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 500);

/* Secret double click */
document.body.ondblclick = () => {
  alert("You mean the world to me ❤️");
};

/* Page load surprise */
window.onload = () => {
  setTimeout(() => {
    alert("Someone loves you very much 💖");
  }, 1500);
};

