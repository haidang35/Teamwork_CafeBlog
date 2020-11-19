
function headertop(){
    return " <section class=\"header-box-top\">\n" +
        "            <a href=\"home.html\"><img src=\"image/blog/logo%20cafe%20blog.png\"></a>\n" +
        "            <div class=\"buy-now-button\">\n" +
        "                <a href=\"shop.html\">buy now</a>\n" +
        "            </div>\n" +
        "            <div class=\"menu-box-top\" onclick=\"opensubmenu(this)\" ondblclick=\"closesubmenu(this)\">\n" +
        "                <a href=\"#\">Menu</a>\n" +
        "                <a href=\"#\"><i class=\"fas fa-bars\"></i></a>\n" +
        "                <ul class=\"sub-menu\">\n" +
        "                   <li class=\"home-submenu\">Home</li>\n" +
        "                   <li class=\"about-submenu\">About</li>\n" +
        "                   <li class=\"services-submenu\">Services</li>\n" +
        "                   <li class=\"blog-submenu\">Blog</li>\n" +
        "                   <li class=\"shop-submenu\">Shop</li>\n" +
        "                   <li class=\"contact-submenu\">Contact</li>\n" +
        "                </ul>" +
        "                </div>"
}
 var headerboxtop=document.getElementById("header-box-top");
headerboxtop.innerHTML=headertop();