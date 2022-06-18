
//   localStorage.setItem("detailpage",JSON.stringify("productdetail"))
let productdetailpage = JSON.parse(localStorage.getItem("detailpage"))

console.log(productdetailpage)

display(productdetailpage)

function display(productdetailpage) {
    productdetailpage.forEach(function (elem) {

        let productphoto = document.createElement("img")
        productphoto.setAttribute("src", elem.img)

        let producttext = document.createElement("h2")
        producttext.innerText = elem.des

        // let price1 = document.createElement("span")



        let price1 = document.createElement("span")
        price1.innerText = elem.price1 + "  "
        price1.setAttribute("class", "price1")
        let price2 = document.createElement("span")
        price2.innerText = "Rs: " + elem.price
        price2.setAttribute("class", "price2")

        document.querySelector("#pricelebel").append(price1, price2)

        document.querySelector("#productImage").append(productphoto)
        document.querySelector("#productdescription").append(producttext)

    })






}



document.querySelector('#centerLogo').addEventListener('click', home);
document.querySelector('#cart').addEventListener('click', cart);
document.querySelector('#profile').addEventListener('click', profile);
// function for home page redirection
function home() {
    window.location.href = 'index.html'
}
// functin for cart page redirection
let cartDataLS = JSON.parse(localStorage.getItem('cartData')) || []
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
loginLS = JSON.parse(localStorage.getItem('login')) || 0
let personBtn = document.querySelector('#profile')
if (loginLS == 1) {
    personBtn.innerText = localStorage.getItem('userInitial')
    personBtn.setAttribute('class', 'initials')
} else {
    personBtn.innerText = 'person';
    personBtn.setAttribute('class', 'material-symbols-outlined')

}
cartDataLS = JSON.parse(localStorage.getItem('cartData')) || []
let mark = document.querySelector('#mark')
if (cartDataLS.length > 0) {
    mark.setAttribute('class', 'dotVisible')
} else {
    mark.setAttribute('class', "dotHidden")
}

// New Update V2.0
document.querySelector('#menuButton').addEventListener('click', toggle)

function toggle() {
    let x = document.querySelector('#menu')
    if (x.style.display == 'grid') {
        x.style.display = 'none'
    } else {
        x.style.display = 'grid'
    }
}

let x = document.querySelector('#addTocart')
x.addEventListener('click', addtoCart)
function addtoCart() {
    cartDataLS.push(productdetailpage[0]);
    localStorage.setItem('cartData', JSON.stringify(cartDataLS))
    window.location.reload()
}
