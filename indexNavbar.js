
document.querySelector('#centerLogo').addEventListener('click', home);
document.querySelector('#cart').addEventListener('click', cart);
document.querySelector('#profile').addEventListener('click', profile);
// function for home page redirection
function home() {
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
loginLS = JSON.parse(localStorage.getItem('login')) || 0;
function profile() {
    if (loginLS == 0) {
        window.location.href = 'signin.html'
    } else {

        window.location.href = 'profile.html'
    }
}

// New Update
let personBtn = document.querySelector('#profile')
if (loginLS == 1) {
    personBtn.innerText = localStorage.getItem('userInitial')
    personBtn.setAttribute('class', 'initials')
} else {
    personBtn.innerText = 'person';
    personBtn.setAttribute('class', 'material-symbols-outlined')

}

let mark = document.querySelector('#mark')
if (cartDataLS.length > 0) {
    mark.setAttribute('class', 'dotVisible')
} else {
    mark.setAttribute('class', "dotHidden")
}