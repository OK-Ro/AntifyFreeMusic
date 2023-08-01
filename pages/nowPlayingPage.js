

let currentTrackIndex = 0; 
let fetchedTracks = [];


function displayPlayingPage(track) {

  if (!track || !track.album || !track.album.images || track.album.images.length === 0) {
    console.error('Invalid track object or missing album images:', track);
    return;
  }
  const playingPage = document.getElementById('playing-page');
  const playingTrack = document.getElementById('playing-track');
  const searchContainer = document.querySelector('.search-container');




  // Update the playing track information
  playingTrack.innerHTML = `
    <div class="track-container">
      <img src="${track.album.images[0].url}">
      <div class="track-info">
        <h3>${track.name}</h3>
        <p>${track.artists.map(artist => artist.name).join(', ')}</p>
      </div>
      <audio src="${track.preview_url}" id="audio-player"></audio>
      <div class="player-container" data-track-id="${track.id}"></div>
      <div id="timer-bar" class="timer-bar">
        <div id="timer-progress" class="timer-progress"></div>
      </div>
      <div id="timer" class="timer">
        <span class="current-time">0:00</span>
        <span class="total-time">0:00</span>
      </div>
    </div>
    <div class="controls">
      <button id="shuffle-button"><i class="fas fa-random"></i></button>
      <button id="previous-button"><i class="fas fa-step-backward"></i></button>
      <button id="play-button"><i class="fas fa-play"></i></button>
      <button id="next-button"><i class="fas fa-step-forward"></i></button>
      <button id="repeat-button"><i class="fas fa-retweet"></i></button>
    </div>
    <div class="volume-icon">
      <i class="fas fa-volume-up"></i>
      <input type="range" id="volume-slider" class="volume">
    </div>
  `;
  playingPage.style.display = 'block';
  searchContainer.style.display = 'none';

  // Add event listeners to control buttons
  const playButton = document.getElementById('play-button');
  const previousButton = document.getElementById('previous-button');
  const nextButton = document.getElementById('next-button');
  const shuffleButton = document.getElementById('shuffle-button');
  const repeatButton = document.getElementById('repeat-button');
  const audioPlayer = document.getElementById('audio-player');
  const volumeSlider = document.getElementById('volume-slider');
  const timerProgress = document.getElementById('timer-progress');
  const timer = document.getElementById('timer');

  function playAudio(track) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  }

  function pauseAudio() {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }

  function changeToPreviousTrack() {
    currentTrackIndex--;
    if (currentTrackIndex < 0) {
      currentTrackIndex = fetchedTracks.length - 1;
    }
    const previousTrack = fetchedTracks[currentTrackIndex];
    displayPlayingPage(previousTrack);
    playAudio(previousTrack);
  }

  function changeToNextTrack() {
    currentTrackIndex++;
    if (currentTrackIndex >= fetchedTracks.length) {
      currentTrackIndex = 0;
    }
    const nextTrack = fetchedTracks[currentTrackIndex];
    displayPlayingPage(nextTrack);
    playAudio(nextTrack);
  }

  playButton.addEventListener('click', () => {
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer.paused) {
      playAudio(fetchedTracks[currentTrackIndex]);
    } else {
      pauseAudio();
    }
  });

  previousButton.addEventListener('click', () => {
    changeToPreviousTrack();
  });

  nextButton.addEventListener('click', () => {
    changeToNextTrack();
  });




  let isRepeat = false;

  repeatButton.addEventListener('click', () => {
    isRepeat = !isRepeat;
    if (isRepeat) {
      repeatButton.style.color = 'blue'; 
    } else {
      repeatButton.style.color = ''; 
    }
  });
  

 



audioPlayer.addEventListener('loadedmetadata', () => {
  const totalTime = document.querySelector('.total-time');
  const totalSeconds = Math.floor(audioPlayer.duration);
  totalTime.textContent = formatTime(totalSeconds);
  
  updateTimerProgress(); 
  timerInterval = setInterval(updateTimerProgress, 1000);
});

// Function to format time in seconds to MM:SS format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Function to update the timer progress
function updateTimerProgress() {
  const currentTime = audioPlayer.currentTime;
  const totalTime = audioPlayer.duration;
  const percentage = (currentTime / totalTime) * 100;
  timerProgress.style.width = `${percentage}%`;

  const currentTimeDisplay = document.querySelector('.current-time');
  currentTimeDisplay.textContent = formatTime(Math.floor(currentTime));
}


audioPlayer.addEventListener('pause', () => {
  clearInterval(timerInterval);
});

audioPlayer.addEventListener('play', () => {
  timerInterval = setInterval(updateTimerProgress, 1000);
});



  volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value / 100;
  });

  // Update the play button and audio controls based on the preview_url availability to handle 404 error
  if (track.preview_url) {
    audioPlayer.src = track.preview_url;
    audioPlayer.addEventListener('loadeddata', () => {
      playButton.disabled = false; 
      playingTrack.classList.remove('error-message');
    });
  } else {
    
    playButton.disabled = true;
    playingTrack.innerHTML = playingTrack.innerHTML = '<p style="font-size: 1.5rem; background-color: #f44336; border-radius: 20px; text-align: center; color: white; height: 200px;  display: flex; justify-content: center; align-items: center;">Sorry this track is not available for preview, try another track.</p>';

  }
  
}

// Function to navigate back to search
const backButton = document.getElementById('back-button');
backButton.addEventListener('click', navigateToSearch);

function navigateToSearch() {
  const searchContainer = document.querySelector('.search-container');
  const playingPage = document.getElementById('playing-page');

  searchContainer.style.display = 'block';
  playingPage.style.display = 'none';
}

export { displayPlayingPage}