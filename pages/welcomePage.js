import {
  welcomeHeader,
  smallHeader,
  phoneImgContainer,
  startButtonContainer,
} from '../views/welcomeViews.js';

function initializeWelcomePage() {
  const welcomeContainer = document.getElementById('welcome-container');
  const loadingContainer = document.getElementById('loading-container');
  const searchContainer = document.querySelector('.search-container');

  // Create and append the elements to the welcome container
welcomeContainer.appendChild(welcomeHeader());
welcomeContainer.appendChild(smallHeader());
welcomeContainer.appendChild(phoneImgContainer());
welcomeContainer.appendChild(startButtonContainer());


  const startButton = document.getElementById('start-button');
  const logoLink = document.getElementById('logo-link');

  // Add an event listener to the start button
  startButton.addEventListener('click', function () {
    welcomeContainer.remove();
    loadingContainer.style.display = 'block';

    // Simulate loading time
    setTimeout(function () {
      loadingContainer.remove();
      searchContainer.style.display = 'block';
    }, 5000);
  });

  //  this takes you back to the welcome page
  logoLink.addEventListener('click', function (event) {
    event.preventDefault();
    searchContainer.remove();
    welcomeContainer.style.display = 'block';
  });
}

function delayedInitializeWelcomePage() {
  setTimeout(initializeWelcomePage, 2000);
}

document.addEventListener('DOMContentLoaded', delayedInitializeWelcomePage);
