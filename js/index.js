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