function showShelters(response) {
  console.log(response);
}

function searchCity(city) {
  const options = {
    method: "GET",
    url: "https://homeless-shelter.p.rapidapi.com/${zipcode}",
    params: { zipcode: `${city}` },
    headers: {
      "X-RapidAPI-Key": "e5d465b382msh9949b5f416a0ce5p128c02jsne4a09d665fb6",
      "X-RapidAPI-Host": "homeless-shelter.p.rapidapi.com",
    },
  };

  try {
    const response = axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  // axios.get(options.url).then(showShelters);
}

function handleSubmit(event) {
  event.preventDefault();

  let city = document.querySelector("#city").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

console.log(axios);
