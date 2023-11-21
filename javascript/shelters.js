const shelterContainer = document.getElementById("shelter-container");
const sheltersPerPage = 5;

let currentPage = 1;
let sheltersData = [];

function capitalizeFirstLetter(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function displaySheltersByPage(page, city) {
  shelterContainer.innerHTML = "";

  const startIndex = (page - 1) * sheltersPerPage;
  const endIndex = startIndex + sheltersPerPage;
  const sheltersToDisplay = sheltersData.slice(startIndex, endIndex);

  if (city && sheltersToDisplay.length === 0) {
    const formattedCity = capitalizeFirstLetter(city);

    // No results for the searched city
    const noResultsMessage = `
      <a href="/shelters.html" class="all-shelters-link mb-4">Show All Shelters</a>
      <div id="no-results">
        <div class="text-center text-lg-start">
          <strong>Sorry, we couldn't find any results for
          <span class="special-color">${formattedCity}</span>.</strong>
        </div>
        <div class="text-center text-lg-start">Reasons for getting no results:</div>
        <ul class="m-auto m-lg-0">
          <li>You mispelled the city's name.</li>
          <li>
            Our database does not contain any shelters for this city.
          </li>
          <li>This city is not in New Jersey.</li>
        </ul>
      </div>
    `;
    shelterContainer.innerHTML += noResultsMessage;
  } else {
    if (city) {
      const formattedCity = capitalizeFirstLetter(city);

      const numberOfResults = sheltersData.length;
      const resultsText = numberOfResults === 1 ? "result" : "results";

      // Display additional information for the searched city
      const cityInfo = `
      <div class="row m-auto">
        <h3 class="text-center">Showing Shelters in ${formattedCity}, NJ</h3>
        <p class="text-center">${sheltersData.length} ${resultsText}</p>
        <br />
        <a href="/shelters.html" class="all-shelters-link mb-4">Show All Shelters</a>
      </div>
    `;
      shelterContainer.innerHTML += cityInfo;
    }

    sheltersToDisplay.forEach((shelter) => {
      const newInnerHTML = `
        <div class="google-maps col-12 col-md-6 col-lg-12">
          <iframe class="mapImage" src="${shelter.mapImageSrc}" frameborder="0" scrolling="no" allowfullscreen></iframe>
        </div>
        <div class="shelter-info col-12 col-md-6 col-lg-12">
          <h5 class="special-color">${shelter.name}</h5>
          <p class="address special-color">${shelter.address}, ${shelter.city}, ${shelter.state} ${shelter.zipCode}</p>
          <p class="address"><strong>Hours:</strong> ${shelter.hours}</p>
          <p class="phoneNumber"><strong>Phone Number:</strong> ${shelter.phoneNumber}</p>
          <p class="volunteerStatus"><strong>Volunteer Status:</strong> ${shelter.volunteerStatus}</p>
        </div>
      `;
      shelterContainer.innerHTML += newInnerHTML;
    });

    // Display current page number and total pages
    const totalPages = Math.ceil(sheltersData.length / sheltersPerPage);
    const currentPageElement = document.getElementById("current-page");
    currentPageElement.textContent = `Page ${page} of ${totalPages}`;
  }

  // Display pagination buttons only if there are more than one page
  const pageButtons = document.getElementById("page-buttons");
  if (sheltersData.length > 0) {
    pageButtons.style.display = "block";
  } else {
    pageButtons.style.display = "none";
  }
}

function handlePaginationNavigation() {
  const nextPageBtn = document.getElementById("next-page");
  const prevPageBtn = document.getElementById("prev-page");

  nextPageBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(sheltersData.length / sheltersPerPage)) {
      currentPage++;
      displaySheltersByPage(currentPage);
    }
  });

  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displaySheltersByPage(currentPage);
    }
  });
}

function fetchAllShelters() {
  fetch("/javascript/shelters.json")
    .then((response) => response.json())
    .then((shelters) => {
      sheltersData = shelters;
      displaySheltersByPage(currentPage);
      handlePaginationNavigation();
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}

function displaySearchResults(city) {
  currentPage = 1; // Reset current page when performing a new search

  fetch("/javascript/shelters.json")
    .then((response) => response.json())
    .then((allShelters) => {
      // Filter shelters based on the input city
      const filteredShelters = allShelters.filter((shelter) =>
        shelter.city.toLowerCase().includes(city.toLowerCase())
      );

      // Update sheltersData with the filtered results
      sheltersData = filteredShelters;

      // Display shelters for the current page
      displaySheltersByPage(currentPage, city);
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}

window.addEventListener("load", fetchAllShelters);

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = document.querySelector("#city").value;
  displaySearchResults(city);
});
