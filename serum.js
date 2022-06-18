



//   ****   Code for Serum page  ****



let productData = [
  {

    name: "a",
    reating: "{71}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "10% AHA + 2% BHA EXFOLIATING GLOW HYDRO PEEL",
    catagory: "Dry Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20_VITC_360x.jpg?v=1655379925",
  },
  {

    name: "b",
    reating: "{34}",
    price1: "Rs:665.00",
    price: 598.00,
    itemQty: 1,
    des: "10% Niacinamide Face Serum With Zinc | Women & Men",
    catagory: "Dry Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/NIACINAMIDE_6ffa90b5-94d9-4ecc-bff1-c4c113fe47b5_360x.jpg?v=1655311005",
  },
  {

    name: "c",
    reating: "{81}",
    price1: "Rs:665.00",
    price: 598.00,
    itemQty: 1,
    des: "2% Salicylic Face Serum With Tea Tree Oil | Women and Men",
    catagory: "Normal Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/ACNEBUSTING_360x.jpg?v=1655370921",
  },
  {

    name: "d",
    reating: "{56}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "20% Vitamin C Serum with Blood Orange | Women and Men",
    catagory: "Normal Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/retinolserum_6d24c355-84a6-42bf-b4a4-bcf30318f39a_360x.jpg?v=1655311178",
  },
  {

    name: "e",
    reating: "{81}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "30% AHA Blood Orange + 2% BHA GLOW ACCELERATOR PEEL",
    catagory: "Oily Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/VITCSERUM_360x.jpg?v=1655311150",
  },
  {

    name: "f",
    reating: "{91}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "AGE DEFENSE 2% BHA GLOW ACCELERATOR GLOW NIGHT SERUM",
    catagory: "Acnc Control",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/ha_9b347964-36a7-412d-9d09-bb59e71561c5_360x.jpg?v=1655310900",
  },
  {

    name: "g",
    reating: "{89}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "Alpha Arbutin + Azelaic Biphasic RADIANCE Serum",
    catagory: "Hydration",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/hpgp_80b9ffae-6c52-41f4-ace4-54e30f701a30_360x.jpg?v=1655311040",
  },
  {

    name: "h",
    reating: "{578}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "Avocado + Superfoods Nourishing Face Oil",
    catagory: "Hydration",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/gloes_360x.jpg?v=1655303583",
  },
  {

    name: "i",
    reating: "{67}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "PHA + Bakuchiol Daily Peel Serum",
    catagory: "Mature Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/alpha_2d5537db-5f5e-4e89-b23f-2465c39fafac_360x.jpg?v=1655303449",
  },
  {

    name: "j",
    reating: "{99}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "RETINOL TIME REVERSE FACE SERUM",
    catagory: "Mature Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_2_360x.jpg?v=1644862670"
  },
  {

    name: "k",
    reating: "{121}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "Rosehip Glow Elixir Face Oil",
    catagory: "Mature Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/baku_360x.jpg?v=1655303484",
  },
  {

    name: "l",
    reating: "{123}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "SKIN AWAKENING MOISTURIZING SERUM",
    catagory: "Age Defance",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_1_360x.jpg?v=1644916657",
  },
  {

    name: "m",
    reating: "{342}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "SKIN AWAKENING MOISTURIZING SERUM",
    catagory: "Age Defance",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/SkinAwakening_360x.jpg?v=1610017602",
  },
  {

    name: "o",
    reating: "{12}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "SKIN AWAKENING MOISTURIZING SERUM",
    catagory: "Oily Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_11_360x.webp?v=1644493946",
  },
]

alldata(productData)


