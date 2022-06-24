/* Menu Elements */
const toggle = document.querySelector(".toggle");
const menu = document.getElementById("menu");

/* Toggle mobile menu */

function showMobileMenu() {
    menu.classList.remove("nav-desktop");
    menu.classList.add("nav-mobile");
    toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
}

function showDesktopMenu() {
    menu.classList.remove("nav-mobile");
    menu.classList.add("nav-desktop");
    toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
}

function toggleMenu() {
    if (menu.classList.contains("nav-desktop")) {
        showMobileMenu();
    } else {
        showDesktopMenu();
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);


/* Handle ViewPort Changes*/
const mediaQuery = window.matchMedia('(max-width: 710px)');
mediaQuery.addEventListener('change', handleViewPortChange);

function handleViewPortChange() {
    if (!mediaQuery.matches) {

        if (menu.classList.contains("nav-mobile")) {
            showDesktopMenu();
        }
    }
}
