document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.morebtn').addEventListener("click", hiddenCloseclick);
});

function hiddenCloseclick() {
    let elements = document.querySelectorAll('.overmore');
    elements.forEach(function(element) {
        if (element.style.display === "none" || element.style.display === "") {
            element.style.display = "flex";
            document.querySelector('.morebtn').innerText = "Скрыть";
        } else {
            element.style.display = "none";
            document.querySelector('.morebtn').innerText = "Показать все";
        }
    });
}