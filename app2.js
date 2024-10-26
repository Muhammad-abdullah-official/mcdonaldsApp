const closebutton = document.querySelector(".btn");
const closebtn = document.querySelector(".closebtn");
const showbtn = document.querySelector(".showbtn");
const openbtn = document.querySelector(".openbtn");

// Event Listener - click close button to toggle closebtn visibility
closebutton.addEventListener("click", (e) => {
  if (!closebtn.classList.contains("show")) {
    closebtn.classList.add("show");
    closebutton.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
  } else {
    closebtn.classList.remove("show");
    closebutton.innerHTML = `<i class="fa-solid fa-x"></i>`;
  }
});

// Cart Data
// Add to card checkout

// Selecting all add-to-cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
let updateCart = document.querySelector(".cart");
let totalPrice = 0;
let showtotalPrice = document.createElement("h5");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let parentOfItem = e.currentTarget.parentElement;

    let itemDataName = parentOfItem.querySelector("h4").innerHTML;
    let itemDataPrice = parseFloat(
      parentOfItem.querySelector("h5 span").innerHTML
    );
    // Log the item name and price
    console.log(itemDataName);
    console.log(itemDataPrice);

    // Update total price
    totalPrice += itemDataPrice;

    // Create elements for the cart
    let productName = document.createElement("h5");
    let productPrice = document.createElement("h5");

    // Set the content of the newly created elements
    productName.innerHTML = itemDataName;
    productPrice.innerHTML = `Price: ${itemDataPrice} Rs/-`;
    showtotalPrice.innerHTML = `Total Price: ${totalPrice} Rs/-`;
    // Select the cart and append new items
    updateCart.appendChild(productName);
    updateCart.appendChild(productPrice);
    updateCart.appendChild(showtotalPrice);
  });
});
