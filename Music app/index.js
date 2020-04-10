window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const color = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ];
    //Lets get going with the sound here
    pads.forEach((pad, pos) => {
        pad.addEventListener('click', function () {
            sounds[pos].currentTime = 0;
            sounds[pos].play();
            createBubbles(pos);
        });
    });
    //create a function that creates bubbles
    const createBubbles = (pos) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color[pos];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    }
});