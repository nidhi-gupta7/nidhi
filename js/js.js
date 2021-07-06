var currentStatus;
function toggleNavbar() {
    if (currentStatus == "open") {
        document.getElementById("hidden-dropdown").style.display = "none";
        currentStatus = "closed";
        // document.getElementById("nav-btn").style.backgroundImage = "url(../imgs/menu-button.png)";
    } else {
        document.getElementById("hidden-dropdown").style.display = "block";
        currentStatus = "open";
        // document.getElementById("nav-btn").style.backgroundImage = "url(../imgs/menu-button-active.png)";
    }
}

function copySpanToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("copy-me"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert("Copied the email address to clipboard");
}