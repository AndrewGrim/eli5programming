function displayContent(elementID) {
    var element = document.getElementById(elementID);
    if (element.style.display === "inline-block" || element.style.display === "") {
        element.style.display = "none";
    } else {
        element.style.display = "inline-block";
    }
}