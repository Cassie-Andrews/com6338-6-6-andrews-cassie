// implement a hamburger menu within the provided website. 
// Your hamburger menu should only render on smaller screen sizes (those smaller than 800 pixels).

// To hide or show the hamburger menu, you will need to toggle the .show-menu class on the .hamburger-menu element.

// The hamburger menu should display the following behavior:
// 1. When the button.hamburger-btn element is clicked on smaller screens, the hamburger menu should open/close. Again, toggling the show-menu class on the .hamburger-menu element should show/hide the menu.
var hamburgerBtn = document.querySelector("button");
var hamburgerMenu = document.getElementById("main-menu");

hamburgerBtn.addEventListener("click", function() {
    console.log("click!");
    if (hamburgerMenu.style.display === "block") {
        hamburgerMenu.style.display = "none";
    } else {
        hamburgerMenu.style.display = "block";
    }
});

// 2. Clicking outside of .hamburger-menu should close the menu if it is open.

// 3. Clicking inside of .hamburger-menu should NOT close the menu.

// 4. Pressing the Escape key when the menu is open should close the menu and focus button.hamburger-btn.

// 5. Under all circumstances, when the menu is open, aria-expanded should be set to true on button.hamburger-btn, and set to false when the menu is closed.
