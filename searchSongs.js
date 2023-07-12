// function to search songs
function searchSongs() {
    const searchButton = document.getElementById('search-btn');
  
    // Add event listener to the search button
    searchButton.addEventListener('click', function() {
      // Get the search input value
      const searchInput = document.getElementById('search-input').value;
  
      const url = `https://spotify117.p.rapidapi.com/search/?keyword=${encodeURIComponent(searchInput)}&type=track`;
  
      const myKeys = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '3b6f1870dcmshaa36bb5ebb2e54ep1fd88cjsnb75795376b82',
          'X-RapidAPI-Host': 'spotify117.p.rapidapi.com'
        }
      };
  
      fetch(url, myKeys)
        .then(response => response.json())
        .then(data => {
          const resultsList = document.getElementById('results-list');
          resultsList.innerHTML = '';
  
          // Extract the tracks from the response data
          const tracks = data.tracks.items;
  
          // Check if there are no tracks found
          if (tracks.length === 0) {
            resultsList.innerHTML = 'No results found.';
            return;
          }
  
          // Iterate over each track
          tracks.forEach(track => {
            const li = document.createElement('li');
  
            // Create HTML markup for each track including track information and audio player
            li.innerHTML = `
              <img src="${track.album.images[0].url}" >
              <div class="track-info">
                <h3>${track.name}</h3>
                <p>${track.artists.map(artist => artist.name).join(', ')}</p>
                <audio src="${track.preview_url}" controls></audio>
              </div>
            `;
  
            resultsList.appendChild(li);
          });
  
          document.getElementById('search-results').style.display = 'block';
        })
        .catch(error => console.error(error));
    });
  }
  
  
  searchSongs();
  