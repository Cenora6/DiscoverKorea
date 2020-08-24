window.onscroll = function() {
    scrollFunction()
};

// console.log(document.querySelector(".why-container").compareDocumentPosition())

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".navbar-brand").style.fontSize = ".8rem";
        document.querySelector(".logo").style.width = "0";
    } else {
        document.querySelector(".navbar-brand").style.fontSize = "1.5rem";
        document.querySelector(".logo").style.width = "2rem";
    }
}