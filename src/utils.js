export function displayDialogue(text, onDisplayEnd) {
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    dialogueUI.style.display = "block";

    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(() => {
        if (index < text.length) {
            currentText += text[index];
            dialogue.innerHTML = currentText;
            index++;
            return;
        }

        clearInterval(intervalRef);
    }, 1);

    const closeBtn = document.getElementById("close");

    function onCloseBtnClick() {
        onDisplayEnd();
        dialogueUI.style.display = "none";
        dialogue.innerHTML = "";
        clearInterval(intervalRef);
        closeBtn.removeEventListener("click", onCloseBtnClick);
    }

    closeBtn.addEventListener("click", onCloseBtnClick);

    addEventListener("keypress", (key) => {
        if (key.code === "Enter") {
            closeBtn.click();
        }
    });
}

export function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1) {
        k.camScale(k.vec2(1));
        return;
    }
    k.camScale(k.vec2(1.5));
}

export function adjustCanvasSize(k) {
    const canvas = k.canvas;

    // Calculate the scale to fit the window
    const scale = Math.min(window.innerWidth / canvas.width, window.innerHeight / canvas.height);

    // Adjust the canvas size
    canvas.style.transformOrigin = "top left";
    canvas.style.transform = `scale(${scale})`;

    // Optionally center the canvas
    const offsetX = (window.innerWidth - canvas.width * scale) / 2;
    const offsetY = (window.innerHeight - canvas.height * scale) / 2;
    canvas.style.marginLeft = `${offsetX}px`;
    canvas.style.marginTop = `${offsetY}px`;
}
