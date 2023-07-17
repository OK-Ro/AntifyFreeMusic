function searchSongs(searchInput) {
    const url = `https://spotify117.p.rapidapi.com/search/?keyword=${encodeURIComponent(searchInput)}&type=track`;
  
    const myKeys = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3b6f1870dcmshaa36bb5ebb2e54ep1fd88cjsnb75795376b82',
        'X-RapidAPI-Host': 'spotify117.p.rapidapi.com'
      }
    };
  
    return fetch(url, myKeys)
      .then(response => response.json())
      .then(data => {
        const tracks = data.tracks.items;
        if (tracks.length === 0) {
          return {
            error: 'No results found.'
          };
        }
  
        return {
          tracks: tracks
        };
      })
      .catch(error => {
        console.error(error);
        return {
          error: 'An error occurred while searching for songs.'
        };
      });
  }
  
  export {searchSongs};
  