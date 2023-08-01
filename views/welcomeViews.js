// Create the welcome header
export const welcomeHeader = () => {
  const welcomeHeader = document.createElement('div');
  welcomeHeader.classList.add('welcomeHeader');

  const welcomeHeading = document.createElement('h1');
  welcomeHeading.classList.add('fade-in');
  welcomeHeading.textContent = 'EASY WAY TO ENJOY YOUR FAVOURITE MUSIC';

  welcomeHeader.appendChild(welcomeHeading);

  return welcomeHeader;
};

// Create the small header
export const smallHeader = () => {
  const smallHeader = document.createElement('div');
  smallHeader.classList.add('smallHeader');

  const smallHeading = document.createElement('h2');
  smallHeading.textContent = 'SEARCH PLAY FOR FREE';

  smallHeader.appendChild(smallHeading);

  return smallHeader;
};

// Create the phone image container
export const phoneImgContainer = () => {
  const phoneImgContainer = document.createElement('div');
  phoneImgContainer.classList.add('phoneImgContainer');

  // Create a div to hold search and search button
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('phoneSrchComponents');
  phoneImgContainer.appendChild(itemDiv);

  // Create the search songs element
  const searchSongs = document.createElement('div');
  searchSongs.classList.add('srchCont');

  const searchSongsHeading = document.createElement('h3');
  searchSongsHeading.textContent = 'search songs';

  searchSongs.appendChild(searchSongsHeading);

  // Create the search button element
  const searchButton = document.createElement('div');
  searchButton.classList.add('srchBtn');

  const searchButtonHeading = document.createElement('h3');
  searchButtonHeading.textContent = 'search';

  searchButton.appendChild(searchButtonHeading);

  // Create the search results element
  const searchResults = document.createElement('div');
  searchResults.classList.add('resultsCont');

  const searchResultsHeading = document.createElement('h3');
  searchResultsHeading.textContent = 'Search Results';

  searchResults.appendChild(searchResultsHeading);

  // Append elements to the phone image container
  itemDiv.appendChild(searchSongs);
  itemDiv.appendChild(searchButton);
  phoneImgContainer.appendChild(searchResults);

  return phoneImgContainer;
};

// Create the start button container
export const startButtonContainer = () => {
  const startButtonContainer = document.createElement('div');
  startButtonContainer.classList.add('btn');

  const startButton = document.createElement('button');
  startButton.id = 'start-button';

  const logoImg = document.createElement('img');
  logoImg.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UNjyD8lmAy-3Sg5Ode-qLW192ELE998TIg&usqp=CAU';
  logoImg.alt = 'Musically Logo';
  logoImg.width = '200px';

  const parrotDiv = document.createElement('div');
  parrotDiv.classList.add('parrot');

  startButton.appendChild(logoImg);
  startButton.appendChild(parrotDiv);
  startButtonContainer.appendChild(startButton);

  return startButtonContainer;
};


