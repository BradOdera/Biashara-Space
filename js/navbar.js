window.onscroll = function() { myFunction() };

var navbar = document.getElementById("whitespaces");
var sticky = sticky.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        whitespaces.classList.add("sticky")
    } else {
        whitespaces.classList.remove("sticky");
    }
}