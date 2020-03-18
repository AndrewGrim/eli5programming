function displayContent() {
    var element = document.getElementById("corey-python");
    if (element.style.display === "inline-block" || element.style.display === "") {
        element.style.display = "none";
    } else {
        element.style.display = "inline-block";
    }
}