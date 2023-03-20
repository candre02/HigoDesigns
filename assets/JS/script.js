

function Shopping() {
    // create a button element
    const cart_btn = document.createElement('cart_btn')
    // set the button text to 'Add to Cart'
    cart_btn.innerText = 'Add to Cart'
    // Attach the "click" event to your cart_btn
    cart_btn.addEventListener('click', () => {
        // where there is a "click"
        // it shows an alert in the browser
        alert('Oh, you clicked me!')
    })
    // Add the button to your HTML <body> tag 
    document.body.appendChild(cart_btn)
}

