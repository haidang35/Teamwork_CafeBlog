
var reviewrate=[
    {
        image: "image/testimonials/customer-1.jpg",
        name: "Julia Parker",
        star: 5,
        review:"I love the coffee and atmosphere at your coffee shop. I attend a meeting there on most Monday mornings. When I arrive, I’m greeted with a smile and the Barista always takes the time to fix my coffee just as I want it. My favorite drink is the Carmel Mocha."
    },
    {
        image:"image/testimonials/customer-2.jpg",
        name:"Jim McMillan",
        star:5,
        review: "Great atmosphere, excellent drinks (I tried two of them and plan to work through the menu) and friendly staff - a combination for success! Add the commitment to serve and this is a venture I can endorse without reservation. I will definitely recommend you to my friends.",
    },
    {
        image:"image/testimonials/customer-2.jpg",
        name:"Jim McMillan",
        star:5,
        review: "Great atmosphere, excellent drinks (I tried two of them and plan to work through the menu) and friendly staff - a combination for success! Add the commitment to serve and this is a venture I can endorse without reservation. I will definitely recommend you to my friends.",
    },
    {
        image:"image/testimonials/customer-2.jpg",
        name:"Jim McMillan",
        star:5,
        review: "Great atmosphere, excellent drinks (I tried two of them and plan to work through the menu) and friendly staff - a combination for success! Add the commitment to serve and this is a venture I can endorse without reservation. I will definitely recommend you to my friends.",
    },
    {
        image: "image/testimonials/customer-1.jpg",
        name: "Julia Parker",
        star: 5,
        review:"I love the coffee and atmosphere at your coffee shop. I attend a meeting there on most Monday mornings. When I arrive, I’m greeted with a smile and the Barista always takes the time to fix my coffee just as I want it. My favorite drink is the Carmel Mocha."
    },
    {
        image: "image/testimonials/customer-1.jpg",
        name: "Julia Parker",
        star: 5,
        review:"I love the coffee and atmosphere at your coffee shop. I attend a meeting there on most Monday mornings. When I arrive, I’m greeted with a smile and the Barista always takes the time to fix my coffee just as I want it. My favorite drink is the Carmel Mocha."
    },
    ]
function reviewer(){
    var reviewcontent ="";
    for( var i=0;i<reviewrate.length;i++){
    reviewcontent +=" <div class=\"col-md-4\">\n" +
        "                        <div class=\"review-content-box3\">\n" +
        "                             <img src=\""+reviewrate[i].image+"\">\n" +
        "                             <h3>"+reviewrate[i].name+"</h3>\n" +
        "                            <div class=\"star-rate-reviewer-b3\">\n" +
        "                                <div class=\"star-rate-off-review\">\n" +
        "                                    <div class=\"star-rate-on-review\" style=\"width:"+((reviewrate[i].star)/5*100)+"%\"></div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <p>\n" +
        "                               \" "+reviewrate[i].review+"\"\n" +
        "                            </p>\n" +
        "                            <div class=\"icon-social-box3\">\n" +
        "                                <a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a>\n" +
        "                                <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n" +
        "                                <a href=\"#\"><i class=\"fab fa-linkedin-in\"></i></a>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>"

    }
    return reviewcontent;
}
var review_html=document.getElementById("reviewrate");
    review_html.innerHTML=reviewer();