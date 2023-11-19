// Shelters Local Database
const shelters = [
  {
    name: "Hope House",
    address: "246 2nd St",
    city: "Jersey City",
    state: "NJ",
    zipCode: "07302",
    hours: "TBA",
    phoneNumber: "(201) 420-1070",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7922322291006!2d-74.0461790239737!3d40.72259007139209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b2ef066f1b%3A0x8c2dc2f03d9fa372!2sHope%20House!5e0!3m2!1sen!2sus!4v1696633581512!5m2!1sen!2sus",
  },
  {
    name: "St. Lucy's Emergency Shelter",
    address: "619 Grove St",
    city: "Jersey City",
    state: "NJ",
    zipCode: "07310",
    hours: "24 hours",
    phoneNumber: "(201) 656-7201",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3225446744864!2d-74.04123599999996!3d40.73292769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25750106ec765%3A0x1bdd10a4d46c27bb!2sSt.%20Lucy&#39;s%20Emergency%20Shelter!5e0!3m2!1sen!2sus!4v1696651784124!5m2!1sen!2sus",
  },
  {
    name: "Circle of Life Shelter",
    address: "55 Reeves Pl",
    city: "Newark",
    state: "NJ",
    zipCode: "07108",
    hours: "TBA",
    phoneNumber: "(862) 763-4859",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.008789757241!2d-74.20951079999999!3d40.717822999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2533035bf1ac3%3A0x41068aa355a7869c!2sCircle%20of%20Life%20Shelter!5e0!3m2!1sen!2sus!4v1696652289388!5m2!1sen!2sus",
  },
  {
    name: "New Community Harmony House",
    address: "278 S Orange Ave # 282",
    city: "Newark",
    state: "NJ",
    zipCode: "07103",
    hours: "Mon–Fri 9AM–6PM",
    phoneNumber: "(973) 623-8555",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.046452152958!2d-74.19841562324649!3d40.73900337138962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2535dbe284bfd%3A0xd12c1a894ae0f475!2sNew%20Community%20Harmony%20House!5e0!3m2!1sen!2sus!4v1698448228344!5m2!1sen!2sus",
  },
  {
    name: "Helping the Homeless Inc",
    address: "269 Mt Prospect Ave",
    city: "Newark",
    state: "NJ",
    zipCode: "07104",
    hours: "TBA",
    phoneNumber: "(973) 732-9200",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0563075452883!2d-74.17576362324562!3d40.76078627138635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2548ae7074d43%3A0x8340fe989350fcb4!2sHelping%20the%20Homeless%20Inc!5e0!3m2!1sen!2sus!4v1698448267457!5m2!1sen!2sus",
  },
  {
    name: "Covenant House New Jersey",
    address: "929 Atlantic Ave",
    city: "Atlantic City",
    state: "NJ",
    zipCode: "08401",
    hours: "24 hours",
    phoneNumber: "(609) 348-4070",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.296554424766!2d-74.17901942324674!3d40.733499671390454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25379ffcd75df%3A0x86f98001af83925b!2sCovenant%20House%20New%20Jersey!5e0!3m2!1sen!2sus!4v1698447749360!5m2!1sen!2sus",
  },
  {
    name: "Atlantic City Rescue Mission",
    address: "2009 Bacharach Blvd",
    city: "Atlantic City",
    state: "NJ",
    zipCode: "08401",
    hours: "24 hours",
    phoneNumber: "(609) 345-5517",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.617512740823!2d-74.4426659232994!3d39.36489747162805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0ee44cefcc917%3A0xd62bee2e0bed2903!2sAtlantic%20City%20Rescue%20Mission!5e0!3m2!1sen!2sus!4v1698448005071!5m2!1sen!2sus",
  },
  {
    name: "Rescue Mission",
    address: "98 Carroll St",
    city: "Trenton",
    state: "NJ",
    zipCode: "08609",
    hours: "Sun–Sat 6AM–4PM",
    phoneNumber: "(609) 695-1436",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.3660883006637!2d-74.75923242326654!3d40.22316187147134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c159b5817ad9ad%3A0x1077cdae4a514cb1!2sRescue%20Mission!5e0!3m2!1sen!2sus!4v1698447938412!5m2!1sen!2sus",
  },
  {
    name: "Amani House",
    address: "518-520 Martin Luther King Jr Blvd",
    city: "Trenton",
    state: "NJ",
    zipCode: "08618",
    hours: "24 hours",
    phoneNumber: "(609) 393-3168",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.098861616217!2d-74.76579832326634!3d40.22910407147039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1583365c18459%3A0x28ffe24e8c1411c9!2sAmani%20House%20-%20Volunteers%20of%20America%20Delaware%20Valley!5e0!3m2!1sen!2sus!4v1698448059863!5m2!1sen!2sus",
  },
  {
    name: "Anchor House",
    address: "482 Centre St",
    city: "Trenton",
    state: "NJ",
    zipCode: "08611",
    hours: "TBA",
    phoneNumber: "(609) 396-8329",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.148245639223!2d-74.75818319999999!3d40.205765199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c159eaa4407971%3A0x93e48d01d6aa0ea1!2sAnchor%20House!5e0!3m2!1sen!2sus!4v1698449546769!5m2!1sen!2sus",
  },
  {
    name: "Princeton Human Services",
    address: "1 Monument Dr",
    city: "Princeton",
    state: "NJ",
    zipCode: "08540",
    hours: "Mon–Fri 9AM–5PM",
    phoneNumber: "(609) 688-2055",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.7340704175585!2d-74.66865202326173!3d40.34824487145071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e692d935c3cd%3A0xc31a4268e148a4a2!2sPrinceton%20Human%20Services!5e0!3m2!1sen!2sus!4v1698448333414!5m2!1sen!2sus",
  },
  {
    name: "HomeFront",
    address: "1880 Princeton Ave",
    city: "Lawrence Township",
    state: "NJ",
    zipCode: "08648",
    hours: "Mon–Fri 9AM–5PM, Sat 9AM–12PM",
    phoneNumber: "(609) 989-9417",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.1899666487525!2d-74.17360912323977!3d40.91158047136417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fdcd33e9ef33%3A0xc1750bfa5e6d189!2sEva&#39;s%20Emergency%20Overnight!5e0!3m2!1sen!2sus!4v1698448444487!5m2!1sen!2sus",
  },
  {
    name: "Eva's Emergency Overnight",
    address: "31 Jackson St",
    city: "Paterson",
    state: "NJ",
    zipCode: "07501",
    hours: "TBA",
    phoneNumber: "(973) 279-1005",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.1899666487525!2d-74.17360912323977!3d40.91158047136417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fdcd33e9ef33%3A0xc1750bfa5e6d189!2sEva&#39;s%20Emergency%20Overnight!5e0!3m2!1sen!2sus!4v1698448510844!5m2!1sen!2sus",
  },
  {
    name: "Hispanic Multi Purpose Services Center",
    address: "911 E 23rd St # C, Paterson, NJ 07513",
    hours: "Mon–Fri 8:30AM–4:30PM",
    phoneNumber: "(973) 684-3320",
    volunteerStatus: "open",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.309112612222!2d-74.15566102323987!3d40.90896777136467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fc3c7e3f47a7%3A0x84a784c853e45294!2sHispanic%20Multi%20Purpose%20Services%20Center!5e0!3m2!1sen!2sus!4v1698448579662!5m2!1sen!2sus",
  },

  // Add more shelter data as needed
];

