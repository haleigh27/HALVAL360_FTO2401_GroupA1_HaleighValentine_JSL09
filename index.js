//BACKGROUND IMAGE AND AUTHOR/PHOTOGRAPHER
try {
    //Get photo and author from unsplash
    const res = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature');
    const data = await res.json();
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById('author').textContent = `By: ${data.user.name}`;
} catch (err) {
    // Use a default background image/author
    document.body.style.backgroundImage = `url(
        https://images.unsplash.com/photo-1502790671504-542ad42d5189?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI4Nzg2NDF8&ixlib=rb-4.0.3&q=85
    )`;
    document.getElementById('author').textContent = `By:Mohammad Alizade`;
}

//CRYPTOCURRENCY
//Get the cryptocurrency data for Dogecoin (image, name, price) from the CoinGecko API
try {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/dogecoin');
    if (!res.ok) {
        throw Error('Something went wrong');
    }

    const data = await res.json();
    document.getElementById('crypto-top').innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name}</span>
    `;

    document.getElementById('crypto').innerHTML += `
        <p>🎯: R${data.market_data.current_price.zar}</p>
        <p>👆: R${data.market_data.high_24h.zar}</p>
        <p>👇: R${data.market_data.low_24h.zar}</p>
    `;
} catch (err) {
    console.error(err);
}

// TIME
//Function to display current time
function getCurrentTime() {
    const date = new Date();
    document.getElementById('time').textContent = date.toLocaleTimeString('en-us', { timeStyle: 'short' });
}

//Calls getCurrentTime every second so time is updated
setInterval(getCurrentTime, 1000);

// WEATHER
// Current location
navigator.geolocation.getCurrentPosition(async (position) => {
    // Get weather for current location from OpenWeatherMap
    try {
        const res = await fetch(
            `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
        );
        if (!res.ok) {
            throw Error('Weather data not available');
        }
        const data = await res.json();
        // Weather icon URL
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        //Display weather data in HTML
        document.getElementById('weather').innerHTML = `
            <img src=${iconUrl} />
            <p class=weather-temp>${Math.round(data.main.temp)}º</p>
            <p class="weather-city">${data.name}</p>
        `;
    } catch (err) {
        console.error(err);
    }
});
