startButton = document.getElementById('start-button');

console.log(startButton.textContent)
startButton.addEventListener('click', () => {
    window.location.href = "./c2.html"
});

const audio = new Audio('./audio/firstpage.wav');
window.addEventListener('mousemove', () => {
    audio.play();
});