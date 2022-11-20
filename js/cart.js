const cartBody = document.querySelector('#cart-body');
const cartStorage = JSON.parse(localStorage.getItem('products') || "[]");
const totalPrice = document.querySelector('#total-price');
let total = 0;

cartStorage.forEach(el => {
    let tmp = JSON.parse(el);
    total += parseInt(tmp.price);
    const newCard = document.createElement("item")
    newCard.innerHTML = `<div class="item">
                           <div class="item__desc">
                               <div class="item__name"><p>${tmp.productName}</p></div>
                               <div class="item__price"><p>$ ${tmp.price}</p></div>
                           </div>
                            <div class="item__photo"><img src=${tmp.imgPath}></div>
                        </div>`
    cartBody.insertBefore(newCard, cartBody.firstChild);
});
totalPrice.textContent += total;

const deleteCart = document.querySelector('.delete-cart');
deleteCart.addEventListener('click', function (e) {
    localStorage.removeItem('products');
    e.preventDefault();
});








