
product=[
    {
        image: "image/shop/product-1.png",
        name: "ILLY GROUND COFFEE DRIP GRIND",
        price: "$34.99",
    },
    {
        image: "image/shop/product-2.png",
        name: "LAVAZZA CREMA E GUSTO",
        price: "$25.99",
    },
    {
        image: "image/shop/product-3.png",
        name: "DOUWE EGBERTS EXCELLENT AROMA",
        price: "$27.99",
    },
    {
        image: "image/shop/product-4.png",
        name: "TEECCINO HERBAL COFFEE",
        price: "$32.99",
    },
    {
        image: "image/shop/product-5.png",
        name: "DON FRANCISCO HAWAIIAN HAZELNUT",
        price: "$31.99",
    },
    {
        image: "image/shop/product-6.png",
        name: "FIVE STAR COFFEE",
        price: "$44.99",
    },
    {
        image: "image/shop/product-7.png",
        name: "CINNABON K-CUP PORTION PACK",
        price: "$36.99",
    },
    {
        image: "image/shop/product-8.png",
        name: "KICKING HORSE COFFEE",
        price: "$33.99",
    },
    {
        image: "image/shop/product-9.png",
        name: "CAFÉ DU MONDE FRENCH ROAST",
        price: "$36.50",
    },
]
function product_list(){
    var product_html="";
    for(var i=0;i<product.length;i++){
        product_html+=" <div class=\"col-md-4\">\n" +
            "                     <div class=\"product-box\">\n" +
            "                         <img src=\""+product[i].image+"\">\n" +
            "                         <a style=\"height=54px\" href=\"#\">"+product[i].name+"</a>\n" +
            "                         <p>"+product[i].price+"</p>\n" +
            "                         <a href=\"cart.html\">\n" +
            "                             <div class=\"add-to-cart\">\n" +
            "                                 <span class=\"cart-icon\"><i class=\"fas fa-cart-plus\"></i></span>\n" +
            "                                 <span class=\"add-to-cart-button\">ADD TO CART</span>\n" +
            "                             </div>\n" +
            "                         </a>\n" +
            "                     </div>\n" +
            "                 </div>"
    }
    return product_html;
}
 var product_add=document.getElementById("products");
 product_add.innerHTML=product_list();
