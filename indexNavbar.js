
document.querySelector('#centerLogo').addEventListener('click', home);
document.querySelector('#cart').addEventListener('click', cart);
document.querySelector('#profile').addEventListener('click', profile);
// function for home page redirection
function home() {
    console.log('home page')
    window.location.href = 'index.html'
}
// functin for cart page redirection
cartDataLS = JSON.parse(localStorage.getItem('cartData')) || []
function cart() {
    if (cartDataLS.length === 0) {
        window.location.href = 'emptyCart.html'
    } else {

        window.location.href = 'cart.html'
    }
}
// functin for profile page redirection
function profile() {
    console.log('profile page')
    // window.location.href='profilePage.html'
}