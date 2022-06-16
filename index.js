// document.querySelector('#bodycare').addEventListener('click', function () { window.location.href = 'bodyCare.html' })
// document.querySelector('#haircare').addEventListener('click', function () { window.location.href = 'hairCare.html' })
// document.querySelector('#moisturizer').addEventListener('click', function () { window.location.href = 'moisturizer.html' })
// document.querySelector('#nutrition').addEventListener('click', function () { window.location.href = 'nutrition.html' })
// document.querySelector('#serum').addEventListener('click', function () { window.location.href = 'serum.html' })
// document.querySelector('#slideMoist').addEventListener('click',function(){window.location.href='moisturizer.html'})


// JS for slider 1
let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 5) {
        counter = 1;
    }
}, 5000)

let bestSeller = [
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-GreenClayListing_1.jpg?v=1649655908",
        rating: '4.7/5',
        count: '(226)',
        des: 'SALICYLIC&FRENCH GREEN CLAY FACE MASK WITH MATCH TEAI ....',
        strikeoff: 695.00,
        price: 660,
        itemQty: 1
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_e423c2c9-3a60-4a5e-9bc0-b0526b7f3c01.jpg?v=1655302612",
        rating: '4.6/5',
        count: '(211)',
        des: '10%NIACINAMIDE FACE SERUM WITH ZINC&ANTIOXIDANTSI ...',
        strikeoff: 665.00,
        price: 598.00,
        itemQty: 1
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASK.jpg?v=1655311025",
        rating: '4.7/5',
        count: '(212)',
        des: 'RETINOL&CERAMIDE AGE DEFENSE NIGHT CREAM FOR FACE ...',
        strikeoff: 945.00,
        price: 850.02,
        itemQty: 1
    }
]

let newArrivals = [
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/prbox.jpg?v=1655304058",
        rating: '5.0/5',
        count: '(2)',
        des: 'BIG BIRTHDAY SPECIAL SKINCAREKIT',
        strikeoff: 3000.00,
        price: 2699,
        itemQty: 1
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN.jpg?v=1655303963",
        rating: '5.0/5',
        count: '(5)',
        des: 'CICA+NIACINAMIDE FACE SUNSCREEN SPF 50 PA +++|BROA ...',
        strikeoff: 595.00,
        price: 494.00,
        itemQty: 1
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20_VITC.jpg?v=1655303889",
        rating: '4.9/5',
        count: '(27)',
        des: '20%VITAMINCSERUM WITH BLOOD ORANGE|FOR SKIN GLO .....',
        strikeoff: 665.00,
        price: 532.00,
        itemQty: 1
    }
]

bestSeller.forEach(function (el) {
    let card = document.createElement('div')
    let img = document.createElement('img')
    img.src = el.img;
    let rating = document.createElement('div')
    rating.setAttribute('class', 'flexdiv')
    let div1 = document.createElement('div')
    let star = document.createElement('span')
    star.setAttribute('class', 'fa fa-star checked')
    let p = document.createElement('p');
    p.innerText = el.rating;
    let count = document.createElement('span')
    count.innerText = el.count;
    div1.append(star, p, count);
    let div2 = document.createElement('div')
    let heart = document.createElement('span')
    heart.setAttribute('class', 'material-symbols-outlined heart')
    heart.innerText = 'favorite';
    div2.append(heart);
    rating.append(div1, div2)
    let des = document.createElement('p')
    des.setAttribute('class', 'text1')
    des.innerText = el.des;
    let strikeoff = document.createElement('span')
    strikeoff.setAttribute('class', 'strikeoff')
    strikeoff.innerText = 'Rs' + el.strikeoff;
    let price = document.createElement('span')
    price.setAttribute('class', 'price');
    price.innerText = "Rs" + el.price;
    let cart = document.createElement('button')
    cart.setAttribute('class', 'addToCart')
    cart.innerText = 'Add to cart'
    cart.addEventListener('click', function () {
        addtoCart(el);
    })

    card.append(img, rating, des, strikeoff, price, cart)
    document.querySelector('#bestSellers').append(card);
})

newArrivals.forEach(function (el) {
    let card = document.createElement('div')
    let img = document.createElement('img')
    img.src = el.img;
    let rating = document.createElement('div')
    rating.setAttribute('class', 'flexdiv')
    let div1 = document.createElement('div')
    let star = document.createElement('span')
    star.setAttribute('class', 'fa fa-star checked')
    let p = document.createElement('p');
    p.innerText = el.rating;
    let count = document.createElement('span')
    count.innerText = el.count;
    div1.append(star, p, count);
    let div2 = document.createElement('div')
    let heart = document.createElement('span')
    heart.setAttribute('class', 'material-symbols-outlined heart')
    heart.innerText = 'favorite';
    div2.append(heart);
    rating.append(div1, div2)
    let des = document.createElement('p')
    des.setAttribute('class', 'text1')
    des.innerText = el.des;
    let strikeoff = document.createElement('span')
    strikeoff.setAttribute('class', 'strikeoff')
    strikeoff.innerText = 'Rs' + el.strikeoff;
    let price = document.createElement('span')
    price.setAttribute('class', 'price');
    price.innerText = "Rs" + el.price;
    let cart = document.createElement('button')
    cart.setAttribute('class', 'addToCart')
    cart.innerText = 'Add to cart'
    cart.addEventListener('click', function () {
        addtoCart(el);
    })

    card.append(img, rating, des, strikeoff, price, cart)
    document.querySelector('#newArrivals').append(card);
})

function addtoCart(el) {
    let cartDataLS = JSON.parse(localStorage.getItem('cartData')) || [];
    cartDataLS.push(el)
    localStorage.setItem('cartData', JSON.stringify(cartDataLS));


}