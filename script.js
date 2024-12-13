// Auto-Rotate for Offers

let currentOfferIndex = 0;

const offerSlider = document.querySelector('.offer-slider');

setInterval(() => {

    currentOfferIndex = (currentOfferIndex + 1) % 4;

    offerSlider.style.transform = `translateX(-${currentOfferIndex * 100}vw)`;

}, 5000);

// Item Rendering (Updated without names)

function renderItems(containerSelector, count, prefix) {

    const container = document.querySelector(containerSelector);

    for (let i = 1; i <= count; i++) {

        container.innerHTML += `

        <div class="item" data-id="${prefix}${i}">

            <img src="${prefix}${i}.jpg" alt="${prefix} ${i}">

            <p>Price: $${(Math.random() * 10 + 1).toFixed(2)}</p>

            <p>Offer: ${Math.random() > 0.5 ? '20% OFF' : 'Buy 1 Get 1 Free'}</p>

            <button class="add-to-cart">Add to Cart</button>

            <button class="buy-now">Buy Now</button>

        </div>`;

    }

}

renderItems('.grocery-section .item-slider', 20, 'grocery');

renderItems('.dairy-section .item-slider', 20, 'dairy');

renderItems('.bakery-section .item-slider', 20, 'bakery');

// Swiping Functionality

function setupSwipe(containerSelector, leftSelector, rightSelector) {

    const container = document.querySelector(containerSelector);

    const leftBtn = document.querySelector(leftSelector);

    const rightBtn = document.querySelector(rightSelector);

    let currentIndex = 0;

    const maxIndex = Math.ceil(container.children.length / 6) - 1;

    function updateView() {

        container.style.transform = `translateX(-${currentIndex * 100}%)`;

    }

    leftBtn.addEventListener('click', () => {

        if (currentIndex > 0) currentIndex--;

        updateView();

    });

    rightBtn.addEventListener('click', () => {

        if (currentIndex < maxIndex) currentIndex++;

        updateView();

    });

}

setupSwipe('.grocery-section .item-slider', '.left-items', '.right-items');

setupSwipe('.dairy-section .item-slider', '.left-dairy', '.right-dairy');

setupSwipe('.bakery-section .item-slider', '.left-bakery', '.right-bakery');

// Cart Functionality

let cart = [];

function updateCart() {

    const cartItems = document.querySelector('.cart-items');

    cartItems.innerHTML = cart.length > 0 ? cart.map(item => `<p>${item}</p>`).join('') : '<p>No items in the cart.</p>';

}

document.body.addEventListener('click', (e) => {

    if (e.target.classList.contains('add-to-cart')) {

        const itemName = e.target.closest('.item').querySelector('img').alt;

        cart.push(itemName);

        updateCart();

    }

});

// Modal for Buy Now

const modal = document.querySelector('#buy-modal');

document.body.addEventListener('click', (e) => {

    if (e.target.classList.contains('buy-now')) modal.style.display = 'flex';

});

modal.querySelector('.close-modal').addEventListener('click', () => {

    modal.style.display = 'none';

});