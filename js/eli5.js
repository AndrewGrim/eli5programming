/*
Displays or hides the passed in "elementID".

args:
    elementID: String = The string id of the element to be hidden/shown.

returns:
    None
*/
function event_expand(elementID) {
    var element = document.getElementById(elementID);
    if (element.style.display === "inline-block" || element.style.display === "") {
        element.style.display = "none";
    } else {
        element.style.display = "inline-block";
    }
}

/*
Removes the "Read More" button and reveals more text.

args:
    None

returns:
    None
*/
function show_more() {
    var element = document.getElementById("more");
    element.remove()
    element = document.getElementById("more-text");
    element.style.display = "inline";
}