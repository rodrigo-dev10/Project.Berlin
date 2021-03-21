function sound() {
    var audio = new Audio('som.mp4');
    audio.addEventListener('canplaythrough', function () {
        audio.play();
    });
}