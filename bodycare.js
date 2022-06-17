bodyScrub=[{
    img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-14.jpg?v=1646477249",
    rating:"4.7/5",
    person:"(26)",
    des:"Vitamin C & Avalon Lemon",
    prodType:"Sugar Body Scrub",
    cancelPrice:"Rs.545",
    price:490,
    itemQty:1,
    dis:"SAVE 10%",
},
{   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-13.jpg?v=1646477177",
    rating:"4.7/5",
    person:"(26)",
    des:"Damask Rose & Lavender",
    prodType:"Gel Body Scrub",
    cancelPrice:"Rs.545",
    price:490,
    itemQty:1,
    dis:"SAVE 10%",
}];

serumLotions=[{
    img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_5_1f30698f-72cf-4165-8bca-302aa29817e2.jpg?v=1646477193",
    rating:"4.7/5",
    person:"(26)",
    des:"Damask Rose & Lavender",
    prodType:"Hydrating Hyaluronic Body Lotion",
    cancelPrice:"Rs.595",
    price:535,
    itemQty:1,
    dis:"SAVE 10%",
},
{   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-11_2.jpg?v=1646477397",
    rating:"4.7/5",
    person:"(26)",
    des:"Avalon Lemon & Verbena",
    prodType:"Vitamin C Glow Body Lotion",
    cancelPrice:"Rs.595",
    price:535,
    itemQty:1,
    dis:"SAVE 10%",
}];

bodyButter=[{
    img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6.jpg?v=1644862704",
    rating:"5.0/5",
    person:"(35)",
    des:"Cocoal & French Vanilla",
    prodType:"Rich Body Butter with 10% SHEA",
    cancelPrice:"Rs.595",
    price:535,
    itemQty:1,
    dis:"SAVE 10%",
},
{   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_2.png?v=1644862556",
    rating:"4.9/5",
    person:"(35)",
    des:"Lavender",
    prodType:"Butter with 5% SHEA",
    cancelPrice:"Rs.595",
    price:535,
    itemQty:1,
    dis:"SAVE 10%",
},
{   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/long_3.png?v=1646650083",
    rating:"4.8/5",
    person:"(26)",
    des:"Avalon Lemon & Vitamin C",
    prodType:"Yoghurt Glow Body Moisturizer",
    cancelPrice:"Rs.595",
    price:535,
    itemQty:1,
    dis:"SAVE 10%",
}];

ourCombos=[{
    img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_8.jpg?v=1643717568",
    rating:"5.0/5",
    person:"(10)",
    des:"Citrus Crush Combo",
    prodType:"",
    cancelPrice:"Rs.1140",
    price:1026,
    itemQty:1,
    dis:"SAVE 10%",
},
{   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_9.jpg?v=1643714860",
    rating:"4.9/5",
    person:"(35)",
    des:"Rosy Affair Combo",
    prodType:"",
    cancelPrice:"Rs.1140",
    price:1026,
    itemQty:1,
    dis:"SAVE 10%",
},
{   img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_7.jpg?v=1643713066",
    rating:"5.0/5",
    person:"(7)",
    des:"Soft and Glow Combo",
    prodType:"",
    cancelPrice:"Rs.1140",
    price:1026,
    itemQty:1,
    dis:"SAVE 10%",
}]

prod=[{
    catName:"BODY",
    cat:"SCRUB",
    slogan:"Buff' that Ruff'"
},
{   catName:"SERUM",
    cat:"LOTIONS",
    slogan:"Hydration Your Bae"
},
{   catName:"BODY",
    cat:"BUTTER",
    slogan:"Buttery, melt-in goodness"
},
{   catName:"OUR",
    cat:"COMBOS",
    slogan:""
}]


prod.forEach(function(ele){
    let ctnm=document.createElement("p");
    ctnm.setAttribute("class","categoryName");
    ctnm.innerText=ele.catName;

    let ctgr=document.createElement("h1");
    ctgr.setAttribute("class","category");
    ctgr.innerText=ele.cat;

    let slgn=document.createElement("p");
    slgn.setAttribute("class","slogan");
    slgn.innerText=ele.slogan;

    let main=document.createElement("div");

    if(ele.cat==="SCRUB"){
        bodyScrub.forEach(function(element){
            display(element);
        })
    }
    if(ele.cat==="LOTIONS"){
        serumLotions.forEach(function(element){
            display(element);
        })
    }
    if(ele.cat==="BUTTER"){
        bodyButter.forEach(function(element){
            display(element);
        })
    }
    if(ele.cat==="COMBOS"){
        ourCombos.forEach(function(element){
            display(element);
        })
    }
function display(element){
        let prod=document.createElement("div");
        prod.setAttribute("class","bodyProd");

            let image=document.createElement("img");
            image.setAttribute("class","prodImage")
            image.setAttribute("src", element.img);

            let discount=document.createElement("p");
            discount.setAttribute("class","discount");
            discount.innerText=element.dis;

            let ratRev=document.createElement("div");
                let star=document.createElement("div");
                let span1=document.createElement("span");
                span1.setAttribute("class","fa fa-star checked");
                star.setAttribute("class","ratingrev")
                
                let rat=document.createElement("p");
                rat.style="margin-left:25px;"
                rat.innerText=element.rating;
                
                let pers=document.createElement("p");
                pers.style="color:blue; margin-left:15px";
                pers.innerText=element.person;
                star.append(span1,rat,pers);
            ratRev.append(star);


            let prodNam=document.createElement("p");
            prodNam.setAttribute("class","prodName");
            prodNam.innerText=element.des;

            let prodTyp=document.createElement("p");
            prodTyp.setAttribute("class","prodType");
            prodTyp.innerText=element.prodType;

            let prices=document.createElement("div");
            prices.setAttribute("class","price");
                let strikepric=document.createElement("span");
                strikepric.setAttribute("class","strikeprice")
                strikepric.innerText=element.cancelPrice;

                let prodPric=document.createElement("p");
                prodPric.setAttribute("class","prodPrice");
                prodPric.innerText=element.price;
                prices.append(strikepric,prodPric);

            let btn=document.createElement("button");
            btn.setAttribute("class","button");
            btn.innerText="ADD TO CART";
            btn.addEventListener("click",function(){
                addCart(element);
            });

            prod.append(discount,image,ratRev,prodNam,prodTyp,prices,btn);
            main.append(prod);
}


document.querySelector(".bodyProd").append(ctnm,ctgr,slgn,main);
})
let login=JSON.parse(localStorage.getItem("login"))||0;
let cartDetail=JSON.parse(localStorage.getItem("cartData")) || [];
function addCart(element){
    if(login===1){
        if(check(element.des)===true){
            cartDetail.push(element);
            localStorage.setItem("cartData",JSON.stringify(cartDetail));
            alert("Product Added To Cart");
        }
        else{
            alert("Product alreay in Cart");
        }
    }
    else{
        window.location.href="signin.html";
    }
}
function check(element){
    let result=cartDetail.filter(function(ele){
        return ele.des===element;
    })
    if(result.length>0){
        return false;
    }
    else{
        return true;
    }
}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}