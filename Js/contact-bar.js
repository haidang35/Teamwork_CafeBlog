import '../CSS/chatbox.css'
function chatbox(){
    return " <a href=\"#\" class=\"contact-bar\">\n" +
        "        <span>Chat now</span>\n" +
        "        <i class=\"far fa-comment-alt\"></i>\n" +
        "    </a>"
}
var chatbar=document.getElementById("chat-box");
chatbar.innerHTML=chatbox();