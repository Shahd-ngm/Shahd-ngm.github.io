document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.getElementById('videoPlayer');
    const optionButtons = document.getElementById('optionButtons');
    const firstText = document.getElementById('firstText');
    const secondText = document.getElementById('secondText');
    const text = "It's getting late... do you want to";
    const text2 = "Would you...";

    //to add typewriter effect

    function typeWriterEffect(targetElement, text) {
      const element = document.getElementById(targetElement);
      element.innerText = ''; // Clear the original text
  
      let i = 0;
      const speed = 50; 
  
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
  
      type();
    }
    
  
    videoPlayer.addEventListener('ended', function () {
      // Show the option buttons at the end of the first video
      optionButtons.classList.remove('hidden');
      firstText.classList.remove('hidden');
      // Add the typewriter effect
      typeWriterEffect('firstText', "It's getting late... do you want to");

    });
  
    // Function to play the next video based on user choice
    window.playNextVideo = function (choice) {
      optionButtons.classList.add('hidden'); // Hide the option buttons
      firstText.classList.add('hidden')
      let nextVideoSource;
  
      if (choice === 'walk') {
        nextVideoSource = 'videos/walk.mp4';
      } else {
        nextVideoSource = 'videos/sleep.mp4';
      }
  
      // Change the video source and play the next video
      videoPlayer.src = nextVideoSource;
      videoPlayer.load(); // Reload the video element
      videoPlayer.play();

      // Show the option buttons at the end of the second video
      videoPlayer.addEventListener('ended', function () {
        optionButtons.classList.add('hidden'); // Hide the option buttons
        secondOptionButtons.classList.remove('hidden');
        secondText.classList.remove('hidden');
        typeWriterEffect('secondText', 'Would you...');

      });
      //function to play the next video based on user choice

      window.playNextVideo = function (choice) {
        secondOptionButtons.classList.add('hidden'); // Hide the option buttons
        let nextVideoSource;
    
        if (choice === 'tellFriend') {
          nextVideoSource = 'videos/tell.mp4';
        } else {
          nextVideoSource = 'videos/notTell.mp4';
        }
    
        // Change the video source and play the next video
        videoPlayer.src = nextVideoSource;
        videoPlayer.load(); // Reload the video element
        videoPlayer.play();
    
        // Show the option buttons at the end of the third video
        videoPlayer.addEventListener('ended', function () {
          optionButtons.classList.add('hidden'); 
          secondOptionButtons.classList.add('hidden'); //hide all option buttons
        });

      };
    };
});
  