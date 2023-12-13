const audioNames = [
    'WelcomeCenter_Soundscape_Final_2.mp3',
    'Groundfloor_Soundscape_Final_2.mp3',
    'Cstore_Soundscape_Final_2.mp3',
    'Marketplace_Soundscape_Final_2.mp3',
    'Baraha_Soundscape_Final_2.mp3',
    'CityView_Soundscape_Final_2.mp3'
]

var currAudio;
var isPlaying = false;

function goToImage(imageNumber) {
    if (isPlaying){
        currAudio.pause();
    }
    currAudio = new Audio(`./audio/${audioNames[imageNumber - 1]}`);
    const images = document.querySelectorAll('.image');
    images.forEach((img, index) => {
        img.style.transform = `translateY(${(index + 1 - imageNumber) * 100}%)`;
    });
    currAudio.play();
    isPlaying = true;
}

window.onload = () => {
    goToImage(1);
};
