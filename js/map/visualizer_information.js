var informationButton = document.getElementById('information-button');
var informationContainer = document.getElementById('information-container');
var infoButtonClicked = false;
var informationContainerShowed = false;

informationButton.addEventListener('click', function () {

    if(!infoButtonClicked){

        informationContainer.classList.add('big');
        setTimeout(function () {
            informationContainer.classList.add('stable');

            setTimeout(function(){
                $('#information-section-main-container').fadeIn();
            }, 950);

        },1000);

        if(!informationContainerShowed){

            var original_data_content_list_template = document.getElementsByTagName("template")[22];
            var original_data_content_list_template_content = document.importNode(original_data_content_list_template.content,true);
            var mainDiv = original_data_content_list_template_content.getElementById("information-section-main-container");
            var options = original_data_content_list_template_content.querySelectorAll(".information-left-column-option");
            var sectionOptions = original_data_content_list_template_content.querySelectorAll(".information-section-content");

            //Information options listener
            options.forEach(function (option) {

                option.addEventListener('click', function () {

                    sectionOptions.forEach(function (section) {
                        $("#" + section.id).hide();
                    });

                    if(option.id.localeCompare("information-about-option") === 0){
                        $("#information-about-content").fadeIn(600);
                    }else if(option.id.localeCompare("information-morphometrics-option") === 0){
                        $("#information-morphometrics-content").fadeIn(600);
                    }else if(option.id.localeCompare("information-field-measurements-option") === 0){
                        $("#information-field-measurements-content").fadeIn(600);
                    }else if(option.id.localeCompare("information-language-option") === 0){
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

            var languageOptions = document.querySelectorAll(".information-language-option");

            languageOptions.forEach(function (languageOption) {

                languageOption.addEventListener('click', function () {

                    if(languageOption.id.localeCompare("information-spanish-language-button") === 0){
                        switchLanguage("es");
                    }else if(languageOption.id.localeCompare("information-english-language-button") === 0){
                        switchLanguage("en");
                    }

                    languageOptions.forEach(function (option) {
                        option.classList.remove("information-language-option-selected");
                    });

                    languageOption.classList.add("information-language-option-selected");

                })

            });

            document.getElementById("information-close-button-container").addEventListener('click', function () {

                $("#information-section-main-container").fadeOut(600, function () {

                    $("#information-container").fadeOut(600, function () {
                        informationContainer.classList.remove('stable');
                        informationContainer.classList.remove('big');
                        infoButtonClicked = false;

                        setTimeout(function () {
                            informationContainer.style.display = "flex";
                        }, 600);

                    });
                });

            });

            informationContainerShowed = true;

        }

        infoButtonClicked = true;

    }else{

    }

});

