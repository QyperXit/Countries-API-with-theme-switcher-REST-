console.log("hello");
// import "./counter";
import { toggleDarkMode } from "./darkMode.js"; // Adjust path if needed
import "./scss/style.scss";

// document.addEventListener("DOMContentLoaded", function () {
//   const cardGrid = document.querySelector(".card-grid");

//   cardGrid.addEventListener("click", function (event) {
//     const clickedCard = event.target.closest(".card");
//     if (clickedCard) {
//       console.log(clickedCard.querySelector(".nation h1").textContent);
//         window.location.href = `/cards.html`;
//     }
//   });
// });

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
//         console.log(data[0]);
//       });

//     // const germany = data.find((country) => country.name.common === "Germany");
//     // console.log(america);
//   });

document.addEventListener("DOMContentLoaded", function () {
  const cardGrid = document.querySelector(".card-grid");

  cardGrid.addEventListener("click", function (event) {
    const clickedCard = event.target.closest(".card");
    if (clickedCard) {
      const countryName = clickedCard.querySelector(".nation h1").textContent;

      // Save the country name to localStorage
      localStorage.setItem("selectedCountry", countryName);

      // Navigate to cards.html
      window.location.href = "/cards.html";
    }
  });
});

// Fetch country data once for all countries
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    // Save country data to localStorage for later use
    localStorage.setItem("allCountries", JSON.stringify(data));
  });

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve selected country name from localStorage
  const selectedCountryName = localStorage.getItem("selectedCountry");

  if (selectedCountryName) {
    // Retrieve all countries data from localStorage
    const allCountries = JSON.parse(localStorage.getItem("allCountries"));

    // Find the matching country data
    const selectedCountry = allCountries.find(
      (country) => country.name.common === selectedCountryName
    );

    if (selectedCountry) {
      // Populate HTML with the details of the selected country
      populateCountryDetails(selectedCountry);
    } else {
      console.error(`Country data not found for: ${selectedCountryName}`);
    }
  }
});

function populateCountryDetails(countryData) {
  const flagsContainer = document.querySelector(".description_IMG");

  if (countryData.flags) {
    flagsContainer.src = countryData.flags.svg || countryData.flags.png || "";
    flagsContainer.alt = countryData.flags.alt || "";
  }

  // Assuming you have elements in your HTML with specific IDs to display the details
  document.querySelector(
    ".nation_name"
  ).innerHTML = `${countryData.name.common}`;

  //////

  const countryDataName = countryData.name.nativeName;

  // Get the first (and only) object inside countryDataName
  const firstKey = Object.keys(countryDataName)[0];
  const firstValue = countryDataName[firstKey].common;

  //   console.log(`Native Name: ${firstValue}`);
  document.querySelector(
    ".nativeName"
  ).innerHTML = `<strong>Native Name:</strong> ${firstValue}`;

  ////

  document.querySelector(
    ".population"
  ).innerHTML = `<strong>Population:</strong> ${new Intl.NumberFormat().format(
    countryData.population
  )}`;
  document.querySelector(
    ".region"
  ).innerHTML = `<strong>Region:</strong> ${countryData.region}`;
  document.querySelector(
    ".subRegion"
  ).innerHTML = `<strong>Sub Region:</strong> ${countryData.subregion}`;

  document.querySelector(
    ".capital"
  ).innerHTML = `<strong>Capital:</strong> ${countryData.capital}`;

  document.querySelector(
    ".topLevelDomain"
  ).innerHTML = `<strong>Top Level Domain:</strong> ${countryData.cca2}`;

  for (const currencyCode in countryData.currencies) {
    const currency = countryData.currencies[currencyCode];
    // console.log(`Currency: ${currencyCode}`);
    // console.log(`  Name: ${currency.name}`);
    // console.log(`  Symbol: ${currency.symbol}`);
    // ... access other properties as needed
    document.querySelector(
      ".currencies"
    ).innerHTML = `<strong>Currencies:</strong> ${currency.name}`;
  }

  document.querySelector(
    ".languages"
  ).innerHTML = `<strong>Languages:</strong> ${Object.values(
    countryData.languages
  ).join(", ")}`;

  /////
  const bordersContainer = document.querySelector(".country-border div");
  bordersContainer.innerHTML = "";

  // Limit the number of buttons to 3
  let buttonCount = 0;

  countryData.borders.forEach((borderCountryCode) => {
    if (buttonCount < 4) {
      const button = document.createElement("button");
      button.textContent = borderCountryCode;
      button.addEventListener("click", () => {
        // Handle the button click, you can navigate to the details page or do other actions
        console.log(`Clicked on border country: ${borderCountryCode}`);
      });

      // Append the button to the borders container
      bordersContainer.appendChild(button);

      buttonCount++;
    } else {
      return; // Break the loop once 3 buttons are created
    }
  });
}

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

// document.addEventListener("DOMContentLoaded", () => {
//   let darkModeButton = document.querySelector(".darkMode");
//   if (darkModeButton) {
//     darkModeButton.addEventListener("click", () => {
//       toggleDarkMode();
//     });
//   }

//   // ... other code
// });
