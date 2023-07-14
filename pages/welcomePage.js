function initializeWelcomePage() {
  const welcomeContainer = document.getElementById('welcome-container');
  const loadingContainer = document.getElementById('loading-container');
  const searchContainer = document.querySelector('.search-container');
  // Create the welcome header
  const welcomeHeader = document.createElement('div');
  welcomeHeader.classList.add('welcomeHeader');
  const welcomeHeading = document.createElement('h1');
  welcomeHeading.classList.add('fade-in');
  setTimeout(() => {
    welcomeHeading.textContent = 'EASY WAY TO ENJOY YOUR FAVOURITE MUSIC';
  }, 2000);

  welcomeHeader.appendChild(welcomeHeading);

  // Create the small header
  const smallHeader = document.createElement('div');
  const smallHeading = document.createElement('h2');
  smallHeader.classList.add('smallHeader');
  smallHeading.textContent = 'SEARCH PLAY FOR FREE';

  smallHeader.appendChild(smallHeading);

  // Create the phone image container
  const phoneImgContainer = document.createElement('div');
  phoneImgContainer.classList.add('phoneImgContainer');

  // create a div to hold search and search button
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

  // Create the start button container
  const startButtonContainer = document.createElement('div');
  startButtonContainer.classList.add('btn');
  const startButton = document.createElement('button');
  startButton.id = 'start-button';
  setTimeout(() => {
    logoImg.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UNjyD8lmAy-3Sg5Ode-qLW192ELE998TIg&usqp=CAU';
    logoImg.alt = 'Musically Logo';
    logoImg.width = '200px';
  }, );
  const logoImg = document.createElement('img');

  const parrotDiv = document.createElement('div');
  parrotDiv.classList.add('parrot');
  startButton.appendChild(logoImg);
  startButton.appendChild(parrotDiv);
  startButtonContainer.appendChild(startButton);

  // Append the elements to the phone image container
  itemDiv.appendChild(searchSongs);
  itemDiv.appendChild(searchButton);
  phoneImgContainer.appendChild(searchResults);

  // Append the elements to the welcome container
  welcomeContainer.appendChild(welcomeHeader);
  welcomeContainer.appendChild(smallHeader);
  welcomeContainer.appendChild(phoneImgContainer);
  welcomeContainer.appendChild(startButtonContainer);

  // Add an event listener to the start button
  startButton.addEventListener('click', function () {
    welcomeContainer.style.display = 'none';
    loadingContainer.style.display = 'block';

    // Simulate loading time
    setTimeout(function () {
      loadingContainer.style.display = 'none';
      searchContainer.style.display = 'block';
    }, 5000);
  });
  
  // Add an event listener to the logo link
  const logoLink = document.getElementById('logo-link');
  logoLink.addEventListener('click', function (event) {
    event.preventDefault();
    searchContainer.style.display = 'none';
    welcomeContainer.style.display = 'block';
  });
}

function delayedInitializeWelcomePage() {
  setTimeout(initializeWelcomePage, 2000);
}

document.addEventListener('DOMContentLoaded', delayedInitializeWelcomePage);
