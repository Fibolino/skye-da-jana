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
