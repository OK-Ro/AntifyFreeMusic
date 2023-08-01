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
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('No results found.');
        }
        throw new Error('An error occurred while searching for songs.');
      }
      return response.json();
    })
    .then(data => {
      // Check if the 'tracks' property is present in the response
      if (!data.tracks || !data.tracks.items || data.tracks.items.length === 0) {
        return {
          error: 'No results found.'
        };
      }

      const tracks = data.tracks.items;
      return {
        tracks: tracks
      };
    })
    .catch(error => {
      console.error(error.message);
      return {
        error: error.message
      };
    });
}

export { searchSongs };
