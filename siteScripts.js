var clickCounter = 0;
function showNav() {
    var nav = document.getElementById("nav");
    
    if(clickCounter%2 != 0) {
        nav.classList.remove("nav-after");
        nav.classList.add("none");     
    } else {
        nav.classList.remove("none");    
        nav.classList.add("nav-after");  
    }   
    clickCounter++;
}