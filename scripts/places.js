const lastModified = document.getElementById("lastModified");

const today = new Date();

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "full"
    }
).format(today)}</span>`;

const windChill = document.getElementById("windChill")
const temperature = document.getElementById("temperature")

document.querySelector("#temperature").textContent = "10°C"
document.querySelector("#wind").textContent = "4.7km/h"

function calculateWindChill(temp, windSpeed) {
    windchill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
    return windchill;
}

const windChillValue = calculateWindChill(10, 4.7)
document.querySelector("#windChill").textContent = `${windChillValue.toFixed(2)}°C`