// Function to display shelter information
function displayAllShelters() {
  const shelterContainer = document.getElementById("shelter-container");

  shelters.forEach((shelter) => {
    const mapDiv = document.createElement("div");
    mapDiv.className = "google-maps col-12 col-md-6 col-lg-12";
    mapDiv.innerHTML = `
    <iframe class="mapImage" src="${shelter.mapImageSrc}" frameborder="0" scrolling="no" allowfullscreen></iframe>
  `;
    shelterContainer.appendChild(mapDiv);
    const shelterDiv = document.createElement("div");
    shelterDiv.className = "shelter-info col-12 col-md-6 col-lg-12";
    shelterDiv.innerHTML = `
    <h5 class="special-color">${shelter.name}</h5>
    <p class="address special-color ">${shelter.address}, ${shelter.city}, ${shelter.state} ${shelter.zipCode}</p>
    <p class="address"><strong>Hours:</strong> ${shelter.hours}</p>
    <p class="phoneNumber"><strong>Phone Number:</strong> ${shelter.phoneNumber}</p>
    <p class="volunteerStatus"><strong>Volunteer Status:</strong> ${shelter.volunteerStatus}</p>
  `;
    shelterContainer.appendChild(shelterDiv);
  });
}

function displaySearchResults(city) {
  const shelterContainer = document.getElementById("shelter-container");
  shelterContainer.innerHTML = "";

  shelterContainer.innerHTML = `
    <div class="row">
      <h3 class="text-center">Showing Shelters in ${city
        .charAt(0)
        .toUpperCase()}${city.slice(1)}, NJ</h3>
      <br />
      <a href="/shelters.html" class="all-shelters-link mb-4">Show All Shelters</a>
    </div>
    `;

  shelters.forEach((shelter) => {
    if (shelter.city.toLowerCase() === city.toLowerCase()) {
      const mapDiv = document.createElement("div");
      mapDiv.className = "google-maps col-12 col-md-6 col-lg-12";
      mapDiv.innerHTML = `
      <iframe class="mapImage" src="${shelter.mapImageSrc}" frameborder="0" scrolling="no" allowfullscreen></iframe>
    `;
      shelterContainer.appendChild(mapDiv);

      const shelterDiv = document.createElement("div");
      shelterDiv.className = "shelter-info col-12 col-md-6 col-lg-12";
      shelterDiv.innerHTML = `
      <h5 class="special-color">${shelter.name}</h5>
      <p class="address special-color ">${shelter.address}, ${shelter.city}, ${shelter.state} ${shelter.zipCode}</p>
      <p class="address"><strong>Hours:</strong> ${shelter.hours}</p>
      <p class="phoneNumber"><strong>Phone Number:</strong> ${shelter.phoneNumber}</p>
      <p class="volunteerStatus"><strong>Volunteer Status:</strong> ${shelter.volunteerStatus}</p>
    `;
      shelterContainer.appendChild(shelterDiv);
    }
  });
}

function searchCity(event) {
  event.preventDefault();

  const city = document.querySelector("#city").value;
  displaySearchResults(city);
}

// Call the function to display shelters when the page loads
window.onload = displayAllShelters;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
