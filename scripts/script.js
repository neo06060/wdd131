// Set the current year and last modified date
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Wind Chill Calculation (static values)
const temperature = 10; // in Celsius
const windSpeed = 5;    // in km/h

function calculateWindChill(temp, speed) {
    // Check if conditions are viable for calculating wind chill
    if (temp <= 10 && speed > 4.8) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        ).toFixed(2);
    } else {
        return "N/A";
    }
}

// Display the wind chill value when the page loads
document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed);
