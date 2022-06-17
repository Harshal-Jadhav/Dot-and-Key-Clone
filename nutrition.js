document.querySelector("#centerLogo").addEventListener("click", home);
document.querySelector("#cart").addEventListener("click", cart);
document.querySelector("#profile").addEventListener("click", profile);
// function for home page redirection
function home() {
  console.log("home page");
  // window.location.href='index.html'
}
// functin for cart page redirection
function cart() {
  console.log("cart page");
  // window.location.href='cartPage.html'
}
// functin for profile page redirection
function profile() {
  console.log("profile page");
  // window.location.href='profilePage.html'
}
let img = document.querySelector("#imgdata");

let buttons = document.querySelectorAll("#carsur>button");
let imgN = 0;
let imgArr = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner5_1.jpg?v=1647001914",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner_1_1.png?v=1647001785",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desktop-banner-.2_1_1.png?v=1647001813",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner2_2.png?v=1647001557",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner4_2.png?v=1647001964",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner1_1.png?v=1647002025",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1600x500-website-banner3.png?v=1647002060",
];

buttons[0].addEventListener("click", function () {
  if (imgN === 0) {
    imgN = imgArr.length - 1;
  } else {
    imgN--;
  }
  img.src = imgArr[imgN];
});

buttons[1].addEventListener("click", function () {
  if (imgN === imgArr.length - 1) {
    imgN = 0;
  } else {
    imgN++;
  }
  img.src = imgArr[imgN];
});
