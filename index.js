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
