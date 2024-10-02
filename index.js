// implement a hamburger menu within the provided website. 
// Your hamburger menu should only render on smaller screen sizes (those smaller than 800 pixels).


var hamburgerBtn = document.querySelector("button.hamburger-btn");
var hamburgerMenu = document.querySelector(".hamburger-menu");


// To hide or show the hamburger menu, you will need to toggle the .show-menu class on the .hamburger-menu element.
// when the menu is open, aria-expanded should be set to true on button.hamburger-btn, and set to false when the menu is closed.

// ADD TOGGLE FUNCTION
function toggleMenu() {
    // Hide/show the hamburger menu by toggling the .show-menu class on the hamburgerMenu
    hamburgerMenu.classList.toggle("show-menu");
    // when the menu is open, aria-expanded should be set to true on button.hamburger-btn
    hamburgerBtn.setAttribute("aria-expanded", hamburgerMenu.classList.contains("show-menu"));
    // when the menu is closed, aria-expanded should be set to false on button.hamburger-btn
}

// The hamburger menu should display the following behavior:
// 1. When the button.hamburger-btn element is clicked on smaller screens, the hamburger menu should open/close. Again, toggling the show-menu class on the .hamburger-menu element should show/hide the menu.
// ADD EVENT LISTENER FOR HAMBURGER BUTTON CLICK
hamburgerBtn.addEventListener ("click", toggleMenu);

// ADD EVENT LISTENER FOR CLICK OUTSIDE MENU TO CLOSE 
document.addEventListener ("click", function(event) {
    if (!hamburgerMenu.contains(event.target) && !hamburgerBtn.contains(event.target) && hamburgerMenu.classList.contains("show-menu")) {
        toggleMenu();
    }
    // 2. Clicking outside of .hamburger-menu should close the menu if it is open.
    // 3. Clicking inside of .hamburger-menu should NOT close the menu.
});





// ADD EVENT LISTENER FOR ESC KEY PRESS TO CLOSE MENU
document.addEventListener ("keypress", function(e) {
    // 4. Pressing the Escape key when the menu is open should close the menu and focus button.hamburger-btn.
    // open menu = var hamburgerMenu class list cont .show-menu
    if (e.key === "Escape" && hamburgerMenu.classList.contains("show-menu")) {
        toggleMenu(); // close menu
        hamburgerBtn.focus(); // focus button.hamburger-btn
    }
});

// 5. Under all circumstances, when the menu is open, aria-expanded should be set to true on button.hamburger-btn, and set to false when the menu is closed.
