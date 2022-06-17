



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
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_3_360x.jpg?v=1646477545",
  },
  {

    name: "b",
    reating: "{34}",
    price1: "Rs:665.00",
    price: 598.00,
    itemQty: 1,
    des: "10% Niacinamide Face Serum With Zinc | Women & Men",
    catagory: "Dry Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_3057d434-6349-42b8-aefe-1673c8d24265_360x.jpg?v=1649327316",
  },
  {

    name: "c",
    reating: "{81}",
    price1: "Rs:665.00",
    price: 598.00,
    itemQty: 1,
    des: "2% Salicylic Face Serum With Tea Tree Oil | Women and Men",
    catagory: "Normal Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_2_ff47654b-ba0b-43c5-ac01-7888e451d4e7_360x.jpg?v=1646476750",
  },
  {

    name: "d",
    reating: "{56}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "20% Vitamin C Serum with Blood Orange | Women and Men",
    catagory: "Normal Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_e13fe0e4-6313-45f1-b5f6-fe829a4c5dec_360x.jpg?v=1650465566",
  },
  {

    name: "e",
    reating: "{81}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "30% AHA Blood Orange + 2% BHA GLOW ACCELERATOR PEEL",
    catagory: "Oily Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_4_ae587533-265c-4e47-84bf-81c14bbc6539_360x.jpg?v=1646476775",
  },
  {

    name: "f",
    reating: "{91}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "AGE DEFENSE 2% BHA GLOW ACCELERATOR GLOW NIGHT SERUM",
    catagory: "Acnc Control",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_11_360x.webp?v=1644493946",
  },
  {

    name: "g",
    reating: "{89}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "Alpha Arbutin + Azelaic Biphasic RADIANCE Serum",
    catagory: "Hydration",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_3_360x.jpg?v=1646476857",
  },
  {

    name: "h",
    reating: "{578}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "Avocado + Superfoods Nourishing Face Oil",
    catagory: "Hydration",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_1_360x.jpg?v=1644916657",
  },
  {

    name: "i",
    reating: "{67}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "PHA + Bakuchiol Daily Peel Serum",
    catagory: "Mature Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_4_7a306ce8-6ac4-4704-9284-aa5264e20546_360x.jpg?v=1646476826",
  },
  {

    name: "j",
    reating: "{99}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "RETINOL TIME REVERSE FACE SERUM",
    catagory: "Mature Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_4_763d27a2-de17-476f-9058-0891cd25b094_360x.jpg?v=1646476808"
  },
  {

    name: "k",
    reating: "{121}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "Rosehip Glow Elixir Face Oil",
    catagory: "Mature Skin",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-7_2_360x.jpg?v=1646476789",
  },
  {

    name: "l",
    reating: "{123}",
    price1: "Rs:595.00",
    price: 565.00,
    itemQty: 1,
    des: "SKIN AWAKENING MOISTURIZING SERUM",
    catagory: "Age Defance",
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_2_360x.jpg?v=1644862670",
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
    img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_32f28fd1-371e-4840-b4a1-216f31a43318_360x.jpg?v=1649328433",
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




