const apiKey = "9c6308te7d4bf50b79ca37c634bbafo5";

// Format date
function formatDate(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");

  return `${days[date.getDay()]} ${hours}:${minutes}`;
}

// Display date
function displayDate() {
  const dateElement = document.querySelector("#current-date");
  dateElement.textContent = formatDate(new Date());
}

// Display temperature
function displayTemperature(response) {
  const temperature = Math.round(response.data.main.temp);
  document.querySelector(".current-temperature-value").textContent =
    temperature;
}

// Search city
function search(event) {
  event.preventDefault();

  const city = document.querySelector("#search-input").value.trim();
  document.querySelector("#current-city").textContent = city;

  const apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={key}`;
  axios.get(apiUrl).then(displayTemperature);
}

// Run when page loads
window.onload = function () {
  displayDate();
  document.querySelector("#search-form").addEventListener("submit", search);
};
