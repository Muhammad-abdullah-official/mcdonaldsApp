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

// Selecting all add-to-cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
let updateCart = document.querySelector(".closebtn");
let totalPrice = 0;
let showTotalPrice = document.createElement("h5");
let orderConfirm = document.createElement("button");
orderConfirm.innerText = "Confirm Order";
orderConfirm.classList.add("confirmOrderBtn");
showTotalPrice.classList.add("total-price");

const updateTotalPrice = () => {
  showTotalPrice.innerHTML = `Total Price: ${totalPrice} Rs/-`;
};

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let parentOfItem = e.currentTarget.parentElement;
    let itemDataName = parentOfItem.querySelector("h4").innerHTML;
    let itemDataPrice = parseFloat(
      parentOfItem.querySelector("h5 span").innerHTML
    );

    // Create a cart item container
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    // Create elements for item details
    let productName = document.createElement("h5");
    let productPrice = document.createElement("p");
    let showQty = document.createElement("span");
    let qtyOfItem = 1;
    let itemTotal = itemDataPrice;
    totalPrice += itemTotal;

    // Display initial values
    productName.innerHTML = itemDataName;
    showQty.innerHTML = qtyOfItem;
    productPrice.innerHTML = `Price: ${itemTotal} Rs/-`;

    // Create buttons for quantity control and delete
    let qtyPlus = document.createElement("button");
    qtyPlus.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    let qtyMinus = document.createElement("button");
    qtyMinus.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    // Append all elements to cart item container
    cartItem.appendChild(productName);
    cartItem.appendChild(productPrice);
    cartItem.appendChild(qtyMinus);
    cartItem.appendChild(showQty);
    cartItem.appendChild(qtyPlus);
    cartItem.appendChild(deleteBtn);

    // Append cart item container to the cart
    updateCart.appendChild(cartItem);

    // Update the total price display
    updateTotalPrice();

    // Event listeners for quantity control and delete
    qtyPlus.addEventListener("click", () => {
      qtyOfItem++;
      itemTotal = itemDataPrice * qtyOfItem;
      productPrice.innerHTML = `Price: ${itemTotal} Rs/-`;
      showQty.innerHTML = qtyOfItem;
      totalPrice += itemDataPrice;
      updateTotalPrice();
    });

    qtyMinus.addEventListener("click", () => {
      if (qtyOfItem > 1) {
        qtyOfItem--;
        itemTotal = itemDataPrice * qtyOfItem;
        productPrice.innerHTML = `Price: ${itemTotal} Rs/-`;
        showQty.innerHTML = qtyOfItem;
        totalPrice -= itemDataPrice;
        updateTotalPrice();
      }
    });

    deleteBtn.addEventListener("click", () => {
      totalPrice -= itemTotal;
      cartItem.remove();
      updateTotalPrice();
    });
    updateCart.appendChild(showTotalPrice);
    cartItem.appendChild(orderConfirm);

    orderConfirm.addEventListener("click", () => {
      Swal.fire({
        title: "Order Confirmed!",
        text: "Thank you for your order. It has been successfully placed!",
        icon: "success",
        confirmButtonText: "OK",
      });
      cartItem.innerHTML = "";
      showTotalPrice.innerHTML = "";
    });
  });
});
