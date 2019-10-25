var informationButton = document.getElementById('information-button');
var informationContainer = document.getElementById('information-container');

informationButton.addEventListener('click', function () {

    if(informationContainer.classList.contains('big')){
        informationContainer.classList.remove('big');
    }else{
        informationContainer.classList.add('big');
    }

    var node = document.createElement("div");
    node.id = "node";
    node.style.backgroundColor = "rgba(0,0,0,0.5)";
    node.style.width = "100%";
    node.style.height = "100%";
    node.style.alignSelf = "center";
    let textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    informationContainer.appendChild(node);
    $("#node").hide();

    setTimeout(function(){
        $('#node').fadeIn();
    }, 1000);


});