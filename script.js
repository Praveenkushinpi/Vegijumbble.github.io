function renderItems(containerSelector, count, prefix) {const container=document.querySelector(containerSelector);for(let i=1;i<=count;i++){container.innerHTML+=`

<div class="item" data-id="${prefix}${i}">

<img src="images/${prefix}${i}.jpg" alt="${prefix} ${i}">

<p>Price: $${(Math.random()*10+1).toFixed(2)}</p>

<p>Offer: ${Math.random()>0.5?'20% OFF':'Buy 1 Get 1 Free'}</p>

<button class="add-to-cart">Add to Cart</button>

<button class="buy-now">Buy Now</button>

</div>`;}}

renderItems('.grocery-section .item-slider',20,'grocery');

renderItems('.dairy-section .item-slider',20,'dairy');

renderItems('.bakery-section .item-slider',20,'bakery');

function setupSwipe(containerSelector,leftSelector,rightSelector){const container=document.querySelector(containerSelector);const leftBtn=document.querySelector(leftSelector);const rightBtn=document.querySelector(rightSelector);let currentIndex=0;const maxIndex=Math.ceil(container.children.length/6)-1;function updateView(){container.style.transform=`translateX(-${currentIndex*100}%)`;}

leftBtn.addEventListener('click',()=>{if(currentIndex>0)currentIndex--;updateView();});rightBtn.addEventListener('click',()=>{if(currentIndex<maxIndex)currentIndex++;updateView();});}

setupSwipe('.grocery-section .item-slider','.left-items','.right-items');

setupSwipe('.dairy-section .item-slider','.left-dairy','.right-dairy');

setupSwipe('.bakery-section .item-slider','.left-bakery','.right-bakery');