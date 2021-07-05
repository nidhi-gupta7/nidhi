var currentStatus;
function toggleNavbar() {
    if (currentStatus == "open") {
        document.getElementById("hidden-dropdown").style.display = "none";
        currentStatus = "closed";
        document.getElementById("nav-btn").style.backgroundImage = "url('../imgs/menu-button.png')"
    } else {
        document.getElementById("hidden-dropdown").style.display = "block";
        currentStatus = "open";
        document.getElementById("nav-btn").style.backgroundImage = "url('../imgs/menu-button-active.png')"
    }
}