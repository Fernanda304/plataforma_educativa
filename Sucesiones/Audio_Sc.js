let audio = document.getElementById('miAudio');

function reproducir() {
    audio.play();
}




function cambioAudio() {
    let audio = document.getElementById("miAudio");
    let button = document.getElementById("cambioAudio");

    if (audio.paused) {
        audio.play();
        button.innerHTML = "⏸";
    } else {
        audio.pause();
        button.innerHTML = "🔇"; 
    }
}
