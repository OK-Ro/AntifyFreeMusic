export const createTrackContainer = (track) => {
    const trackContainer = document.createElement('div');
    trackContainer.classList.add('track-container');
  
    const trackImage = document.createElement('img');
    trackImage.src = track.album.images[0].url;
  
    const trackInfo = document.createElement('div');
    trackInfo.classList.add('track-info');
  
    const trackName = document.createElement('h3');
    trackName.textContent = track.name;
  
    const trackArtists = document.createElement('p');
    trackArtists.textContent = track.artists.map((artist) => artist.name).join(', ');
  
    trackInfo.appendChild(trackName);
    trackInfo.appendChild(trackArtists);
  
    trackContainer.appendChild(trackImage);
    trackContainer.appendChild(trackInfo);
  
    return trackContainer;
  };
  
  export const createAudioPlayer = (track) => {
    const audioPlayer = document.createElement('audio');
    audioPlayer.src = track.preview_url;
    audioPlayer.id = 'audio-player';
    return audioPlayer;
  };
  
  export const createControls = () => {
    const controls = document.createElement('div');
    controls.classList.add('controls');
  
    // Create the control buttons
    const buttons = [
      { id: 'shuffle-button', icon: 'fas fa-random' },
      { id: 'previous-button', icon: 'fas fa-step-backward' },
      { id: 'play-button', icon: 'fas fa-play' },
      { id: 'next-button', icon: 'fas fa-step-forward' },
      { id: 'repeat-button', icon: 'fas fa-retweet' },
    ];
  
    buttons.forEach((button) => {
      const controlButton = document.createElement('button');
      controlButton.id = button.id;
  
      const icon = document.createElement('i');
      icon.classList.add(button.icon);
  
      controlButton.appendChild(icon);
      controls.appendChild(controlButton);
    });
  
    return controls;
  };
  
  export const createVolumeSection = () => {
    const volumeSection = document.createElement('div');
    volumeSection.classList.add('volume-icon');
  
    const volumeIcon = document.createElement('i');
    volumeIcon.classList.add('fas', 'fa-volume-up');
  
    const volumeSlider = document.createElement('input');
    volumeSlider.type = 'range';
    volumeSlider.id = 'volume-slider';
    volumeSlider.classList.add('volume');
  
    volumeSection.appendChild(volumeIcon);
    volumeSection.appendChild(volumeSlider);
  
    return volumeSection;
  };
  