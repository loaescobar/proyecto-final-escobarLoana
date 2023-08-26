
const packages = [
    { 
        id: 1,
        name: "Salta",
        price: 50000,
        image: "imagenes/salta1.jpg"
    },
    { 
        id: 1,
        name: "Jujuy",
        price: 120000,
        image: "imagenes/jujuy1.jpg"
    },
    { 
        id: 1,
        name: "Cordoba",
        price: 40000,
        image: "imagenes/cordoba1.jpg"
    },
    { 
        id: 1,
        name: "Mendoza",
        price: 60000,
        image: "imagenes/mendoza1.jpg"
    },
    { 
        id: 1,
        name: "Santa Cruz",
        price: 150000,
        image: "imagenes/santacruz1.jpg"
    },
    { 
        id: 1,
        name: "Tierra del Fuego",
        price: 200000,
        image: "imagenes/tierradelfuego1.jpg"
    },
    // Agrega más paquetes aquí...
];

const cardsContainer = document.getElementById('cards');

packages.forEach(package => {
    const card = document.createElement('div');
    card.className = 'card col-md-3 d-inline-block';

    const image = document.createElement('img');
    image.className = 'card-img-top imagenes';
    image.src = package.image;
    card.appendChild(image);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = package.name;
    cardBody.appendChild(title);

    const price = document.createElement('p');
    price.className = 'card-text';
    price.textContent = `$${package.price}`;
    cardBody.appendChild(price);

    const buyButton = document.createElement('button');
    buyButton.className = 'boton-color';
    buyButton.textContent = 'Comprar';
    buyButton.addEventListener('click', () => {
        // Redireccionar a la página de formulario
        window.location.href = 'formulario.html';
    });
    cardBody.appendChild(buyButton);

    card.appendChild(cardBody);
    cardsContainer.appendChild(card);
});
