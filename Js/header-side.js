function headerbox() {
    return  " <section class=\"header-box-top\">\n" +
        "             <a href=\"home.html\"><img src=\"image/blog/logo%20cafe%20blog.png\"></a>\n" +
        "             <div class=\"buy-now-button\">\n" +
        "                 <a href=\"#\">buy now</a>\n" +
        "             </div>\n" +
        "             <div class=\"menu-box-top\">\n" +
        "                 <a href=\"#\">Menu</a>\n" +
        "                 <a href=\"#\"><i class=\"fas fa-bars\"></i></a>\n" +
        "             </div>\n" +
        "         </section>\n" +
        "         <section class=\"header-box-under\">\n" +
        "            <h1>Blog</h1>\n" +
        "         </section>"
}
var header=document.getElementById("header-box");
header.innerHTML=headerbox();
