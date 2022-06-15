


//This is for cart data;
let cartData=JSON.parse(localStorage.getItem("cartData")) || [];






//This array of object is for all product detail and product image;
let productData=[{image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Vit-C-Moisturizer-A_-Listing-NEW_e75ddb63-7d9e-4e71-bb35-0e050969a6b1_360x.jpg?v=1654856343",productName:"VITAMIN C MOISTURIZER WITH KAKADU PLUM & VITAMIN E| FADES PIGMENTATION & DARK SPOTS| OILY & DRY SKIN| WOMEN...",highPrice:595.00,lowPrice:565.01},

{image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICANIGHTGEL_360x.jpg?v=1655302658",productName:"CICA NIACINAMIDE NIGHT GEL WITH GREEN TEA, TEA TREE OIL & HYALURONIC| REDUCES ACNE & DARK SPOTS | OILY...",highPrice:595.00,lowPrice:565.01},

{image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_720x.jpg?v=1655302709",productName:"72 HR HYDRATING PROBIOTIC GEL MOISTURIZER FOR FACE WITH HYALURONIC & RICE WATER| FOR...",highPrice:745.00,lowPrice:596.00},

{image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_e423c2c9-3a60-4a5e-9bc0-b0526b7f3c01_360x.jpg?v=1655302612",productName:"RETINOL & CERAMIDE AGE DEFENSE NIGHT CREAM FOR FACE| TREATS FINE LINES & WRINKLES | MATURE...",highPrice:945.00,lowPrice:662.00},

{image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERMELONMOIST_360x.jpg?v=1655303303",productName:"WATERMELON SUPER GLOW MATTE FACE CREAM WITH GLYCOLIC | MINIMIZES PORES & EVENS SKIN TONE|...",highPrice:595.00,lowPrice: 506.00},

{image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-18_360x.jpg?v=1644916747",productName:"AVOCADO SMOOTHIE DAY CREAM SPF 20",highPrice:845.00,lowPrice:592.00},

{image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/day-night_1800x1800_1_360x.png?v=1628595712",productName:"DAY & NIGHT CARE COMBO",highPrice:1590.00,lowPrice:1272.00},

{image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-L_360x.jpg?v=1638974908",productName:"HAND CREAM + SANITIZER, LAVENDER",highPrice:395.00,lowPrice:356.00},

{image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-M_360x.jpg?v=1644916543",productName:"HAND CREAM + SANITIZER, MANDARIN",highPrice:395.00,lowPrice:356.00},

{image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-Rose_360x.jpg?v=1644862602",productName:"HAND CREAM + SANITIZER, ROSE",highPrice:395.00,lowPrice:356.00}
];




 //this img for sowing for first image on moisturizer page;
 let top_loadingImg=document.createElement("div");
 top_loadingImg.setAttribute("class","top_img")
let top_img=document.createElement("img");
top_img.setAttribute("src","https://cdn.shopify.com/s/files/1/0361/8553/8692/collections/By-catagory-11_73cd9359-5cc9-46db-b538-22de93ec14a3_1944x.png?v=1648272494");
top_loadingImg.append(top_img);


//this is for showing the start of section for moisturizer product .this is h1 tag that contain section name;
let name_moisturizer=document.createElement("div");
name_moisturizer.setAttribute("class","sectionName");
name_moisturizer.innerText="MOISTURIZERS";


// //This div is for product and price detaile;
let product_section=document.createElement("div");
product_section.setAttribute("class","products");


//this is for creating product box in products div;
productData.forEach(function(ele){
    let pdiv=document.createElement("div");

    let pimg=document.createElement("img")
    pimg.setAttribute("src",ele.image);

    //This is for rating and wish list button;
    let rw_div=document.createElement("div");
    rw_div.style="display:flex;justify-content:space-between;"

    //This is for rating showing;
    let rating=document.createElement("div");
    rating.style="display:flex;"
    let s1=document.createElement("span");
    s1.setAttribute("class","fa fa-star checked");
    let s2=document.createElement("span");
    s2.setAttribute("class","fa fa-star checked");
    let s3=document.createElement("span");
    s3.setAttribute("class","fa fa-star checked");
    let s4=document.createElement("span");
    s4.setAttribute("class","fa fa-star checked");
    let s5=document.createElement("span");
    s5.setAttribute("class","fa fa-star");
    let s6=document.createElement("p");
    s6.innerText="(296)"
    s6.style="margin:2px 0px 0px 0px"
    rating.append(s1,s2,s3,s4,s5,s6);

    //this is for wish list icon;
    let wishList=document.createElement("i");
    wishList.setAttribute("class","fa fa-heart")
//This is for wishlist icon and rating appending;
    rw_div.append(rating,wishList);
   
    //This is for product Name;
    let pname=document.createElement("div");
    pname.setAttribute("class","productName");
    pname.innerText=ele.productName;
   
 //This div is for price ;
    let priceDiv=document.createElement("div");
    priceDiv.style="text-align:center;font-size:12px;font-weight:bold;"

    let priceFirst=document.createElement("span");
    priceFirst.style="color:gray; text-decoration: line-through;margin-right:5px;" ;
    priceFirst.innerText="Rs: "+ele.highPrice;

    let newPrice=document.createElement("span");
     newPrice.style="color:red;"
    newPrice.innerText="Rs: "+ele.lowPrice;
    priceDiv.append(priceFirst,newPrice)


 //This is for add to cart button and thaire funtionality;

    let cartButtton=document.createElement("button");
    cartButtton.style="width:95%; background-color:gray; color:white; font-weight:bold; margin:auto; border:0px; height:30px; margin-top:15px;";
    cartButtton.innerText="ADD TO CART";

    cartButtton.addEventListener("click",function(){
    let pdataobj={
        image:ele.image,
        name:ele.productName,
        price:ele.lowPrice,

    }
    if(checkproductdata(pdataobj.name)==true){
        cartData.push(pdataobj);
        localStorage.setItem("cartData",JSON.stringify(cartData));
    }else{
        alert("product is already in cart");
    }
})
    



    pdiv.append(pimg,rw_div,pname,priceDiv,cartButtton)
    product_section.append(pdiv)
})


document.querySelector("#main").append(top_loadingImg,name_moisturizer,product_section);


//This function is for check product is present in cart or not if product is persent in cart then dont add same product in cart else add one;
function checkproductdata(name){
    let filered=cartData.filter(function(element){
        return name===element.name;
    })

    if(filered.length>0){
        return false;
    }else{
        return true;
    }
}