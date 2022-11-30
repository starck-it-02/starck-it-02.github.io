document.addEventListener('DOMContentLoaded', () => {
    
    /* ===== HAMBURGER BUTTON ANIMATIONS ===== */
    const mobileMenuIcon = document.getElementById("mobile-menu-icon");
    mobileMenuIcon.addEventListener("click", () => {
        mobileMenuIcon.classList.toggle("open");
        console.log("testVanilla");
    });
    
    /* ===== MENU SLIDER MOVES ===== */
    const menuHamburger = document.querySelector(".menu-hamburger");
    const navLinks = document.querySelector(".nav-links");
    menuHamburger.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-menu");
        console.log("hello4");
    });
    
    /* ===== BUTTON BACK TO THE TOP OF PAGE ===== */
    const mybutton = document.getElementById("goToTopButton");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    /* ===== NAVBAR MENULINKS ANIMATIONS ===== */
    // https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class
    const menuLinks = document.querySelectorAll(".link");
    menuLinks.forEach(link => {
        link.addEventListener('click',() =>{
            menuLinks.forEach(link => {
                link.classList.remove("active");
            });
            link.classList.add("active");
            console.log("link clicked");
            mobileMenuIcon.classList.remove("open");
            navLinks.classList.remove("mobile-menu");
        })   
    });    

    /* ===== STOP NAVBAR COVERING CONTENT ON SCROLL ===== */
    // https://www.youtube.com/watch?v=iGUSTyG-CYw&t=376s
    const navigationHeight = document.querySelector(".navbar").offsetHeight;
    // console.log(document.documentElement);
    document.documentElement.style.setProperty('--scroll-padding',navigationHeight+"px");
    console.log(document.querySelector(".navbar").offsetHeight);

}, false);

// When the user clicks on the button, scroll to the top of the document
function goToTopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}   