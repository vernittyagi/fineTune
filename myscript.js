let mySound = document.getElementById("mysound");
let icon = document.getElementById("play-button");


icon.onclick = function () {
    if(mySound.paused) {
        mySound.play();
        icon.classList.remove("fa-play")
        icon.classList.add("fa-pause")
    }
    else {
        mySound.pause();
        icon.classList.remove("fa-pause")
        icon.classList.add("fa-play")
    
    }


}