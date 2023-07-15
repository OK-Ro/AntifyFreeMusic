// // Function to display the playing page
// function displayPlayingPage(track) {
//     const playingPage = document.getElementById('playing-page');
//     const playingTrack = document.getElementById('playing-track');
//     const searchContainer = document.querySelector('.search-container');
  
//     // Update the playing track information
//     playingTrack.innerHTML = `
//       <div class="track-container">
//         <img src="${track.album.images[0].url}">
//         <div class="track-info">
//           <h3>${track.name}</h3>
//           <p>${track.artists.map(artist => artist.name).join(', ')}</p>
//         </div>
//         <audio src="${track.preview_url}" controls></audio>
//         <div class="player-container" data-track-id="${track.id}">
//           <button class="custom-play-btn" data-track-id="${track.id}">
//             <span class="play-icon">&#9658;</span>
//           </button>
//           <div class="custom-elements" data-track-id="${track.id}">
//             <!-- Add the additional elements you want to display -->
//             <p>Additional Elements</p>
//           </div>
//         </div>
//       </div>
//     `;
  
//     // Hide the search container
//     searchContainer.style.display = 'none';
  
//     // Show the playing page
//     playingPage.style.display = 'block';
//   }
  
//   // Function to go back to search
//   function goBackToSearch() {
//     const searchContainer = document.querySelector('.search-container');
//     const playingPage = document.getElementById('playing-page');
  
//     // Show the search container
//     searchContainer.style.display = 'block';
  
//     // Hide the playing page
//     playingPage.style.display = 'none';
//   }
  
//   // Get the track ID from the URL
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   const trackId = urlParams.get('id');
  
//   // Retrieve the track data using the track ID
//   const track = retrieveTrackData(trackId);
  
//   if (track) {
//     // Display the nowPlaying page
//     displayPlayingPage(track);
//   }
  
//   // Add event listener to the back button
//   const backButton = document.getElementById('back-button');
//   backButton.addEventListener('click', goBackToSearch);
  