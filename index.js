//Get photo and author from unsplash
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        document.body.style.backgroundImage = `url(${data.urls.full})`;
        document.getElementById('author').textContent = `By: ${data.user.name}`;
    })
    .catch((err) => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1502790671504-542ad42d5189?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI4Nzg2NDF8&ixlib=rb-4.0.3&q=85)`;
        document.getElementById('author').textContent = `By:Mohammad Alizade`;
    });

//Get the cryptocurrency data for Dogecoin (image, name, price) from the CoinGecko API
fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then((res) => {
        if (!res.ok) {
            throw Error('Something went wrong');
        }
        return res.json();
    })
    .then((data) => {
        document.getElementById('crypto-top').innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `;
        document.getElementById('crypto').innerHTML += `
        <p>🎯: R${data.market_data.current_price.zar}</p>
        <p>👆: R${data.market_data.high_24h.zar}</p>
        <p>👇: R${data.market_data.low_24h.zar}</p>
        `;
    })
    .catch((err) => console.error(err));
