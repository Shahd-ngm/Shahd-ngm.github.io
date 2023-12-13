document.addEventListener('DOMContentLoaded', function () {
  const arrow = document.getElementById('arrow');
  const line = document.getElementById('line');
  const body = document.body;
  const h1 = document.querySelector('h1');
  
  let isDragging = false;

  // Set the initial position of the arrow as a percentage of the screen width
  const initialArrowPosition = 32; // 20% from the left
  const initialArrowLeft = (window.innerWidth * initialArrowPosition) / 100;
  arrow.style.left = `${initialArrowLeft}px`;

  arrow.addEventListener('mousedown', function (e) {
    isDragging = true;
    arrow.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;

    const lineRect = line.getBoundingClientRect();
    let x = e.clientX - lineRect.left;

    // Ensure the arrow stays within the bounds of the line
    if (x < 0) x = 0;

    if (x > lineRect.width - 30) {
      // Redirect to "video.html" when the arrow reaches the right edge
      window.location.href = 'video.html';
      return;
    }

    // Change background color and h1 color when the slider covers a certain distance
    if (x > lineRect.width - 350) {
      document.getElementById('about').style.opacity = 1;
      body.style.backgroundColor = '#8a1530'; // Red background color
      h1.style.color = '#FFFFFF'; // White h1 color
      body.style.transition = 'background-color 0.5s, color 0.5s'; // Transition effect
      document.getElementById('player').play();
    }

    arrow.style.left = `${lineRect.left + x}px`;
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
    arrow.style.cursor = 'grab';
  });

  // Update the arrow position on window resize
  window.addEventListener('resize', function () {
    const newArrowLeft = (window.innerWidth * initialArrowPosition) / 100;
    arrow.style.left = `${newArrowLeft}px`;
  });

  document.addEventListener('DOMContentLoaded', function () {
    const bgMusic = document.getElementById('bgMusic');
    const playPauseIcon = document.getElementById('playPauseIcon');
  
    // Function to toggle play/pause for background music
    window.togglePlayPause = function () {
      if (bgMusic.paused) {
        bgMusic.play();
        playPauseIcon.innerHTML = '<img src="/images/pause.png" alt="Pause">';
      } else {
        bgMusic.pause();
        playPauseIcon.innerHTML = '<img src="/images/play.png" alt="Play">';
      }
    };
  });
  
});
