import '../CSS/chatbox.css'
function chatbox(){
    return "<div class=\"contact-box\" onclick=\"openchatbox(this); closecontactbar(this)\" >\n" +
        "            <a href=\"#\" class=\"contact-bar\">\n" +
        "                <span>Chat now</span>\n" +
        "                <i class=\"far fa-comment-alt\"></i>\n" +
        "            </a>\n" +
        "            <div class=\"chat-box\">\n" +
        "                <div class=\"chat-box-top\">\n" +
        "                    <a href=\"#\"><i class=\"fas fa-ellipsis-h dots-chat\" ></i></a>\n" +
        "                    <span>Welcome to LiveChat</span>\n" +
        "                    <a href=\"\"><i class=\"fas fa-minus minus-chat\" onclick=\"closechatbox(this)\"></i></a>\n" +
        "                </div>\n" +
        "                <div class=\"form-group input-box\">\n" +
        "                    <p>Welcome to Sales Chat! Please fill in the form below before starting the chat.</p>\n" +
        "                    <label>Name:<span style=\"color: red\">*</span></label><br>\n" +
        "                    <input type=\"text\" name=\"Name\" class=\"form-control\"><br>\n" +
        "                    <label>Email:<span style=\"color: red\">*</span></label><br>\n" +
        "                    <input type=\"email\" name=\"email\" class=\"form-control\">\n" +
        "                    <a href=\"#\" class=\"start-chat-button\">Start the Chat</a>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <script type=\"text/javascript\">\n" +
        "                function openchatbox(e){\n" +
        "                    var items=document.getElementsByClassName(\"contact-box\");\n" +
        "                    for (var i=0;i<items.length;i++){\n" +
        "                        items[i].classList.remove(\"active\");\n" +
        "                    }\n" +
        "                    e.classList.add(\"active\");\n" +
        "                }\n" +
        "                function closechatbox(e){\n" +
        "                    e.classList.remove(\"active\");\n" +
        "                }\n" +
        "                function closecontactbar(e){\n" +
        "                    e.classList.add(\"active\");\n" +
        "                }\n" +
        "            </script>\n" +
        "        </div>"
}
var chatbar=document.getElementById("chat-box");
chatbar.innerHTML=chatbox();