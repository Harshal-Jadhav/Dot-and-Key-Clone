
//   localStorage.setItem("detailpage",JSON.stringify("productdetail"))
  let productdetailpage = JSON.parse(localStorage.getItem("detailpage"))

console.log(productdetailpage)

display(productdetailpage)

function display(productdetailpage){
    productdetailpage.forEach(function(elem){
        
        let productphoto = document.createElement("img")
        productphoto.setAttribute("src",elem.img)
        
        let producttext = document.createElement("h2")
        producttext.innerText =elem.des

       let price1 = document.createElement("span")
       
       document.querySelector("#productImage").append(productphoto)
       document.querySelector("#productdescription").append(producttext)

    })






}











document.querySelector('#centerLogo').addEventListener('click', home);
document.querySelector('#cart').addEventListener('click', cart);
document.querySelector('#profile').addEventListener('click', profile);
// function for home page redirection
function home() {
    console.log('home page')
    // window.location.href='index.html'
}
// functin for cart page redirection
function cart() {
    console.log('cart page')
    // window.location.href='cartPage.html'
}
// functin for profile page redirection
function profile() {
    console.log('profile page')
    // window.location.href='profilePage.html'
}



// New Update
let personBtn = document.querySelector('#profile')
if (loginLS == 1) {
    personBtn.innerText = localStorage.getItem('userInitial')
    personBtn.setAttribute('class','initials')
} else {
    personBtn.innerText = 'person';
    personBtn.setAttribute('class','material-symbols-outlined')
    
}
let cartDataLS = JSON.parse(localStorage.getItem('cartData'))
let mark = document.querySelector('#mark')
if (cartDataLS.length > 0) {
    mark.setAttribute('class','dotVisible')
} else {
    mark.setAttribute('class',"dotHidden")
}