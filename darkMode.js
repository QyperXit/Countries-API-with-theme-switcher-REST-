// darkMode.js
export function toggleDarkMode() {
  const body = document.body;
  const darkModeButton = document.querySelector(".darkMode");

  darkModeButton.addEventListener("click", () => {
    const isDarkModeEnabled = body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkModeEnabled);
    dispatchDarkModeEvent(isDarkModeEnabled);
  });
}

function dispatchDarkModeEvent(isDarkModeEnabled) {
  const darkModeEvent = new CustomEvent("darkModeChanged", {
    detail: { isDarkModeEnabled },
  });
  window.dispatchEvent(darkModeEvent);
}
