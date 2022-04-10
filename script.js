AOS.init();

const wpp = document.getElementById('whats-container');
var windowH = window.screen.height;

window.addEventListener('scroll', function(){ 
    scroll = window.scrollY;

    console.log(wpp)

    if(scroll > 100) {
        showElement(wpp)
    } else {
        hideElement(wpp) 
    }
});

function showElement(element) {
    element.classList.add("show");
}

function hideElement(element) {
    element.classList.remove("show");
}