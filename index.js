let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let audio = document.getElementById('audio');

function playSound() {
    audio.play();
}

function increment() {
    count += 1
    countEl.textContent = count
    playSound() // Play sound when increment function is called
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function updateTimer() {
    const timerEl = document.getElementById("timer");
    const targetDate = new Date("October 9, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timerInterval);
        timerEl.textContent = "EXPIRED";
    }
}

const timerInterval = setInterval(updateTimer, 1000);
