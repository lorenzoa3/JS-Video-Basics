var video;

window.addEventListener("load", function() {
  console.log("Good job opening the window")
  video = document.getElementById('player1');
  const playButton = document.getElementById('play');
  const pauseButton = document.getElementById('pause');
  const slowDownButton = document.getElementById('slower');
  const speedUpButton = document.getElementById('faster');
  const skipButton = document.getElementById('skip');
  const muteButton = document.getElementById('mute');
  const slider = document.getElementById('slider');
  const volumeInfo = document.getElementById('volume');
  const vintageButton = document.getElementById('vintage');
  const origButton = document.getElementById('orig');

  // Initialize the video element
  video.autoplay = false;
  video.loop = false;

  // Play Button Functionality
  playButton.addEventListener('click', function () {
    video.play();
    updateVolumeInfo();
  });

  pauseButton.addEventListener('click', function () {
    video.pause();
  });

  // Slow Down Button Functionality
  slowDownButton.addEventListener('click', function () {
    video.playbackRate -= 0.1;
    console.log(`New playback rate: ${video.playbackRate}`);
  });

  // Speed Up Button Functionality
  speedUpButton.addEventListener('click', function () {

	video.playbackRate += 0.1; // Decrease the speed by the same amount you slowed down
	  
	  console.log(`New playback rate: ${video.playbackRate}`);
  });

  // Skip Ahead Button Functionality
  skipButton.addEventListener('click', function () {
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
      video.currentTime = 0;
    }
    console.log(`Current video location: ${video.currentTime}`);
  });

  // Mute Button Functionality
  muteButton.addEventListener('click', function () {
    if (video.muted) {
      video.muted = false;
      muteButton.textContent = 'Mute';
    } else {
      video.muted = true;
      muteButton.textContent = 'Unmute';
    }
  });

  // Volume Slider Functionality
  slider.addEventListener('input', function () {
    video.volume = slider.value / 100;
    updateVolumeInfo();
  });

  // Update volume information
  function updateVolumeInfo() {
    volumeInfo.textContent = video.volume * 100 + '%';
  }

  // Styled Button Functionality (Old School)
  vintageButton.addEventListener('click', function () {
    video.classList.add('oldSchool');
  });

  // Original Button Functionality (Remove Old School)
  origButton.addEventListener('click', function () {
    video.classList.remove('oldSchool');
  });

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

