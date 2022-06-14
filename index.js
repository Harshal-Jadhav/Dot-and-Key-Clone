let sb1_img = document.querySelector('#slidingBanner-1>img')
let sb1_btn = document.querySelectorAll('#slidingBanner-1>button')
let sb1_imgNum = 0;

let sb1_imgArray = [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_4.jpg?v=1651751278",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Desktop_1.jpg?v=1655189395",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1_desk_73e2615b-0026-447e-81af-fe6041105ce8.png?v=1653371967",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_3.jpg?v=1651751278",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-Vit-C_5.jpg?v=1651751278"
]
sb1_img.setAttribute('src', sb1_imgArray[0])

sb1_btn[0].addEventListener('click', sb1_backwards);
sb1_btn[1].addEventListener('click', sb1_forwards);

function sb1_backwards() {
    if (sb1_imgNum == 0) {
        sb1_imgNum = sb1_imgArray.length - 1;
    } else {
        sb1_imgNum--;
    }
    sb1_img.setAttribute('src', sb1_imgArray[sb1_imgNum])
}
function sb1_forwards() {
    if (sb1_imgNum == sb1_imgArray.length - 1) {
        sb1_imgNum = 0;
    } else {
        sb1_imgNum++;
    }
    sb1_img.setAttribute('src', sb1_imgArray[sb1_imgNum])
}

setInterval(sb1_backwards, 3000)