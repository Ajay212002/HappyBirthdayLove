const message = "From the moment I met you, I knew you were special. Your love lights up my life. Thank you for being the most amazing person ever. Happy Birthday, sweetheart! 💖";
let index = 0;
let typingElement = document.getElementById("typing");

function typeMessage() {
  if (index < message.length) {
    typingElement.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeMessage, 50);
  }
}

document.addEventListener("DOMContentLoaded", typeMessage);

const loveReasons = [
  "Your laugh is my favorite melody 🎵",
  "You make every moment magical ✨",
  "You are my home and my adventure ❤️"
];

function showLove(index) {
  document.getElementById("loveText").innerText = loveReasons[index];
}
