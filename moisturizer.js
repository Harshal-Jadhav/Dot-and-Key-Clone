


//This is for cart data;
let cartData = JSON.parse(localStorage.getItem("cartData")) || [];



//This array of object is for all product detail and product image;

let productData = [{ img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Vit-C-Moisturizer-A_-Listing-NEW_e75ddb63-7d9e-4e71-bb35-0e050969a6b1_360x.jpg?v=1654856343", discount: 16, des: "VITAMIN C MOISTURIZER WITH KAKADU PLUM & VITAMIN E| FADES PIGMENTATION & DARK SPOTS| OILY & DRY SKIN| WOMEN...", highPrice: 595.00, price: 565.01, itemQty: 1 },

{ img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICANIGHTGEL_360x.jpg?v=1655302658", discount: 15, des: "CICA NIACINAMIDE NIGHT GEL WITH GREEN TEA, TEA TREE OIL & HYALURONIC| REDUCES ACNE & DARK SPOTS | OILY...", highPrice: 595.00, price: 565.01, itemQty: 1 },

{ img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_720x.jpg?v=1655302709", discount: 20, des: "72 HR HYDRATING PROBIOTIC GEL MOISTURIZER FOR FACE WITH HYALURONIC & RICE WATER| FOR...", highPrice: 745.00, price: 596.00, itemQty: 1 },

{ img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_e423c2c9-3a60-4a5e-9bc0-b0526b7f3c01_360x.jpg?v=1655302612", discount: 30, des: "RETINOL & CERAMIDE AGE DEFENSE NIGHT CREAM FOR FACE| TREATS FINE LINES & WRINKLES | MATURE...", highPrice: 945.00, price: 662.00, itemQty: 1 },

{ img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERMELONMOIST_360x.jpg?v=1655303303", discount: 15, des: "WATERMELON SUPER GLOW MATTE FACE CREAM WITH GLYCOLIC | MINIMIZES PORES & EVENS SKIN TONE|...", highPrice: 595.00, price: 506.00, itemQty: 1 },

{ img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-18_360x.jpg?v=1644916747", discount: 30, des: "AVOCADO SMOOTHIE DAY CREAM SPF 20", highPrice: 845.00, price: 592.00, itemQty: 1 },

{ img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/day-night_1800x1800_1_360x.png?v=1628595712", discount: 20, des: "DAY & NIGHT CARE COMBO", highPrice: 1590.00, price: 1272.00, itemQty: 1 },

{ img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-L_360x.jpg?v=1638974908", discount: 10, des: "HAND CREAM + SANITIZER, LAVENDER", highPrice: 395.00, price: 356.00, itemQty: 1 },

{ img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-M_360x.jpg?v=1644916543", discount: 10, des: "HAND CREAM + SANITIZER, MANDARIN", highPrice: 395.00, price: 356.00, itemQty: 1 },

{ img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-Rose_360x.jpg?v=1644862602", discount: 10, des: "HAND CREAM + SANITIZER, ROSE", highPrice: 395.00, price: 356.00, itemQty: 1 }
];




//this img for sowing for first image on moisturizer page;
let top_loadingImg = document.createElement("div");
top_loadingImg.setAttribute("class", "top_img")
let top_img = document.createElement("img");
top_img.setAttribute("src", "https://cdn.shopify.com/s/files/1/0361/8553/8692/collections/By-catagory-11_73cd9359-5cc9-46db-b538-22de93ec14a3_1944x.png?v=1648272494");
top_loadingImg.append(top_img);


//this is for showing the start of section for moisturizer product .this is h1 tag that contain section name;
let name_moisturizer = document.createElement("div");
name_moisturizer.setAttribute("class", "sectionName");
name_moisturizer.innerText = "MOISTURIZERS";


// //This div is for product and price detaile;
let product_section = document.createElement("div");
product_section.setAttribute("class", "products");

display(productData);

function display(productData) {
    product_section.innerHTML = "";
    productData.forEach(function (ele) {
        let pdiv = document.createElement("div");

        //this is for discount card style on product image ;
        let discard = document.createElement("div");
        discard.innerText = "SAVE " + ele.discount + " %";
        discard.setAttribute("class", "discountcard")

        //this is for product image ;
        let pimg = document.createElement("img")
        pimg.setAttribute("src", ele.img);

        //This is for rating and wish list button;
        let rw_div = document.createElement("div");
        rw_div.style = "display:flex;justify-content:space-between;"

        //This is for rating showing;
        let rating = document.createElement("div");
        rating.style = "display:flex;"
        let s1 = document.createElement("span");
        s1.setAttribute("class", "fa fa-star checked");
        let s2 = document.createElement("span");
        s2.setAttribute("class", "fa fa-star checked");
        let s3 = document.createElement("span");
        s3.setAttribute("class", "fa fa-star checked");
        let s4 = document.createElement("span");
        s4.setAttribute("class", "fa fa-star checked");
        let s5 = document.createElement("span");
        s5.setAttribute("class", "fa fa-star");
        let s6 = document.createElement("p");
        s6.innerText = "(296)"
        s6.style = "margin:2px 0px 0px 0px"
        rating.append(s1, s2, s3, s4, s5, s6);

        //this is for wish list icon;
        let wishList = document.createElement("i");
        wishList.setAttribute("class", "fa fa-heart-o heart")
        //This is for wishlist icon and rating appending;
        rw_div.append(rating, wishList);

        //This is for product Name;
        let pname = document.createElement("div");
        pname.setAttribute("class", "productName");
        pname.innerText = ele.des;

        //This div is for price ;
        let priceDiv = document.createElement("div");
        priceDiv.style = "text-align:center;font-size:12px;font-weight:bold;"

        let priceFirst = document.createElement("span");
        priceFirst.style = "color:gray; text-decoration: line-through;margin-right:5px;";
        priceFirst.innerText = "Rs: " + (ele.highPrice).toFixed(2);

        let newPrice = document.createElement("span");
        newPrice.style = "color:red;"
        newPrice.innerText = "Rs: " + (ele.price).toFixed(2);
        priceDiv.append(priceFirst, newPrice)


        //This is for add to cart button and thaire funtionality;

        let cartButtton = document.createElement("button");
        cartButtton.style = "width:95%; background-color:gray; color:white; font-weight:bold; margin:auto; border:0px; height:30px; margin-top:15px;";
        cartButtton.innerText = "ADD TO CART";

        cartButtton.addEventListener("click", function () {
            addtocart(ele);
        })




        pdiv.append(discard, pimg, rw_div, pname, priceDiv, cartButtton)
        product_section.append(pdiv)
    })

    //this is for creating product box in products div;
    document.querySelector("#main").append(top_loadingImg, name_moisturizer, product_section);
}






//  add to cart function declearation ;
let loginLS = JSON.parse(localStorage.getItem("loginLS"));
function addtocart(ele) {
    if (loginLS) {
        if (checkproductdata(ele.des) == true) {
            cartData.push(ele);
            localStorage.setItem("cartData", JSON.stringify(cartData));
            window.location.reload()
        }
        else {
            alert("product is already in cart");
        }
    }
    else {
        window.location.href = "signin.html"
    }
}






//This function is for check product is present in cart or not if product is persent in cart then dont add same product in cart else add one;
function checkproductdata(name) {
    let filered = cartData.filter(function (element) {
        return name === element.des;
    })

    if (filered.length > 0) {
        return false;
    } else {
        return true;
    }
}


//Now i m creating the pricesorting functionality;

function changefunction() {
    let val = document.querySelector("#sorting").value;
    if (val == "low") {
        productData.sort(function (a, b) {
            return a.price - b.price;
        })
        display(productData)
    }
    if (val == "high") {
        productData.sort(function (a, b) {
            return b.price - a.price;
        })
        display(productData)
    }
    if (val == "A") {
        productData.sort(function (a, b) {
            if (a.des < b.des) return -1;
            if (a.des > b.des) return 1;
            return 0;
        })
        display(productData)
    }
    if (val == "Z") {
        productData.sort(function (a, b) {
            if (a.des < b.des) return 1;
            if (a.des > b.des) return -1;
            return 0;
        })
        display(productData)
    }
    if (val == "default") {
        window.location.reload();
    }
}


///here to start navbar js start;


document.querySelector('#centerLogo').addEventListener('click', home);
document.querySelector('#cart').addEventListener('click', cart);
document.querySelector('#profile').addEventListener('click', profile);
// function for home page redirection
function home() {
    window.location.href = 'index.html'
}
// functin for cart page redirection

function cart() {
    let cartDataLS = JSON.parse(localStorage.getItem('cartData')) || []
    if (cartDataLS.length == 0) {
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