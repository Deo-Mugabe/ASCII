let animationFrames = [];
let animationInterval;
let currentFrame = 0;
let animationSpeed = 250;

window.onload = function() {
    document.getElementById("start").onclick = startAnimation;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("animation").onchange = loadAnimation;
    document.getElementById("fontsize").onchange = changeFontSize;
    document.getElementById("turbo").onchange = changeSpeed;
};

function startAnimation() {
    let textArea = document.getElementById("text-area");
    animationFrames = textArea.value.split("=====\n");
    currentFrame = 0;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("animation").disabled = true;
    animationInterval = setInterval(showNextFrame, animationSpeed);
}

function stopAnimation() {
    clearInterval(animationInterval);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("animation").disabled = false;
    document.getElementById("text-area").value = animationFrames.join("=====\n");
}

function showNextFrame() {
    document.getElementById("text-area").value = animationFrames[currentFrame];
    currentFrame = (currentFrame + 1) % animationFrames.length;
}

function loadAnimation() {
    let selectedAnimation = document.getElementById("animation").value;
    document.getElementById("text-area").value = ANIMATIONS[selectedAnimation];
}

function changeFontSize() {
    let fontSize = document.getElementById("fontsize").value;
    document.getElementById("text-area").style.fontSize = fontSize;
}

function changeSpeed() {
    if (document.getElementById("turbo").checked) {
        animationSpeed = 50;
    } else {
        animationSpeed = 250;
    }
    if (!document.getElementById("stop").disabled) {
        clearInterval(animationInterval);
        animationInterval = setInterval(showNextFrame, animationSpeed);
    }
}
