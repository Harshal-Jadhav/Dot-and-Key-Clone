document.querySelector('#centerLogo').addEventListener('click', home);
document.querySelector('#cart').addEventListener('click', cart);
document.querySelector('#profile').addEventListener('click', profile);
// function for home page redirection
function home() {
    window.location.href = 'index.html'
}
// functin for cart page redirection

function cart() {
    cartDataLS = JSON.parse(localStorage.getItem('cartData')) || []
    if (cartDataLS.length === 0) {
        window.location.href = 'emptyCart.html'
    } else {

        window.location.href = 'cart.html'
    }
}
// functin for profile page redirection
loginLS = JSON.parse(localStorage.getItem('login')) || 0;
function profile() {
    if (loginLS == 0) {
        window.location.href='signin.html'
    } else {
        
        window.location.href='profile.html'
    }
}