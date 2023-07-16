// // Function to search songs
// function searchSongs(searchInput) {
//   const url = `https://spotify117.p.rapidapi.com/search/?keyword=${encodeURIComponent(
//     searchInput
//   )}&type=track`;

//   const myKeys = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '3b6f1870dcmshaa36bb5ebb2e54ep1fd88cjsnb75795376b82',
//       'X-RapidAPI-Host': 'spotify117.p.rapidapi.com'
//     }
//   };

//   return fetch(url, myKeys)
//     .then(response => response.json())
//     .then(data => {
//       const tracks = data.tracks.items;

//       // Check if there are no tracks found
//       if (tracks.length === 0) {
//         return {
//           error: 'No results found.'
//         };
//       }

//       return {
//         tracks: tracks
//       };
//     })
//     .catch(error => {
//       console.error(error);
//       return {
//         error: 'An error occurred while searching for songs.'
//       };
//     });
// }

// function handleSearch() {
//   const searchButton = document.getElementById('search-btn');
//   const searchContainer = document.querySelector('.search-container');

//   searchButton.addEventListener('click', async function() {
//     // Get the search input value
//     const searchInput = document.getElementById('search-input').value;

//     // Call the searchSongs function
//     const result = await searchSongs(searchInput);

//     const resultsList = document.getElementById('results-list');
//     resultsList.innerHTML = '';

//     if (result.error) {
//       resultsList.innerHTML = result.error;
//     } else {
//       const tracks = result.tracks;

//       // Iterate over each track
//       tracks.forEach(track => {
//         const li = document.createElement('li');

//         // Create HTML markup for each track including track information and audio player
//         li.innerHTML = `
//           <div class="tracks-container clickable" data-track-id="${track.id}">
//             <img src="${track.album.images[0].url}" class="track-image">
//             <div class="track-info">
//               <h3>${track.name}</h3>
//               <p>${track.artists.map(artist => artist.name).join(', ')}</p>
//             </div>
//           </div>
//         `;

//         resultsList.appendChild(li);

//         // event listener to track container
//         li.addEventListener('click', function() {
//           displayPlayingPage(track);
//         });
//       });
//     }

//     document.getElementById('search-results').style.display = 'block';
//     searchContainer.style.display = 'block';
//   });
// }

// handleSearch();

// const backButton = document.getElementById('back-button');
// backButton.addEventListener('click', navigateToSearch);
