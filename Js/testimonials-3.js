  var quote=[
      {
          image:"image/testimonials/customer-1.jpg",
          review:"They Know How to Make Coffee",
          star: 5,
          name:"Jane Parkeron",
          time:"June 8, 2016",
          reviewrate:"I love the coffee and atmosphere at your coffee shop. I attend a meeting there on most Monday mornings. When I arrive, I’m greeted with a smile and the Barista always takes the time to fix my coffee just as I want it. My favorite drink is the Carmel Mocha",
      },
      {
          image:"image/testimonials/customer-1.jpg",
          review:"They Know How to Make Coffee",
          star: 5,
          name:"Jane Parkeron",
          time:"June 8, 2016",
          reviewrate:"I love the coffee and atmosphere at your coffee shop. I attend a meeting there on most Monday mornings. When I arrive, I’m greeted with a smile and the Barista always takes the time to fix my coffee just as I want it. My favorite drink is the Carmel Mocha",
      },
      {
          image:"image/testimonials/customer-1.jpg",
          review:"They Know How to Make Coffee",
          star: 5,
          name:"Jane Parkeron",
          time:"June 8, 2016",
          reviewrate:"I love the coffee and atmosphere at your coffee shop. I attend a meeting there on most Monday mornings. When I arrive, I’m greeted with a smile and the Barista always takes the time to fix my coffee just as I want it. My favorite drink is the Carmel Mocha",
      },
  ]
 function reviewquote(){
    var quote_html="";

    for (var i=0;i<quote.length;i++){
        quote_html+=" <blockquote class=\"quote-1\">\n" +
            "                        <img src=\""+quote[i].image+"\">\n" +
            "                        <div class=\"des-quote-1\">\n" +
            "                            <h2>"+quote[i].review+"</h2>\n" +
            "                            <div class=\"star-rate-reviewer\">\n" +
            "                                <div class=\"star-rate-off-review\">\n" +
            "                                    <div class=\"star-rate-on-review\" style=\"width:"+(quote[i].star)/5*100+"% \"></div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <p class=\"writer-time\">By <span style=\"color: #dea932\">"+quote[i].name+"</span> "+quote[i].time+"</p>\n" +
            "                            <p class=\"content-quote\">\""+quote[i].reviewrate+"\"</p>\n" +
            "                        </div>\n" +
            "\n" +
            "                    </blockquote>"
    }
    return quote_html;

 }
 var blockquote=document.getElementById("quote");
 blockquote.innerHTML=reviewquote();