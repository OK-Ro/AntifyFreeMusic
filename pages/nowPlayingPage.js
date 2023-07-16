// Function to display the playing page
function displayPlayingPage(track) {
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
  
    playButton.addEventListener('click', () => {
      if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        audioPlayer.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
      }
    });
  
    previousButton.addEventListener('click', () => {
      
      console.log('Previous track button clicked.');
    });
  
    nextButton.addEventListener('click', () => {
      
      console.log('Next track button clicked.');
    });
  
    shuffleButton.addEventListener('click', () => {
     
      console.log('Shuffle button clicked.');
    });
  
    repeatButton.addEventListener('click', () => {
  
      console.log('Repeat button clicked.');
    });
  
    volumeSlider.addEventListener('input', () => {
      audioPlayer.volume = volumeSlider.value / 100;
    });
    
  
    audioPlayer.addEventListener('timeupdate', () => {
      const currentTime = formatTime(audioPlayer.currentTime);
      const duration = formatTime(audioPlayer.duration);
      timer.textContent = `${currentTime}   /   ${duration}`;
  
      const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      timerProgress.style.width = `${progressPercent}%`;
    });
  
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  }
  
  // Function to navigate back to search
  function navigateToSearch() {
    const searchContainer = document.querySelector('.search-container');
    const playingPage = document.getElementById('playing-page');
  
    searchContainer.style.display = 'block';
    playingPage.style.display = 'none';
  }
  const backButton = document.getElementById('back-button');
  backButton.addEventListener('click', navigateToSearch);