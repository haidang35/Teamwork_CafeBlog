function headerbox() {
    return  " <section class=\"header-box-top\">\n" +
        "             <img src=\"image/blog/logo%20cafe%20blog.png\">\n" +
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
header.innerText=headerbox();
function headerboxcss(){
    return ".header-box{\n" +
        "    width: auto;\n" +
        "    height: 500px;\n" +
        "}\n" +
        ".header-box-top{\n" +
        "    width: auto;\n" +
        "    height: 80px;\n" +
        "    background-color: white;\n" +
        "}\n" +
        ".header-box-top img{\n" +
        "    width: 200px;\n" +
        "    margin-top: -68px;\n" +
        "    margin-left: 50px;\n" +
        "}\n" +
        ".buy-now-button{\n" +
        "    width: 120px;\n" +
        "    height: 32px;\n" +
        "    background-color: #dea932;\n" +
        "    text-align: center;\n" +
        "    border-radius: 35px;\n" +
        "    float: right;\n" +
        "    margin-top: 21px;\n" +
        "    margin-right: 200px;\n" +
        "}\n" +
        ".buy-now-button a{\n" +
        "    display: block;\n" +
        "    color: white;\n" +
        "    font-size: 15px;\n" +
        "    margin-top: 5px;\n" +
        "    text-decoration: none;\n" +
        "    text-transform: uppercase;\n" +
        "}\n" +
        ".buy-now-button:hover{\n" +
        "    background-color: #0f0f0f;\n" +
        "}\n" +
        ".buy-now-button a:hover{\n" +
        "    color: white;\n" +
        "}\n" +
        ".menu-box-top{\n" +
        "    width: auto;\n" +
        "    height: auto;\n" +
        "    float: right;\n" +
        "    margin-top: 25px;\n" +
        "    margin-right: -256px;\n" +
        "}\n" +
        ".menu-box-top a{\n" +
        "    text-decoration: none;\n" +
        "    color: black;\n" +
        "    font-size: 18px;\n" +
        "    text-transform: uppercase;\n" +
        "    font-weight: bold;\n" +
        "    padding-right: 15px;\n" +
        "    display: block;\n" +
        "    margin-top: 0;\n" +
        "    float: left;\n" +
        "}\n" +
        ".menu-box-top i{\n" +
        "    font-size: 25px;\n" +
        "}\n" +
        ".header-box-under{\n" +
        "    width: auto;\n" +
        "    height: 400px;\n" +
        "    background-image: url(\"../image/blog/background-box-top-header.jpg\");\n" +
        "    overflow: hidden;\n" +
        "    background-repeat: no-repeat;\n" +
        "    background-size: cover;\n" +
        "}\n" +
        ".header-box-under h1{\n" +
        "    color: white;\n" +
        "    text-align: center;\n" +
        "    padding-top: 145px;\n" +
        "    font-size: 65px;\n" +
        "}"
}
var headercs=document.getElementById("header-box");
headercss.innerText=headerboxcss();