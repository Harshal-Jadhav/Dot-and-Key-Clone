

//This array of object is for all product detail and product image;
let productData=[{image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Vit-C-Moisturizer-A_-Listing-NEW_e75ddb63-7d9e-4e71-bb35-0e050969a6b1_360x.jpg?v=1654856343",productName:"Vitamin C Moisturizer With Kakadu Plum & Vitamin E| Fades Pigmentation & Dark Spots| Oily & Dry Skin| Women and Men",highPrice:"Rs:595.00",lowPrice:"Rs:565.01"},
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
})



document.querySelector("#main").append(top_loadingImg,name_moisturizer);