// Region Filter Logic
const customDropdown = document.getElementById("regionFilter");
const selectedOption = customDropdown.querySelector(".selected-option");
const optionsContainer = customDropdown.querySelector(".options");
const options = customDropdown.querySelectorAll(".options li");

selectedOption.addEventListener("click", function () {
  optionsContainer.style.display =
    optionsContainer.style.display === "block" ? "none" : "block";
});

options.forEach((option) => {
  option.addEventListener("click", function () {
    selectedOption.textContent = option.textContent;
    optionsContainer.style.display = "none";
    const selectedValue = option.getAttribute("data-value");

    // Filter cards based on the selected region
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const region = card
        .querySelector(".region span")
        .textContent.toLowerCase();
      if (selectedValue === "all" || region === selectedValue) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

document.addEventListener("click", function (event) {
  if (!customDropdown.contains(event.target)) {
    optionsContainer.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const countriesToFetch = [];

  const cardGrid = document.querySelector(".card-grid");
  const searchInput = document.querySelector(".input");
  const regionDropdown = document.getElementById("regionFilter");

  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((countryData) => {
        createCard(countryData);
      });

      searchInput.addEventListener("keyup", handleSearch);
      regionDropdown.addEventListener("change", handleRegionFilter);
    });

  function createCard(countryData) {
    const card = document.createElement("div");
    card.classList.add("card");

    const countryBox = document.createElement("div");
    countryBox.classList.add("country-box");

    const img = document.createElement("img");
    img.src = countryData.flags.svg || countryData.flags.png || "";
    img.alt = `${countryData.name.common}-flag`;

    const countryDetails = document.createElement("div");
    countryDetails.classList.add("country-details");

    const nation = document.createElement("div");
    nation.classList.add("nation");

    const h1 = document.createElement("h1");
    h1.textContent = countryData.name.common;

    const population = document.createElement("div");
    population.classList.add("population");
    const formattedPopulation = new Intl.NumberFormat().format(
      countryData.population
    );
    population.innerHTML = `Population: <span>${formattedPopulation}</span>`;

    const region = document.createElement("div");
    region.classList.add("region");
    region.innerHTML = `Region: <span>${countryData.region}</span>`;

    const capital = document.createElement("div");
    capital.classList.add("capital");
    capital.innerHTML = `Capital: <span>${countryData.capital}</span>`;

    nation.appendChild(h1);
    nation.appendChild(population);
    nation.appendChild(region);
    nation.appendChild(capital);

    countryDetails.appendChild(nation);

    countryBox.appendChild(img);
    countryBox.appendChild(countryDetails);

    card.appendChild(countryBox);

    cardGrid.appendChild(card);
  }

  // let cardArray = document.querySelectorAll(".card");

  // cardArray.forEach((item) => {
  //   item.addEventListener("click", (e) => {
  //     console.log(e.target);
  //   });
  // });

  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const countryName = card
        .querySelector(".nation h1")
        .textContent.toLowerCase();

      if (countryName.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function handleRegionFilter() {
    const selectedRegion =
      regionDropdown.querySelector(".selected-option").textContent;
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const countryRegion = card.querySelector(".region span").textContent;

      if (
        selectedRegion === "Filter by Region" ||
        countryRegion === selectedRegion
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});

// import { toggleDarkMode } from "./darkMode.js";

document.addEventListener("DOMContentLoaded", () => {
  toggleDarkMode();
  // ... other code
});

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const darkModeButton = document.querySelector(".darkMode");

  // Check localStorage for dark mode preference
  const isDarkModeEnabled = localStorage.getItem("darkMode") === "true";

  // Apply dark mode based on localStorage preference
  body.classList.toggle("dark-mode", isDarkModeEnabled);

  // Update dark mode setting on button click
  darkModeButton.addEventListener("click", function () {
    // Toggle dark mode class on body
    body.classList.toggle("dark-mode");

    // Update localStorage with the current dark mode setting
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
  });
});

const logoDiv = document.querySelector(".logo");
logoDiv.addEventListener("click", () => {
  window.location.href = "/CountriesRest-Api/index.html";
});

// document.addEventListener("DOMContentLoaded", function () {
//   const cardGrid = document.querySelector(".card-grid");

//   cardGrid.addEventListener("click", function (event) {
//     const clickedCard = event.target.closest(".card");
//     if (clickedCard) {
//       console.log(clickedCard.querySelector(".nation h1").textContent);
//     }
//   });
// });

// const cardGrid = document.querySelector(".card-grid");

// // Fetch country data once for all countries
// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => {
//     // Create cards for each country
//     console.log(data);
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         const europeanCountries = data.filter(
//           (country) => country.region === "Europe"
//         );
//         europeanCountries.forEach((country) => {
//           console.log(`Country: ${country.name.common}`);
//           console.log(`Capital: ${country.capital}`);
//           console.log(`Flag: ${country.flags.svg}`);
//           console.log(`Population: ${country.population}`);
//           console.log("---"); // Separator between countries
//         });
//       });

//     // const germany = data.find((country) => country.name.common === "Germany");
//     // console.log(america);
//   });
