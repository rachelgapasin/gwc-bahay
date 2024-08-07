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
            Our database does not contain any shelters for this city. (Feel free to help us out by filling out our shelter form that's located on this page!)
          </li>
          <li>This city is not in New Jersey.</li>
        </ul>
      </div>
    `;
    shelterContainer.innerHTML += noResultsMessage;
  } else {
    if (city) {
      const formattedCity = capitalizeFirstLetter(city.trim());

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
    currentPageElement.innerHTML = `
      <label for="page-input">Page 
      <input type="text" id="page-input" value="${page}" min="1" max="${totalPages}">
      of ${totalPages}
      </label>
    `;

    const pageInput = document.getElementById("page-input");
    pageInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();

        // Get the entered page number
        const enteredPage = parseInt(pageInput.value, 10);

        // Display shelters for the entered page
        displaySheltersByPage(enteredPage, city);
      }
    });
  }

  // Display pagination buttons only if there are more than one page
  const pageButtons = document.getElementById("page-buttons");
  if (sheltersData.length > 0) {
    pageButtons.style.display = "block";
  } else {
    pageButtons.style.display = "none";
  }

  // Scroll to the top of the results
  const scrollToElement = document.getElementById("search-form");

  if (scrollToElement) {
    scrollToElement.scrollIntoView({ behavior: "smooth" });
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

function searchCity(city) {
  currentPage = 1; // Reset current page when performing a new search

  fetch("/javascript/shelters.json")
    .then((response) => response.json())
    .then((allShelters) => {
      // Filter shelters based on the input city
      const filteredShelters = allShelters.filter((shelter) =>
        shelter.city.toLowerCase().includes(city.trim().toLowerCase())
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
  searchCity(city);
});
