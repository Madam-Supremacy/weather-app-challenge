const apiKey = "9c6308te7d4bf50b79ca37c634bbafo5";
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#search-form");
  const input = document.querySelector("#search-input");
  const cityElement = document.querySelector("#current-city");
  const tempElement = document.querySelector(".current-temperature-value");
  const dateElement = document.querySelector("#current-date");

  // Show current date and time
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function formatDate(date) {
    let day = days[date.getDay()];
    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day} ${hours}:${minutes}`;
  }

  dateElement.textContent = formatDate(new Date());

  // Handle city search
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const city = input.value.trim();
    cityElement.textContent = city;

    // Call OpenWeatherMap API
    const apiUrl = `https://api.shecodes.io/weather/v1/current?lon={lon}&lat={lat}&key={key}`;

    axios
      .get(apiUrl)
      .then(function (response) {
        const temp = Math.round(response.data.main.temp);
        tempElement.textContent = temp;
      })
      .catch(function (error) {
        console.error(error);
        alert(
          `Sorry, we can't get the weather for "${city}". Please try again.`
        );
      });
  });
});
