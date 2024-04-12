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

//Pull down the cryptocurrency data for dogecoin (image and name) from the CoinGecko API
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
    })
    .catch((err) => console.error(err));
