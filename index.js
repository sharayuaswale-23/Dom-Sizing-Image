let image = document.getElementById("image");
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let message = document.getElementById("message");

let width = 200;
let height = 200;

function updateImageSize() {
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    sizeInfo.textContent = `Width: ${width}px`;
}
increaseBtn.addEventListener("click", () => {
    if (width < 300) {
        width += 5;
        height += 5;
        updateImageSize();
        message.textContent = '';
    } else {
        message.textContent = "Too Big. Decrease the size of Image!!!";
    }
});
decreaseBtn.addEventListener("click", () => {
    if (width > 100) {
        width -= 5;
        height -= 5;
        updateImageSize();
        message.textContent = '';
    } else {
        message.textContent = "Can't visible. Increase the size of Image!!!";
    }
});
updateImageSize();