function alldata(productData) {
  document.querySelector("#allproduct").innerHTML = ""
  productData.forEach(function (elem) {

    //    image 

    let box = document.createElement("div")
    box.setAttribute("class", "box")
    let photo = document.createElement("img")
    photo.setAttribute("src", elem.img)
    photo.setAttribute("class", "photo")
    photo.addEventListener("click", function () {
      detail(elem)

    })



    let offerbox = document.createElement("div")
    offerbox.innerText = "SAVE 5%"
    offerbox.setAttribute("id", "offerbox")


    // for star reating 

    let reating = document.createElement("div")
    reating.setAttribute("class", "reating")
    let div1 = document.createElement("div")
    div1.setAttribute("class", "div1")
    let star1 = document.createElement("span")
    star1.setAttribute("class", "fa fa-star checked")
    let star2 = document.createElement("span")
    star2.setAttribute("class", "fa fa-star checked")
    let star3 = document.createElement("span")
    star3.setAttribute("class", "fa fa-star checked")
    let star4 = document.createElement("span")
    star4.setAttribute("class", "fa fa-star checked")
    let star5 = document.createElement("span")
    star5.setAttribute("class", "fa fa-star")
    let heart = document.createElement("span")
    heart.setAttribute("class", ("fa fa-heart-o"))
    div1.append(star1, star2, star3, star4, star5)
    reating.append(div1, heart)


    //    name 


    let des = document.createElement("p")
    des.setAttribute("class", "productID")
    des.innerText = elem.des

    //   price div 

    let div2 = document.createElement("div")
    div2.setAttribute("class", "div2")
    let price1 = document.createElement("div")
    price1.setAttribute("class", "price1")
    price1.innerText = elem.price1
    let rs = document.createElement("div")
    let rs1 = document.createElement("p")
    rs.innerText = "Rs:"
    rs.setAttribute("class", "rs")
    rs.append(rs1)
    let price = document.createElement("div")
    price.setAttribute("class", "price")
    price.innerText = elem.price
    div2.append(price1, rs, price)


    //     add to cart


    let button = document.createElement("button")
    button.setAttribute("class", "button")
    button.innerText = "ADD TO CART"
    button.addEventListener("click", function () {
      addtocart(elem)
    })

    box.append(offerbox, photo, reating, des, div2, button)
    document.querySelector("#allproduct").append(box)
  })

}

// //      add to cart





function check(name) {
  let cart = addtocartarr.filter(function (elem) {
    return elem.des == name
  })
  if (cart.length > 0) {
    return false
  }
  else {
    return true
  }

}

let addtocartarr = JSON.parse(localStorage.getItem("cartData")) || []
let login = JSON.parse(localStorage.getItem("login")) || 0

function addtocart(elem) {
  if (login == 1) {
    if (check(elem.des) == true) {
      addtocartarr.push(elem)
      localStorage.setItem("cartData", JSON.stringify(addtocartarr))
      alert('Product added to cart')
      window.location.reload()
    }
    else {
      alert("Product already in cart")
    }
  }
  else {
    window.location.href = "signin.html"
  }

}

//    product detail
function detail(elem) {
  let productdetail = []
  productdetail.push(elem)
  localStorage.setItem("detailpage", JSON.stringify(productdetail))
  window.location.href = "serumdetail.html"
  console.log(productdetail)
}



document.querySelector("#filter").addEventListener("change", filtered)
function filtered() {
  let sorted = document.querySelector("#filter").value
  if (sorted == "all") {
    window.location.reload()
  }
  let my = productData.filter(function (el) {
    return el.catagory == sorted
  })
  alldata(my)
}


document.querySelector("#featured").addEventListener("change", featur)

function featur() {
  let value = document.querySelector("#featured").value

  if (value == "lowToHigh") {
    productData.sort(function (a, b) {
      return a.price2 - b.price2
    })
  }
  else if (value == "highToLow") {
    productData.sort(function (a, b) {
      return b.price2 - a.price2
    })
  }
  alldata(productData)
}










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
let cartDataLS = JSON.parse(localStorage.getItem('cartData'))
let mark = document.querySelector('#mark')
if (cartDataLS.length > 0) {
  mark.setAttribute('class', 'dotVisible')
} else {
  mark.setAttribute('class', "dotHidden")
}


// New Update V2.0
document.querySelector('#menuButton').addEventListener('click',toggle)

function toggle(){
    let x = document.querySelector('#menu')
    if(x.style.display=='grid'){
        x.style.display='none'
    }else{
        x.style.display='grid'
    }
}

