const shelterContainer = document.getElementById("shelter-container");

// Function to display all shelters when page loads
function displayAllShelters() {
  fetch("/javascript/shelters.json")
    .then((response) => response.json())
    .then((shelters) => {
      // Loop through the shelters
      shelters.forEach((shelter) => {
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
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}

// Function to display selected shelters
function displaySearchResults(city) {
  console.log(city);
  shelterContainer.innerHTML = "";

  shelterContainer.innerHTML = `
    <div class="row m-auto">
      <h3 class="text-center">Showing Shelters in ${city
        .charAt(0)
        .toUpperCase()}${city.slice(1)}, NJ</h3>
      <br />
      <a href="/shelters.html" class="all-shelters-link mb-4">Show All Shelters</a>
    </div>
  `;

  fetch("/javascript/shelters.json")
    .then((response) => response.json())
    .then((shelters) => {
      // Loop through the shelters
      shelters.forEach((shelter) => {
        if (shelter.city.toLowerCase() === city.toLowerCase()) {
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
        } else if (city === "") {
          shelterContainer.innerHTML = "";
          displayAllShelters();
        }
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}

// Display all shelters in shelters.jsom
displayAllShelters();

// Display search results
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const city = document.querySelector("#city").value;
  displaySearchResults(city);
});
