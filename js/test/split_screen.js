$(document).ready(function () {

    var position = 0;

    document.getElementById("left-arrow-split-screen").addEventListener("click", function () {

        if(position === 0){
            document.getElementById("resize").style.width = "0";
            document.getElementById("right-arrow-split-screen").style.left = "0%";
            document.getElementById("left-arrow-split-screen").style.left = "-40px";
            position = -1;
        }else if(position === 1){
            document.getElementById("resize").style.width = "50%";
            document.getElementById("right-arrow-split-screen").style.left = "50%";
            document.getElementById("left-arrow-split-screen").style.left = "calc(50% - 40px)";
            position = 0;
        }

    });

    document.getElementById("right-arrow-split-screen").addEventListener("click", function () {

        if(position === 0){
            document.getElementById("resize").style.width = "100%";
            document.getElementById("right-arrow-split-screen").style.left = "100%";
            document.getElementById("left-arrow-split-screen").style.left = "calc(100% - 40px)";
            position = 1;
        }else if(position === -1){
            document.getElementById("resize").style.width = "50%";
            document.getElementById("right-arrow-split-screen").style.left = "50%";
            document.getElementById("left-arrow-split-screen").style.left = "calc(50% - 40px)";
            position = 0;
        }

    });

});