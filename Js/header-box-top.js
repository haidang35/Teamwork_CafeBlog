function headertop(){
    return "<section class=\"header-box-top\">\n" +
        "           <a href=\"home.html\"><img src=\"image/blog/logo%20cafe%20blog.png\"></a>\n" +
        "           <div class=\"buy-now-button\">\n" +
        "              <a href=\"#\">buy now</a>\n" +
        "           </div>\n" +
        "           <div class=\"menu-box-top\">\n" +
        "              <a href=\"#\">Menu</a>\n" +
        "              <a href=\"#\"><i class=\"fas fa-bars\"></i></a>\n" +
        "           </div>\n" +
        "        </section>"
}
 var headerboxtop=document.getElementById("header-box-top");
headerboxtop.innerHTML=headertop();