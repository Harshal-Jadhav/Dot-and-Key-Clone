
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
       price1.innerText = elem.price1 +"  "
       price1.setAttribute("class","price1")
       let price2 = document.createElement("span")
       price2.innerText = "Rs: "+elem.price
       price2.setAttribute("class","price2")

       document.querySelector("#pricelebel").append(price1,price2)
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
