import { searchSongs } from '../API/fetch.js';

function handleSearch() {
  const searchButton = document.getElementById('search-btn');
  const searchContainer = document.querySelector('.search-container');
  const resultsContainer = document.querySelector('.results-container'); // Get the results container

  searchButton.addEventListener('click', async function() {
    // Get the search input value
    const searchInput = document.getElementById('search-input').value;

    // Call the searchSongs function from apiPage.js
    const result = await searchSongs(searchInput);

    displaySearchResults(result);
  });
  
  function displaySearchResults(result) {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    if (result.error) {
      resultsList.innerHTML = result.error;
    } else {
      const tracks = result.tracks;

      // Iterate over each track
      tracks.forEach(track => {
        const li = document.createElement('li');

        // Create HTML markup for each track including track information and audio player
        li.innerHTML = `
          <div class="tracks-container clickable" data-track-id="${track.id}">
            <img src="${track.album.images[0].url}" class="track-image">
            <div class="track-info">
              <h3>${track.name}</h3>
              <p>${track.artists.map(artist => artist.name).join(', ')}</p>
            </div>
          </div>
        `;

        resultsList.appendChild(li);

        // event listener to track container
        li.addEventListener('click', function() {
          displayPlayingPage(track);
        });
      });
    }

    resultsContainer.style.display = 'block'; // Set the results container to display block
    document.getElementById('search-results').style.display = 'block';
    document.querySelector('.search-container').style.display = 'block';
  }

}

handleSearch();
