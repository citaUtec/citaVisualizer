var video = document.getElementById("drone-video-source");
var btn = document.getElementById("drone-overlay-play-button");
btn.addEventListener("click", myFunction);
var closeButton = document.getElementById("drone-overlay-close-button");
closeButton.addEventListener("click", myFunctionClose);
var infoButton = document.getElementById("drone-overlay-information-button");
infoButton.addEventListener("click", toggleInfoVisibility);
var droneVideoOverlay = document.getElementById("droneVideoOverlay");
var infoVisible = true;

function myFunction() {
    if (video.paused) {
        video.play();
        btn.src = "img/side-bar-icon/pause_video_control_icon.png";
    } else {
        video.pause();
        btn.src = "img/side-bar-icon/play_video_control_icon.png";
    }
}

function myFunctionClose() {

    video.pause();
    video.currentTime = 0;
    btn.src = "img/side-bar-icon/play_video_control_icon.png";
    infoVisible = true;
    $("#droneVideoOverlay").fadeOut(350, function () {});
    $("#videoFooter").fadeIn(350, function () {});

}

function toggleInfoVisibility() {

    if(infoVisible) $("#videoFooter").fadeOut(350, function () {});
    if(!infoVisible) $("#videoFooter").fadeIn(350, function () {});
    infoVisible = !infoVisible;

}