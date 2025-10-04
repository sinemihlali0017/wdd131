

function calculateWindChill(temperature, windSpeed) {
    
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}


function updateWindChill() {
    const temperature = 18; 
    const windSpeed = 12; 
    const windChillElement = document.getElementById('windchill');
    
    if (windChillElement) {
    
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temperature, windSpeed);
            windChillElement.textContent = `${windChill.toFixed(1)} °C`;
        } else {
            windChillElement.textContent = 'N/A';
        }
    }
}


function updateFooter() {
    
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        lastModifiedElement.textContent = lastModified.toLocaleDateString('en-US', options);
    }
}


window.onload = function() {
    updateWindChill();
    updateFooter();
};

