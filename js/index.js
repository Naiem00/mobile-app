window.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    items.forEach(function (element, index) {
        setTimeout(function () {
            element.classList.add("fade-in");
        }, 200 * index);
    });
});
