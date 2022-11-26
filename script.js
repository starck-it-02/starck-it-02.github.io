// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
   
    // Menu hamburger moves
    const navIcon4 = document.querySelector("#nav-icon4");
    navIcon4.addEventListener("click", () => {
        navIcon4.classList.toggle("open");
        console.log("testVanilla");
    });

    // Menu slider moves
    const menuHamburger = document.querySelector(".menu-hamburger");
    const navLinks = document.querySelector(".nav-links");
    menuHamburger.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-menu");
        console.log("hello");
    });

    // Button to top
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }
}, false);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}