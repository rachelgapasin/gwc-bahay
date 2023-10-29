const soupKitchens = [
  {
    name: "The Sharing Place Food Pantry",
    address: "448 Hoboken Ave, Jersey City, NJ 07306",
    hours: "TBA",
    phoneNumber: "(201) 963-5518",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2362153823465!2d-74.06098085973268!3d40.73482753633713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c257373f825555%3A0x690d25de78392910!2sThe%20Sharing%20Place%20Food%20Pantry!5e0!3m2!1sen!2sus!4v1696699071369!5m2!1sen!2sus",
    websiteUrl: "https://www.thesharingplacenj.org",
  },
  {
    name: "Let's Celebrate",
    address: "48 Fairview Ave, Jersey City, NJ 07304",
    hours: "Mon-Fri 9AM-5PM",
    phoneNumber: "(201) 433-5438",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7865041228183!2d-74.07229770398253!3d40.72271615769014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250d150cea1b7%3A0x96dd94f90fe4f7e!2sLet&#39;s%20Celebrate!5e0!3m2!1sen!2sus!4v1696704962673!5m2!1sen!2sus",
    websiteUrl: "",
  },
  {
    name: "Community FoodBank of Newark",
    address: "31 Evans Terminal Rd #1, Hillside, NJ 07205",
    hours: "Mon-Fri 8AM-4PM",
    phoneNumber: "(908) 355-3663",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96798.87573715982!2d-74.29493195409249!3d40.69677140706551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c252cde06f80ef%3A0xa9f969c7e3519b6d!2sCommunity%20FoodBank%20of%20New%20Jersey!5e0!3m2!1sen!2sus!4v1698545934575!5m2!1sen!2sus",
    websiteUrl: "http://www.cfbnj.org",
  },
  {
    name: "Saint John's Soup Kitchen",
    address: "871 McCarter Hwy, Newark, NJ 07102",
    hours: "Tue-Sat 7:45AM-2PM",
    phoneNumber: "(201) 420-1070",
    mapImageSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0829793299285!2d-74.16599370000002!3d40.7381996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c253812dc21007%3A0x47239b9ce2ac98b3!2sSaint%20John&#39;s%20Soup%20Kitchen!5e0!3m2!1sen!2sus!4v1698546053523!5m2!1sen!2sus",
    websiteUrl: "https://www.njsk.org",
  },
];

function displaySoupKitchens() {
  const soupKitchenContainer = document.getElementById(
    "soup-kitchen-container"
  );

  soupKitchens.forEach((soupKitchen) => {
    const url = soupKitchen.websiteUrl;
    const simplifiedWebsiteUrl = url.split("www.")[1];

    const soupKitchenDiv = document.createElement("div");
    soupKitchenDiv.className = "soup-kitchen col-sm-6";
    soupKitchenDiv.innerHTML = `
      <iframe class="mapImage" src="${
        soupKitchen.mapImageSrc
      }" frameborder="0" scrolling="no" allowfullscreen></iframe>
      <h5 class="special-color">${soupKitchen.name}</h5>
      <p class="address special-color ">${soupKitchen.address}</p>
      <p class="address"><strong>Hours:</strong> ${soupKitchen.hours}</p>
      <p class="phoneNumber"><strong>Phone Number:</strong> ${
        soupKitchen.phoneNumber
      }</p>
      ${
        soupKitchen.websiteUrl
          ? `<p>
        <strong>Website:</strong>
        <a href="${soupKitchen.websiteUrl}" target="_blank">${simplifiedWebsiteUrl}</a>
      </p>`
          : ""
      }
    `;
    soupKitchenContainer.appendChild(soupKitchenDiv);
  });
}

window.onload = displaySoupKitchens;
