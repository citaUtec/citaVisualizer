var informationButton = document.getElementById('information-button');
var informationContainer = document.getElementById('information-container');

informationButton.addEventListener('click', function () {

    if(informationContainer.classList.contains('big')){
        informationContainer.classList.remove('big');
    }else{
        informationContainer.classList.add('big');
        setTimeout(function () {
            informationContainer.style.height = "100vh";
            informationContainer.style.width = "100vw";
            informationContainer.style.left = "0";
            informationContainer.style.top = "0";
            informationContainer.style.borderRadius = "0";
            setTimeout(function(){
                $('#information-section-main-container').fadeIn();
            }, 950);
        },1000);
    }

    var original_data_content_list_template = document.getElementsByTagName("template")[22];
    var original_data_content_list_template_content = document.importNode(original_data_content_list_template.content,true);
    var mainDiv = original_data_content_list_template_content.getElementById("information-section-main-container");
    var options = original_data_content_list_template_content.querySelectorAll(".information-left-column-option");
    var sectionOptions = original_data_content_list_template_content.querySelectorAll(".information-section-content");

    options.forEach(function (option) {

            option.addEventListener('click', function () {

                sectionOptions.forEach(function (section) {
                    // section.style.display = "none";
                    $("#" + section.id).hide();
                });

                if(option.id.localeCompare("information-about-option") === 0){
                    // document.getElementById("information-about-content").style.display = "block";
                    $("#information-about-content").fadeIn(600);
                }else if(option.id.localeCompare("information-morphometrics-option") === 0){
                    // document.getElementById("information-morphometrics-content").style.display = "block";
                    $("#information-morphometrics-content").fadeIn(600);
                }else if(option.id.localeCompare("information-field-measurements-option") === 0){
                    // document.getElementById("information-field-measurements-content").style.display = "block";
                    $("#information-field-measurements-content").fadeIn(600);
                }else if(option.id.localeCompare("information-language-option") === 0){
                    // document.getElementById("information-language-content").style.display = "block";
                    $("#information-language-content").fadeIn(600);
                }

                options.forEach(function (suboption) {
                    suboption.classList.remove('information-left-column-option-selected')
                });

                if(option.classList.contains('information-left-column-option-selected')){
                    option.classList.remove('information-left-column-option-selected');
                }else{
                    option.classList.add('information-left-column-option-selected');
                }
            })

    });

    informationContainer.appendChild(mainDiv);

    $("#information-section-main-container").hide();

});