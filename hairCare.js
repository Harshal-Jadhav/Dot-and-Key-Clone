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



// product  haircare javascript part>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



let img = document.querySelector("#imgs");
let buttons = document.querySelectorAll("#crauser>button");
let imgNum = 0;

let imgArr = ["https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1b_2.png?v=1646731308", "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_13.png?v=1647427657"

]

buttons[0].addEventListener("click", function() {
    if (imgNum === 0) {
        imgNum = imgArr.length - 1;
    } else {
        imgNum--;
    }
    img.setAttribute("src", imgArr[imgNum]);
})
buttons[1].addEventListener("click", function() {
        if (imgNum === imgArr.length - 1) {
            imgNum = 0;
        } else {
            imgNum++;
        }
        img.setAttribute("src", imgArr[imgNum]);
    })
    //  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<OBJECT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let hairCareArr = [{
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_35e55b48-0b45-41a1-a9cc-1d07cb4bbf46.jpg?v=1649327262",
        rating: " 4.8/5 (43)",
        des: "Argan Oil Anti Hairfall Shampoo With Moringa & Keratin|  ",
        price: 590.75,
        button: "ADD TO CART",
        itemQty: 1,

    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_3_20f621c6-95e5-442c-8d96-1be670078ef6.jpg?v=1646476389",
        rating: "  4.7/5 (24)",
        des: "Pea Peptide Strengthening Moringa & Argan Hair Mask",
        price: 548.25,
        button: "ADD TO CART",
        itemQty: 1,


    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_1_11bc8a1c-3330-413c-8aaf-bd1ebdb23dbe.jpg?v=1646476045",
        rating: " 4.8/5 (26)",
        des: "Pea Peptide + Cysteine Hair Volumising Serum",
        price: 633.25,
        button: "ADD TO CART",
        itemQty: 1,


    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_3.jpg?v=1646476025",
        rating: "4.9/5 (22)",
        des: "AHA Exfoliation Apple Cider Hair & Scalp Scrub",
        price: 590.75,
        button: "ADD TO CART",
        itemQty: 1,


    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_1_3728096d-d7d3-4616-923f-4220451f4cef.jpg?v=1646476077",
        rating: "4.7/5 (28)",
        des: "Quinoa Protein & Olive Damage Repair Shampoo",
        price: 590.75,
        button: "ADD TO CART",
        itemQty: 1,



    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_2_6fc754d7-d198-4000-b394-a0f6582c51c8.jpg?v=1646475973",
        rating: " 4.6/5 (18)",
        des: "Hyaluronic Hydrating Quinoa Protein & Olive Hair Mask",
        price: 548.25,
        button: "ADD TO CART",
        itemQty: 1,


    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_3.jpg?v=1646475997",
        rating: " 4.8/5 (43)",
        des: "Argan Oil Anti Hairfall Shampoo With Moringa & Keratin| Helps Reduce Hair Fall & Breakage |For  ",
        price: 590.75,
        button: "ADD TO CART",
        itemQty: 1,


    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_35e55b48-0b45-41a1-a9cc-1d07cb4bbf46.jpg?v=1649327262",
        rating: " 4.9/5 (17)",
        des: "Hyaluronic + Ceramide Hair Treatment Serum",
        price: 633.25,
        button: "ADD TO CART",
        itemQty: 1,


    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_7.jpg?v=1643096418",
        rating: " 5.0/5 (10)",
        des: "Ditch the Damage Combo",
        price: 772.00,
        button: "ADD TO CART",
        itemQty: 1,


    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_6_44a76a9c-93bc-4179-a6f8-bc5f0794ee05.jpg?v=1643096708",
        rating: " 5.0/5 (9)",
        des: "Care & Repair Power Combo",
        price: 139.00,
        button: "ADD TO CART"

    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_6.jpg?v=1643115129",
        rating: "  4.8/5 (12)",
        des: "Strong & Shiny Hair Combo",
        price: 139.00,
        button: "ADD TO CART",
        itemQty: 1,


    },
];

hairCareArr.forEach(function(ele) {
    let box = document.createElement("div");
    let avatar = document.createElement("img");
    avatar.setAttribute("src", ele.img);
    let star = document.createElement("span");
    star.setAttribute("class", "fa fa-star checked ")

    let rating = document.createElement("p");
    rating.innerText = ele.rating;


    let name = document.createElement("div");
    name.setAttribute("class", "namediv");
    name.innerText = ele.des;

    let price = document.createElement("h3");
    price.innerText = "Rs: " + ele.price.toFixed(2);
    price.style.color = "red";
    let cart = document.createElement("button");
    cart.innerText = ele.button;
    cart.addEventListener("click", function() {
        addtoCart(ele)
    })

    box.append(avatar, star, rating, name, price, cart);
    document.querySelector("#headingPro").append(box);
});
let loginLS = JSON.parse(localStorage.getItem('login')) || 0;
let cartDetail = JSON.parse(localStorage.getItem("cartData")) || [];

function addtoCart(ele) {
    if (loginLS) {
        if (check(ele.des) === true) {
            cartDetail.push(ele);
            localStorage.setItem("cartData", JSON.stringify(cartDetail));
        }


    } else {
        window.location.href = 'signin.html'
    }
}

function check(element) {
    let result = cartDetail.filter(function(ele) {
        return ele.des === element;
    })
    if (result.length > 0) {
        return false;
    } else {
        return true;
    }
}