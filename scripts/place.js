
// ============================
// Footer: current year & last modified
// ============================
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// ============================
// Static weather data
// ============================
const temperature = 10; // °C
const windSpeed = 5;    // km/h

document.getElementById('temperature').textContent = temperature;
document.getElementById('wind-speed').textContent = windSpeed;

// ============================
// Wind Chill Calculation (metric units)
// Only calculate if temp <= 10°C and windSpeed > 4.8 km/h
// ============================
function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
}

document.getElementById('windchill').textContent = windChill;
