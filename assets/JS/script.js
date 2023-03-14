// getting all required elements
const cart_btn = document.querySelector(".cart_btn button");
const cards_box = document.querySelector(".cards_box");

// If add to cart button is clicked 
cart_btn.onclick = () => {
    cards_box.classList.add("activeInfo"); // show the add to cart
}


