//<editor-fold desc="VARIABLES">

/**
 * @param panelsToggle: Boolean that indicates if the panels changed (from cita to background data and viceversa)
 * @param UHDMarkerIndexTop: Number that indicates the section selected (changes when the marker is clicked or the section is selected from the dropdown)
 * @param UHDMarkerIndexBottom: Number that indicates the section selected (changes when the marker is clicked or the section is selected from the dropdown)
 * @param isYearPlaying: Boolean that indicates if the progress bar is active (changes when the play/pause button is clicked)
 * @param id: Auxiliar variable used to define a setTimeout function
 * @param width: Number that indicates the percentage the progress bar has moved (goes from 1 to 100%)
 */
var panelsToggle = false;
var UHDMarkerIndexTop = -1;
var UHDMarkerIndexBottom = -1;
var isYearPlaying = false;
var id;
var width = 1;

//</editor-fold>



//<editor-fold desc="FUNCTIONS">

/**
 * Generates the drone card list overlay displaying all the available flight videos as a grid
 */
function renderDroneVideoList(){

    document.getElementById("drone-flights-card-container-close-button").addEventListener("click", function () {
        fadeOutElements(["drone-flights-card-container"], 350);
        data_submenu_options[5].options[1].submenu_option_enabled_state = false;
        reloadMenuOptionsAvailabilityForRiver(5, 1);
    });

    var drone_video_card_template = document.getElementsByTagName("template")[10];

    for (var i = 0; i < drone_flights_JSON.length; i++){

        var drone_video_card_template_content = document.importNode(drone_video_card_template.content,true);

        (function (i) {

            drone_video_card_template_content.getElementById("drone-card-container").addEventListener("click", function () {
                document.getElementById("drone-video-source").src = drone_flights_JSON[i].code;
                document.getElementById("droneVideoOverlay").style.visibility = "visible";
                fadeInElements(["droneVideoOverlay"], 350);
            });

        })(i);

        drone_video_card_template_content.getElementById("hero-image-drone-card").style.backgroundImage = "url(" + drone_flights_JSON[i].thumbnail_image + ")";
        drone_video_card_template_content.getElementById("drone-card-video-title").innerHTML = drone_flights_JSON[i].title;
        drone_video_card_template_content.getElementById("drone-card-video-description").innerHTML = drone_flights_JSON[i].location;
        document.getElementById("drone-flights-card-container").appendChild(drone_video_card_template_content);
    }

}

/**
 * Toggles cita panel visible (including all the child elements)
 */
function citaPanelVisible(){
    document.getElementById("data-original-container").style.display = "flex";
    document.getElementById("data-background-container").style.display = "none";
    document.getElementById("background-panel-cita-title").classList.add("panel-title-selected");
    document.getElementById("cita-panel-cita-title").classList.add("panel-title-selected");
    document.getElementById("background-panel-background-title").classList.remove("panel-title-selected");
    document.getElementById("cita-panel-background-title").classList.remove("panel-title-selected");
}

/**
 * Toggles background data panel visible (including all the child elements)
 */
function backgroundPanelVisible() {
    document.getElementById("data-original-container").style.display = "none";
    document.getElementById("data-background-container").style.display = "flex";
    document.getElementById("background-panel-cita-title").classList.remove("panel-title-selected");
    document.getElementById("cita-panel-cita-title").classList.remove("panel-title-selected");
    document.getElementById("background-panel-background-title").classList.add("panel-title-selected");
    document.getElementById("cita-panel-background-title").classList.add("panel-title-selected");
}

/**
 * Changes all the texts (p, span, etc) to spanish language (all the strings are defined in a JSON file inside the project)
 */
function spanishLanguageClickFunction(){
    switchLanguage("es");
    document.getElementById("spanish-button").src = "img/side-bar-icon/spanish_language_enabled_icon.png";
    document.getElementById("english-button").src = "img/side-bar-icon/english_language_icon.png";
    document.getElementById("dancing-rivers-logo-overlay").src = "img/Piura/logos/dancing_rivers_spanish.png";
    toggleButtonTooltipLanguage();
}

/**
 * Changes all the texts (p, span, etc) to english language (all the strings are defined in a JSON file inside the project)
 */
function engliishLanguageClickFunction(){
    switchLanguage("en");
    document.getElementById("english-button").src = "img/side-bar-icon/english_language_enabled_icon.png";
    document.getElementById("spanish-button").src = "img/side-bar-icon/spanish_language_icon.png";
    document.getElementById("dancing-rivers-logo-overlay").src = "img/Piura/logos/dancing_rivers_english.png";
    toggleButtonTooltipLanguage();
}

/**
 * Changes buttons title (text that appears when button is hovered) language
 */
function toggleButtonTooltipLanguage(){

    document.getElementById("english-button").title = $.i18n("english_submenu_option_title_id");
    document.getElementById("spanish-button").title = $.i18n("spanish_submenu_option_title_id");
    document.getElementById("clear-map-button").title = $.i18n("clear_map_menu_option_title_id");

}

/**
 * Removes all the layers from the map and restarts the enable/disabled status of the submenus
 */
function clearMapSubmenuOptionClicked() {

    clearMap();
    clearBackgroundData();
    reloadMenuOptionsAvailabilityForRiver(0, 4);
    reloadMenuOptionsAvailabilityForRiver(1, 4);
    reloadMenuOptionsAvailabilityForRiver(2, 4);
    reloadMenuOptionsAvailabilityForRiver(5, 4);

}

/**
 * Adds the cita logo template to the corresponding container
 */
function addCITALogo() {

    var citaLogoTemplate = document.getElementsByTagName("template")[0];
    var citaLogoTemplateContent = document.importNode(citaLogoTemplate.content,true);
    document.getElementById("logo-template-container").appendChild(citaLogoTemplateContent);

}

/**
 * Adds the dancing rivers logo template to the corresponding container
 */
function addDancingRiversLogo() {

    var dancingRiversLogoTemplate = document.getElementsByTagName("template")[15];
    var dancingRiversLogoTemplateContent = document.importNode(dancingRiversLogoTemplate.content,true);
    document.getElementById("dancing-rivers-logo-template-container").appendChild(dancingRiversLogoTemplateContent);

}

/**
 * Add listeners to the elements of the panel (left/right arrow, panel title buttons)
 */
function addLeftPanelToggleListener() {

    var left_panel = document.getElementById("side-bar-left");
    var right_panel = document.getElementById("side-bar-right");
    var cita_panel_background_title = document.getElementById("cita-panel-background-title");
    var cita_panel_cita_title = document.getElementById("cita-panel-cita-title");
    var background_panel_background_title = document.getElementById("background-panel-background-title");
    var background_panel_cita_title = document.getElementById("background-panel-cita-title");
    var dancingRiversFooterLogo = document.getElementById("dancing-rivers-footer-logo");
    var dancingRiversFooterLogo2 = document.getElementById("dancing-rivers-footer-logo-2");
    var headerLogos = document.querySelectorAll(".header-logo");

    cita_panel_cita_title.style.color = panel_header_title_color;
    cita_panel_background_title.style.color = panel_header_title_color;
    background_panel_cita_title.style.color = panel_header_title_color;
    background_panel_background_title.style.color = panel_header_title_color;

    (function (right_panel, left_panel, cita_panel_cita_title, cita_panel_background_title, background_panel_cita_title, background_panel_background_title, panelsToggle) {

        document.getElementById("left-panel-toggle-button").addEventListener("click", function () {

            if(panelsToggle){
                left_panel.style.width = "18vw";
                right_panel.style.width = "18vw";

                headerLogos.forEach(function (logo) {
                    // logo.style.display = "none";
                    $("#" + logo.id).fadeOut(150);
                });

                setTimeout(function () {
                    $("#dancing-rivers-footer-logo").fadeIn();
                    $("#dancing-rivers-footer-logo-2").fadeIn();
                }, 200);

                setTimeout(function () {
                    cita_panel_cita_title.style.display = "flex";
                    cita_panel_background_title.style.display = "flex";
                    background_panel_cita_title.style.display = "flex";
                    background_panel_background_title.style.display = "flex";
                    document.getElementById("right-side-bar-header").style.justifyContent = "space-between";
                    document.getElementById("left-side-bar-header").style.justifyContent = "space-between";
                    $("#dancing-rivers-footer-logo").fadeIn();
                    $("#dancing-rivers-footer-logo-2").fadeIn();
                }, 450);

                fadeInElements(["rivers_menu_option_title_id", "morphometrics_menu_option_title_id", "field_measurements_menu_option_title_id", "amazon_forests_menu_option_title_id", "biodiversity_menu_option_title_id", "drone_menu_option_title_id", "rivers_menu_option_id", "metrics_menu_option_id", "measurements_menu_option_id", "amazon_forests_menu_option_id", "biodiversity_menu_option_id", "drone_menu_option_id"], 500);
                document.getElementById("left-panel-toggle-button").src = "img/side-bar-icon/arrow_left_icon.png";
                document.getElementById("right-panel-toggle-button").src = "img/side-bar-icon/arrow_left_icon.png";

            }else{
                left_panel.style.width = "4.5vw";
                right_panel.style.width = "4.5vw";
                $("#dancing-rivers-footer-logo").fadeOut(50);
                $("#dancing-rivers-footer-logo-2").fadeOut(50);
                cita_panel_cita_title.style.display = "none";
                cita_panel_background_title.style.display = "none";
                background_panel_cita_title.style.display = "none";
                background_panel_background_title.style.display = "none";
                document.getElementById("right-side-bar-header").style.justifyContent = "center";
                document.getElementById("left-side-bar-header").style.justifyContent = "center";
                hideElements(["rivers_menu_option_title_id", "morphometrics_menu_option_title_id", "field_measurements_menu_option_title_id", "amazon_forests_menu_option_title_id", "biodiversity_menu_option_title_id", "drone_menu_option_title_id", "rivers_menu_option_id", "metrics_menu_option_id", "measurements_menu_option_id", "amazon_forests_menu_option_id", "biodiversity_menu_option_id", "drone_menu_option_id"]);
                document.getElementById("left-panel-toggle-button").src = "img/side-bar-icon/arrow_right_icon.png";
                document.getElementById("right-panel-toggle-button").src = "img/side-bar-icon/arrow_right_icon.png";

                setTimeout(function () {
                    headerLogos.forEach(function (logo) {
                        $("#" + logo.id).fadeIn();
                    })
                }, 450);

            }

            panelsToggle = !panelsToggle;

        });

        cita_panel_cita_title.addEventListener("click", citaPanelVisible);
        cita_panel_background_title.addEventListener("click", backgroundPanelVisible);
        background_panel_cita_title.addEventListener("click", citaPanelVisible);
        background_panel_background_title.addEventListener("click", backgroundPanelVisible);

    }(right_panel, left_panel, cita_panel_cita_title, cita_panel_background_title, background_panel_cita_title, background_panel_background_title, panelsToggle));

}


/**
 * Add listeners to the elements of the panel (left/right arrow, panel title buttons)
 */
function addRightPanelToggleListener() {

    var right_panel = document.getElementById("side-bar-right");
    var left_panel = document.getElementById("side-bar-left");
    var cita_panel_background_title = document.getElementById("cita-panel-background-title");
    var cita_panel_cita_title = document.getElementById("cita-panel-cita-title");
    var background_panel_background_title = document.getElementById("background-panel-background-title");
    var background_panel_cita_title = document.getElementById("background-panel-cita-title");
    var dancingRiversFooterLogo = document.getElementById("dancing-rivers-footer-logo");
    var dancingRiversFooterLogo2 = document.getElementById("dancing-rivers-footer-logo-2");
    var headerLogos = document.querySelectorAll(".header-logo");

    cita_panel_cita_title.style.color = panel_header_title_color;
    cita_panel_background_title.style.color = panel_header_title_color;
    background_panel_cita_title.style.color = panel_header_title_color;
    background_panel_background_title.style.color = panel_header_title_color;

    (function (right_panel, left_panel, cita_panel_cita_title, cita_panel_background_title, background_panel_cita_title, background_panel_background_title, panelsToggle) {

        document.getElementById("right-panel-toggle-button").addEventListener("click", function () {

            if(panelsToggle){
                right_panel.style.width = "18vw";
                left_panel.style.width = "18vw";

                headerLogos.forEach(function (logo) {
                    $("#" + logo.id).fadeOut(150);
                });

                setTimeout(function () {
                    $("#dancing-rivers-footer-logo").fadeIn();
                    $("#dancing-rivers-footer-logo-2").fadeIn();
                }, 200);

                setTimeout(function () {
                    cita_panel_cita_title.style.display = "flex";
                    cita_panel_background_title.style.display = "flex";
                    background_panel_cita_title.style.display = "flex";
                    background_panel_background_title.style.display = "flex";
                    document.getElementById("left-side-bar-header").style.justifyContent = "space-between";
                    document.getElementById("right-side-bar-header").style.justifyContent = "space-between";
                }, 450);

                fadeInElements(["communities-menu-option-title-id", "dem-menu-option-title-id", "fires-menu-option-title-id", "geology-menu-option-title-id", "infrastructure-menu-option-title-id", "land-use-menu-option-title-id", "pna-menu-option-title-id", "transport-menu-option-title-id", "vegetation-menu-option-title-id"], 350);
                document.getElementById("left-panel-toggle-button").src = "img/side-bar-icon/arrow_left_icon.png";
                document.getElementById("right-panel-toggle-button").src = "img/side-bar-icon/arrow_left_icon.png";

            }else{
                right_panel.style.width = "4.5vw";
                left_panel.style.width = "4.5vw";
                $("#dancing-rivers-footer-logo").fadeOut(50);
                $("#dancing-rivers-footer-logo-2").fadeOut(50);
                cita_panel_cita_title.style.display = "none";
                cita_panel_background_title.style.display = "none";
                background_panel_cita_title.style.display = "none";
                background_panel_background_title.style.display = "none";
                document.getElementById("left-side-bar-header").style.justifyContent = "center";
                document.getElementById("right-side-bar-header").style.justifyContent = "center";
                hideElements(["communities-menu-option-title-id", "dem-menu-option-title-id", "fires-menu-option-title-id", "geology-menu-option-title-id", "infrastructure-menu-option-title-id", "land-use-menu-option-title-id", "pna-menu-option-title-id", "transport-menu-option-title-id", "vegetation-menu-option-title-id"]);
                document.getElementById("left-panel-toggle-button").src = "img/side-bar-icon/arrow_right_icon.png";
                document.getElementById("right-panel-toggle-button").src = "img/side-bar-icon/arrow_right_icon.png";

                setTimeout(function () {
                    headerLogos.forEach(function (logo) {
                        $("#" + logo.id).fadeIn();
                    })
                }, 450);

            }

            panelsToggle = !panelsToggle

        });

        cita_panel_cita_title.addEventListener("click", citaPanelVisible);
        cita_panel_background_title.addEventListener("click", backgroundPanelVisible);
        background_panel_cita_title.addEventListener("click", citaPanelVisible);
        background_panel_background_title.addEventListener("click", backgroundPanelVisible);

    }(right_panel, left_panel, cita_panel_cita_title, cita_panel_background_title, background_panel_cita_title, background_panel_background_title, panelsToggle));

}

/**
 * Creates the legend for the corresponding parameters colors and labels (texts)
 * @param legendColorsArray
 * @param legendLabelsArray
 */
function addMorphometricsLegend(legendColorsArray, legendLabelsArray) {

    //For height and width of the color elements the space calculated was 65% of the legend container

    hideElements(["morphometrics-legend-container"]);
    var legendContainerTemplate = document.getElementsByTagName("template")[7];

    for(var i = 0; i < legendColorsArray.length; i++){

        var legendContainerTemplateContent = document.importNode(legendContainerTemplate.content,true);
        legendContainerTemplateContent.getElementById("legend-image").style.backgroundColor = legendColorsArray[i];
        legendContainerTemplateContent.getElementById("legend-image").style.width = 65/legendColorsArray.length + "%";
        legendContainerTemplateContent.getElementById("legend-span").innerHTML = legendLabelsArray[i];
        legendContainerTemplateContent.getElementById("legend-subcontainer").style.height = 65/legendColorsArray.length + "%";
        document.getElementById("legend-content").appendChild(legendContainerTemplateContent);

    }

    document.getElementById("morphometrics-legend-container").style.visibility = "visible";
    fadeInElements(["morphometrics-legend-container"], 500);

}

/**
 * Creates an extra legend container for the corresponding parameters colors and labels (texts)
 * @param legendColorsArray
 * @param legendLabelsArray
 */
function addExtraLegend(legendColorsArray, legendLabelsArray) {

    //For height and width of the color elements the space calculated was 65% of the legend container

    hideElements(["extra-legend-container"]);
    var legendContainerTemplate = document.getElementsByTagName("template")[18];

    for(var i = 0; i < legendColorsArray.length; i++){

        var legendContainerTemplateContent = document.importNode(legendContainerTemplate.content,true);
        legendContainerTemplateContent.getElementById("extra-legend-image").style.backgroundColor = legendColorsArray[i];
        legendContainerTemplateContent.getElementById("extra-legend-image").style.width = 65/legendColorsArray.length + "%";
        legendContainerTemplateContent.getElementById("extra-legend-span").innerHTML = legendLabelsArray[i];
        legendContainerTemplateContent.getElementById("extra-legend-subcontainer").style.height = 65/legendColorsArray.length + "%";
        document.getElementById("extra-legend-content").appendChild(legendContainerTemplateContent);

    }

    document.getElementById("extra-legend-container").style.visibility = "visible";
    fadeInElements(["extra-legend-container"], 500);

}

/**
 * Creates background data legend container for the corresponding parameters colors and labels (texts)
 * @param legendColorsArray
 * @param legendLabelsArray
 */
function addBackgroundDataLegend(legendColorsArray, legendLabelsArray) {

    //For height and width of the color elements the space calculated was 65% of the legend container

    hideElements(["background-legend-container"]);
    var legendContainerTemplate = document.getElementsByTagName("template")[19];

    for(var i = 0; i < legendColorsArray.length; i++){

        var legendContainerTemplateContent = document.importNode(legendContainerTemplate.content,true);
        legendContainerTemplateContent.getElementById("background-legend-image").style.backgroundColor = legendColorsArray[i];
        legendContainerTemplateContent.getElementById("background-legend-image").style.width = 65/legendColorsArray.length + "%";
        legendContainerTemplateContent.getElementById("background-legend-span").innerHTML = legendLabelsArray[i];
        legendContainerTemplateContent.getElementById("background-legend-subcontainer").style.height = 65/legendColorsArray.length + "%";
        document.getElementById("background-legend-content").appendChild(legendContainerTemplateContent);

    }

    document.getElementById("background-legend-container").style.visibility = "visible";
    fadeInElements(["background-legend-container"], 500);

}

/**
 * Adds the 8 year progress bar including listeners for the play/pause button and each year container
 */
function addYearProgressBar8(){

    removeElementChildNodes(["progress-bar-container"]);
    var progressBarTemplate = document.getElementsByTagName("template")[8];
    var progressBarTemplateContent = document.importNode(progressBarTemplate.content,true);
    document.getElementById("progress-bar-container").appendChild(progressBarTemplateContent);
    document.getElementById("play-pause-year-button").addEventListener("click", playYearSlider8);
    setYearContainersListener8();

}

/**
 * Adds the 8 year progress bar including listeners for the play/pause button and each year container
 */
function addMigrationYearProgressBar8(){

    removeElementChildNodes(["progress-bar-container"]);
    var progressBarTemplate = document.getElementsByTagName("template")[20];
    var progressBarTemplateContent = document.importNode(progressBarTemplate.content,true);
    document.getElementById("progress-bar-container").appendChild(progressBarTemplateContent);
    document.getElementById("play-pause-year-button").addEventListener("click", playYearSlider8);
    setYearContainersListener8();

}

/**
 * Sets click, mouseover and mouseout listener to each year container
 */
function setYearContainersListener8(){

    document.querySelectorAll(".year-label-container").forEach(function (yearContainer) {

        yearContainer.addEventListener("click", function () {

            showLoader();

            document.getElementById("play-pause-year-button").src = "img/side-bar-icon/play_icon.png";
            clearInterval(id);
            isYearPlaying = false;

            setTimeout(function () {

                if(yearContainer.id === "year-label-1"){

                    document.getElementById("myBar").style.width = "12.5%";
                    width = 12;

                    if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 0);
                    }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 0);
                    }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 0);
                    }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        toggleDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer, 0);
                    }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                    }

                }else if(yearContainer.id === "year-label-2"){

                    document.getElementById("myBar").style.width = "25%";
                    width = 25;

                    if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 1);
                        toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 1);
                    }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 1);
                        toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 1);
                    }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 1);
                        toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 1);
                    }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        toggleDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer, 1);
                    }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                    }

                }else if(yearContainer.id === "year-label-3"){

                    document.getElementById("myBar").style.width = "37.5%";
                    width = 38;

                    if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 2);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 2);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 2);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        toggleDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer, 2);
                    }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                    }

                }else if(yearContainer.id === "year-label-4"){

                    console.log("6");
                    document.getElementById("myBar").style.width = "50%";
                    width = 50;

                    if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 3);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 3);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 3);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        toggleDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer, 3);
                    }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                    }

                }else if(yearContainer.id === "year-label-5"){

                    document.getElementById("myBar").style.width = "62.5%";
                    width = 63;

                    if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 4);
                        toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 3);
                    }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 4);
                        toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 3);
                    }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 4);
                        toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 3);
                    }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        toggleDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer, 4);
                    }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                    }

                }else if(yearContainer.id === "year-label-6"){

                    document.getElementById("myBar").style.width = "75%";
                    width = 75;

                    if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 5);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 5);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 5);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        toggleDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer, 5);
                    }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                    }

                }else if(yearContainer.id === "year-label-7"){

                    document.getElementById("myBar").style.width = "87.5%";
                    width = 88;

                    if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 6);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 6);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 6);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        toggleDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer, 6);
                    }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                    }

                }else if(yearContainer.id === "year-label-8"){

                    document.getElementById("myBar").style.width = "100%";
                    width = 100;

                    if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 7);
                        toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 5);
                    }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 7);
                        toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 5);
                    }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer);
                        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 7);
                        toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 5);
                    }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                        disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                        toggleDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer, 7);
                    }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                    }

                }

                document.querySelectorAll(".year-label").forEach(function (label) {
                    label.classList.remove("year-label-active");
                });

                document.querySelectorAll(".year-label-container").forEach(function (label) {
                    label.classList.remove("year-label-container-active");
                });

                yearContainer.classList.add("year-label-container-active");
                yearContainer.querySelector(".year-label").classList.add("year-label-active");

                hideLoader();

            }, 1000);

        });

        yearContainer.addEventListener("mouseover", function () {

            yearContainer.classList.add("year-label-container-active-hover");
            yearContainer.querySelector(".year-label").classList.add("year-label-active-hover");

        });

        yearContainer.addEventListener("mouseout", function () {

            yearContainer.classList.remove("year-label-container-active-hover");
            yearContainer.querySelector(".year-label").classList.remove("year-label-active-hover");

        });

    });

}

/**
 * Logic for the 8 year progress bar animation (including width and data layer changes)
 */
function playYearSlider8() {

    document.getElementById("play-pause-year-button").src = isYearPlaying ? "img/side-bar-icon/play_icon.png" : "img/side-bar-icon/pause_icon.png";

    if(!isYearPlaying){
        id = setInterval(frame, 50);
    }

    function frame(){

        if (width >= 100 || !isYearPlaying) {
            clearInterval(id);
            document.getElementById("play-pause-year-button").src = "img/side-bar-icon/play_icon.png";
            isYearPlaying = false;
            if(width >= 100) width = 12;
            document.getElementById("myBar").style.width = width + '%';
        } else {
            width = width + 1;
            document.getElementById("myBar").style.width = width + '%';
        }

        document.querySelectorAll(".year-label-container").forEach(function (yearContainer) {

            yearContainer.classList.remove("year-label-container-active");
            yearContainer.querySelector(".year-label").classList.remove("year-label-active");

        });


        if(width <= 12.5){

            document.getElementById("year-label-1").classList.add("year-label-container-active");
            document.getElementById("year-label-1").querySelector(".year-label").classList.add("year-label-active");

            if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                disableDataLayerVisibility(ucayali_migration_data_layers);
                toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 0);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
            }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                disableDataLayerVisibility(ucayali_migration_data_layers);
                toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 0);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
            }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(ucayali_migration_data_layers);
                toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 0);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
            }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                toggleDataLayerVisibility(ucayali_migration_data_layers, 0);
            }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

            }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 0);
            }

        }else if(width > 12.5 && width <= 25.0){

            document.getElementById("year-label-2").classList.add("year-label-container-active");
            document.getElementById("year-label-2").querySelector(".year-label").classList.add("year-label-active");

            if(width === 18){

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 1);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 1);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 1);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 1);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 1);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 1);
                }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(ucayali_migration_data_layers, 1);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 1);
                }

            }

        }else if(width > 25.0 && width <= 37.5){

            document.getElementById("year-label-3").classList.add("year-label-container-active");
            document.getElementById("year-label-3").querySelector(".year-label").classList.add("year-label-active");

            if(width === 31) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 2);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 2);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 2);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(ucayali_migration_data_layers, 2);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 2);
                }

            }

        }else if(width > 37.5 && width <= 50){

            document.getElementById("year-label-4").classList.add("year-label-container-active");
            document.getElementById("year-label-4").querySelector(".year-label").classList.add("year-label-active");

            if(width === 43) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 3);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 3);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 3);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(ucayali_migration_data_layers, 3);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 3);
                }

            }

        }else if(width > 50 && width <= 62.5){

            document.getElementById("year-label-5").classList.add("year-label-container-active");
            document.getElementById("year-label-5").querySelector(".year-label").classList.add("year-label-active");

            if(width === 56) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 4);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 3);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 4);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 3);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 4);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 3);
                }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(ucayali_migration_data_layers, 4);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 4);
                }

            }

        }else if(width > 62.5 && width <= 75.0){

            document.getElementById("year-label-6").classList.add("year-label-container-active");
            document.getElementById("year-label-6").querySelector(".year-label").classList.add("year-label-active");

            if(width === 69) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 5);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 5);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 5);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(ucayali_migration_data_layers, 5);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 5);
                }

            }

        }else if(width > 75.0 && width <= 87.5){

            document.getElementById("year-label-7").classList.add("year-label-container-active");
            document.getElementById("year-label-7").querySelector(".year-label").classList.add("year-label-active");

            if(width === 81) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 6);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 6);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 6);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(ucayali_migration_data_layers, 6);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 6);
                }

            }

        }else if(width > 87.5 && width <= 100){

            document.getElementById("year-label-8").classList.add("year-label-container-active");
            document.getElementById("year-label-8").querySelector(".year-label").classList.add("year-label-active");

            if(width === 94) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 7);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 5);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 7);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 5);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(ucayali_migration_data_layers);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 7);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 5);
                }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(ucayali_migration_data_layers, 7);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 7);
                }

            }

        }

    }

    isYearPlaying = !isYearPlaying;

}

/**
 * Adds the 6 year progress bar including listeners for the play/pause button and each year container
 */
function addYearProgressBar6(){

    removeElementChildNodes(["progress-bar-container"]);
    var progressBarTemplate = document.getElementsByTagName("template")[9];
    var progressBarTemplateContent = document.importNode(progressBarTemplate.content,true);
    document.getElementById("progress-bar-container").appendChild(progressBarTemplateContent);
    document.getElementById("play-pause-year-button").addEventListener("click", playYearSlider6);
    setYearContainersListener6();

}

/**
 * Sets click, mouseover and mouseout listener to each year container
 */
function setYearContainersListener6(){

    document.querySelectorAll(".year-label-container").forEach(function (yearContainer) {

        yearContainer.addEventListener("click", function () {

            document.getElementById("play-pause-year-button").src = "img/side-bar-icon/play_icon.png";
            clearInterval(id);
            isYearPlaying = false;

            if(yearContainer.id === "year-label-1"){

                document.getElementById("myBar").style.width = "16.67%";
                width = 18;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 0);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 0);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 0);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 0);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 0);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 0);
                }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[5].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer, 0);
                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 0);
                }


            }else if(yearContainer.id === "year-label-2"){

                document.getElementById("myBar").style.width = "33.34%";
                width = 34;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 1);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 1);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 1);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 1);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 1);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 1);
                }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 0);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 0);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 0);
                }else if(data_submenu_options[1].options[5].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer, 1);
                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 1);
                }

            }else if(yearContainer.id === "year-label-3"){

                document.getElementById("myBar").style.width = "50.01%";
                width = 50;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 2);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 2);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 2);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 2);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 2);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 2);
                }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 1);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 1);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 1);
                }else if(data_submenu_options[1].options[5].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer, 2);
                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 2);
                }

            }else if(yearContainer.id === "year-label-4"){

                document.getElementById("myBar").style.width = "66.68%";
                width = 67;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 3);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 3);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 3);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 3);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 3);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 3);
                }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 2);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 2);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 2);
                }else if(data_submenu_options[1].options[5].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer, 3);
                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 3);
                }

            }else if(yearContainer.id === "year-label-5"){

                document.getElementById("myBar").style.width = "83.35%";
                width = 84;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 4);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 4);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 4);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 4);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 4);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 4);
                }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 3);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 3);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 3);
                }else if(data_submenu_options[1].options[5].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer, 4);
                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 4);
                }

            }else if(yearContainer.id === "year-label-6"){
                document.getElementById("myBar").style.width = "100%";
                width = 100;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    console.log("Q");
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 5);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 5);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 5);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 5);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 5);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 5);
                }else if(data_submenu_options[1].options[3].submenu_option_enabled_state){

                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 4);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 4);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 4);
                }else if(data_submenu_options[1].options[5].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer, 5);
                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 5);
                }

            }

            document.querySelectorAll(".year-label").forEach(function (label) {
                label.classList.remove("year-label-active");
            });
            document.querySelectorAll(".year-label-container").forEach(function (label) {
                label.classList.remove("year-label-container-active");
            });
            yearContainer.classList.add("year-label-container-active");
            yearContainer.querySelector(".year-label").classList.add("year-label-active");

        });

        yearContainer.addEventListener("mouseover", function () {

            yearContainer.classList.add("year-label-container-active-hover");
            yearContainer.querySelector(".year-label").classList.add("year-label-active-hover");

        });

        yearContainer.addEventListener("mouseout", function () {

            yearContainer.classList.remove("year-label-container-active-hover");
            yearContainer.querySelector(".year-label").classList.remove("year-label-active-hover");

        });

    });

}

/**
 * Logic for the 6 year progress bar animation (including width and data layer changes)
 */
function playYearSlider6() {

    document.getElementById("play-pause-year-button").src = isYearPlaying ? "img/side-bar-icon/play_icon.png" : "img/side-bar-icon/pause_icon.png";

    if(!isYearPlaying){
        id = setInterval(frame, 50);
    }

    function frame() {

        if (width >= 100 || !isYearPlaying) {
            clearInterval(id);
            document.getElementById("play-pause-year-button").src = "img/side-bar-icon/play_icon.png";
            isYearPlaying = false;
            if (width >= 100) width = 18;
            document.getElementById("myBar").style.width = width + '%';
        } else {
            width = width + 1;
            document.getElementById("myBar").style.width = width + '%';
        }

        document.querySelectorAll(".year-label-container").forEach(function (yearContainer) {

            yearContainer.classList.remove("year-label-container-active");
            yearContainer.querySelector(".year-label").classList.remove("year-label-active");

        });

        removeRiverOutlines();

        if(width <= 18){

            document.getElementById("year-label-1").classList.add("year-label-container-active");
            document.getElementById("year-label-1").querySelector(".year-label").classList.add("year-label-active");

            if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 0);
                toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 0);
            }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 0);
                toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 0);
            }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 0);
                toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 0);
            }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                clearRiverErosionDepositionLayers();
            }else if(data_submenu_options[1].options[5].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer, 0);
            }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 0);
            }

        }else if(width > 18.0 && width <= 34.0){

            document.getElementById("year-label-2").classList.add("year-label-container-active");
            document.getElementById("year-label-2").querySelector(".year-label").classList.add("year-label-active");

            if(width === 26){

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 1);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 1);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 1);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 1);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 1);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 1);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 0);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 0);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 0);
                }else if(data_submenu_options[1].options[5].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer, 1);
                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 1);
                }

            }

        }else if(width > 34.0 && width <= 50.0){

            document.getElementById("year-label-3").classList.add("year-label-container-active");
            document.getElementById("year-label-3").querySelector(".year-label").classList.add("year-label-active");

            if(width === 42) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 2);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 2);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 2);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 2);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 2);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 2);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 1);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 1);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 1);
                }else if(data_submenu_options[1].options[5].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer, 2);
                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 2);
                }

            }

        }else if(width > 50.0 && width <= 67.0){

            document.getElementById("year-label-4").classList.add("year-label-container-active");
            document.getElementById("year-label-4").querySelector(".year-label").classList.add("year-label-active");

            if(width === 59) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 3);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 3);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 3);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 3);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 3);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 3);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 2);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 2);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 2);
                }else if(data_submenu_options[1].options[5].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer, 3);
                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 3);
                }

            }

        }else if(width > 67.0 && width <= 84.0){

            document.getElementById("year-label-5").classList.add("year-label-container-active");
            document.getElementById("year-label-5").querySelector(".year-label").classList.add("year-label-active");

            if(width === 76) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 4);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 4);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 4);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 4);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 4);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 4);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 3);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 3);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 3);
                }else if(data_submenu_options[1].options[5].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer, 4);
                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 4);
                }

            }

        }else if(width > 84.0 && width <= 100.0){

            document.getElementById("year-label-6").classList.add("year-label-container-active");
            document.getElementById("year-label-6").querySelector(".year-label").classList.add("year-label-active");

            if(width === 92) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    console.log(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer[5]);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 5);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 5);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 5);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 5);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 5);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 5);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 4);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 4);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 4);
                }else if(data_submenu_options[1].options[5].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer, 5);
                }else if(data_submenu_options[1].options[6].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_islands_layer);
                    toggleDataLayerVisibility(upper_rivers_morphometrics_JSON[activeRiverIndex].river_confinement_layer, 5);
                }

            }

        }

    }

    isYearPlaying = !isYearPlaying;

}

function addCampaignIndicators(campaignJSON) {

    var campaign_indicator_template = document.getElementsByTagName("template")[21];

    for (var i = 0; i < campaignJSON.length; i++){

        var campaign_indicator_template_content = document.importNode(campaign_indicator_template.content,true);
        campaign_indicator_template_content.getElementById("campaign-indicator-text").setAttribute("data-i18n", campaignJSON[i].indicatorTextLangId);
        campaign_indicator_template_content.getElementById("campaign-indicator-text").innerHTML = $.i18n(campaignJSON[i].indicatorTextLangId);
        campaign_indicator_template_content.getElementById("campaign-indicator-text").id = campaignJSON[i].text_id;
        campaign_indicator_template_content.getElementById("campaign-indicator").id = campaignJSON[i].id;

        document.getElementById("field-measurements-campaign-container").appendChild(campaign_indicator_template_content);

        (function (i) {

            document.getElementById(campaignJSON[i].id).addEventListener('click', function () {
                if (campaignJSON[i].indicatorClickCallback !== null) campaignJSON[i].indicatorClickCallback();
            });

            document.getElementById(campaignJSON[i].id).addEventListener('mouseover', function () {
                document.getElementById(campaignJSON[i].text_id).innerHTML = $.i18n(campaignJSON[i].indicatorHoverTextLangId);
            });

            document.getElementById(campaignJSON[i].id).addEventListener('mouseout', function () {
                document.getElementById(campaignJSON[i].text_id).innerHTML = $.i18n(campaignJSON[i].indicatorTextLangId);
            });

        }(i));

    }

}

/**
 * Hides DOM elements using JQuery hide function
 * @param elementsIDArray: Array of DOM elements Ids
 */
function hideElements(elementsIDArray){

    elementsIDArray.forEach(function (elementID) {
        $("#" + elementID).hide(0);
    })

}

/**
 * Shows DOM elements using JQuery show function
 * @param elementsIDArray: Array of DOM elements Ids
 * NOTE: To show elements fadeInElements function works better
 */
function showElements(elementsIDArray){

    elementsIDArray.forEach(function (elementID) {
        $("#" + elementID).show();
    })

}

/**
 * Fades In DOM elements using JQuery fadeIn function
 * @param elementsIDArray: Array of DOM elements Ids
 */
function fadeInElements(elementsIDArray, animation_time) {

    elementsIDArray.forEach(function (elementID) {
        $("#" + elementID).fadeIn(animation_time, function () {});
    })

}

/**
 * Fades Out DOM elements using JQuery fadeOut function
 * @param elementsIDArray: Array of DOM elements Ids
 */
function fadeOutElements(elementsIDArray, animation_time) {

    elementsIDArray.forEach(function (elementID) {
        $("#" + elementID).fadeOut(animation_time, function () {});
    })

}

/**
 * Deletes all the child elements for each element in the array
 * @param elementsIDArray: Array of DOM elements Ids
 */
function removeElementChildNodes(elementsIDArray) {

    elementsIDArray.forEach(function (elementID) {
        $("#" + elementID).empty();
    })

}

/**
 * Deletes all the child elements for each element in the array that matches the className parameter
 * @param className
 */
function removeElementChildNodesWithClass(className) {

    var elements = document.getElementsByClassName(className);

    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

}

/**
 *
 */
function setDroneFlightCards() {
    hideElements(["drone-flights-card-container", "card-1-row-1", "card-2-row-1", "card-3-row-1", "card-1-row-2", "card-2-row-2", "card-3-row-2", "card-1-row-3", "card-2-row-3", "card-3-row-3", "card-1-row-4", "card-2-row-4", "card-3-row-4", "card-1-row-5", "card-2-row-5", "card-3-row-5"]);
}

/**
 * Makes the main container visible and hides the loading gif (using fade effects)
 */
function removeLoader(){

    fadeInElements(["main-wrapper"], 1000);
    fadeOutElements(["loading"], 100);

}

/**
 * Adds the image in imagePath parameter to the zoomed container
 * @param imagePath
 */
function showZoomImage(imagePath){

    document.getElementById("imageZoom").src = imagePath;
    document.getElementById("imageZoomOverlay").style.visibility = "visible";
    $("#imageZoomOverlay").fadeIn(350, function () {});

}


/**
 * Sets the dropdown listeners for the UHD cards (these dropdowns change the station image and marker displayed in the image)
 */
function setUHDDropdownsListeners(features) {

    $('#dropdownMenuButtonTop + [aria-labelledby="dropdownMenuButtonTop"] button').on('click', function (e) {

        e.preventDefault();
        let ele = this;
        UHDMarkerIndexTop = parseInt(ele.name);
        document.getElementById("dropdownMenuButtonTop").innerHTML = $.i18n('dropdown-UHD-section-item', (parseInt(ele.name) + 1).toString());

        UHDHuallagaMarkers.forEach(function (marker) {

            if(UHDHuallagaMarkers.indexOf(marker) !== UHDMarkerIndexTop && UHDHuallagaMarkers.indexOf(marker) !== UHDMarkerIndexBottom) marker.setIcon(L.icon({iconUrl: 'img/marker-icons/blanco.png'}));
            if(UHDHuallagaMarkers.indexOf(marker) === UHDMarkerIndexTop) marker.setIcon(L.icon({iconUrl: 'img/marker-icons/rojo.png'}));
            if(UHDHuallagaMarkers.indexOf(marker) === UHDMarkerIndexBottom) marker.setIcon(L.icon({iconUrl: 'img/marker-icons/azul.png'}));

        });

        offsetCenter(UHDHuallagaMarkersPositions[parseInt(ele.name)], 10);
        document.getElementById("UHD-marker-top-card-location").innerHTML = features[parseInt(ele.name)].properties.lugar + ", " + features[parseInt(ele.name)].properties.departamento + ", " + features[parseInt(ele.name)].properties.distrito;

        if(activeRiverIndex === 0) document.getElementById("UHD-top-card-image").src = "img/cross_sections_images/Amazonas/" + features[parseInt(ele.name)].properties.id + ".png";
        if(activeRiverIndex === 1) document.getElementById("UHD-top-card-image").src = "img/cross_sections_images/HUallaga/" + features[parseInt(ele.name)].properties.id + ".png";
        if(activeRiverIndex === 2) document.getElementById("UHD-top-card-image").src = "img/cross_sections_images/Marañon/" + features[parseInt(ele.name)].properties.id + ".png";
        if(activeRiverIndex === 3) document.getElementById("UHD-top-card-image").src = "img/cross_sections_images/Ucayali/" + features[parseInt(ele.name)].properties.id + ".png";

    });

    $('#dropdownMenuButtonBottom + [aria-labelledby="dropdownMenuButtonBottom"] button').on('click', function (e) {

        e.preventDefault();
        let ele = this;
        document.getElementById("dropdownMenuButtonBottom").innerHTML = ele.textContent;
        UHDMarkerIndexBottom = parseInt(ele.name);

        UHDHuallagaMarkers.forEach(function (marker) {

            if(UHDHuallagaMarkers.indexOf(marker) !== UHDMarkerIndexTop && UHDHuallagaMarkers.indexOf(marker) !== UHDMarkerIndexBottom) marker.setIcon(L.icon({iconUrl: 'img/marker-icons/blanco.png'}));
            if(UHDHuallagaMarkers.indexOf(marker) === UHDMarkerIndexTop) marker.setIcon(L.icon({iconUrl: 'img/marker-icons/rojo.png'}));
            if(UHDHuallagaMarkers.indexOf(marker) === UHDMarkerIndexBottom) marker.setIcon(L.icon({iconUrl: 'img/marker-icons/azul.png'}));

        });

        offsetCenter(UHDHuallagaMarkersPositions[parseInt(ele.name)], 10);
        document.getElementById("UHD-marker-bottom-card-location").innerHTML = features[parseInt(ele.name)].properties.lugar + ", " + features[parseInt(ele.name)].properties.departamento + ", " + features[parseInt(ele.name)].properties.distrito;

        if(activeRiverIndex === 0) document.getElementById("UHD-bottom-card-image").src = "img/cross_sections_images/Amazonas/" + features[parseInt(ele.name)].properties.id + ".png";
        if(activeRiverIndex === 1) document.getElementById("UHD-bottom-card-image").src = "img/cross_sections_images/HUallaga/" + features[parseInt(ele.name)].properties.id + ".png";
        if(activeRiverIndex === 2) document.getElementById("UHD-bottom-card-image").src = "img/cross_sections_images/Marañon/" + features[parseInt(ele.name)].properties.id + ".png";
        if(activeRiverIndex === 3) document.getElementById("UHD-bottom-card-image").src = "img/cross_sections_images/Ucayali/" + features[parseInt(ele.name)].properties.id + ".png";

    });

}

/**
 *
 * @param optionsLength
 * @param dropdownButtonContainerID
 */
function addButtonOptionsUHDDropdown(optionsLength, dropdownButtonContainerID) {

    var dropdown_button_option_template = document.getElementsByTagName("template")[14];

    for (var i = 0; i < optionsLength; i++){
        var dropdown_button_option_template_content = document.importNode(dropdown_button_option_template.content,true);
        dropdown_button_option_template_content.querySelectorAll(".dropdown-item")[0].name = i.toString();
        dropdown_button_option_template_content.querySelectorAll(".dropdown-item")[0].setAttribute("data-i18n", "dropdown-UHD-section-item");
        dropdown_button_option_template_content.querySelectorAll(".dropdown-item")[0].innerHTML = $.i18n('dropdown-UHD-section-item', (i + 1).toString());
        dropdown_button_option_template_content.querySelectorAll(".dropdown-item")[0].textAlign = "right";
        document.getElementById(dropdownButtonContainerID).appendChild(dropdown_button_option_template_content);
    }

}

function addButtonDunesProfilesDropdown(optionsLength, dropdownButtonContainerID) {

    var dropdown_button_option_template = document.getElementsByTagName("template")[14];

    for (var i = 0; i < optionsLength; i++){
        var dropdown_button_option_template_content = document.importNode(dropdown_button_option_template.content,true);
        dropdown_button_option_template_content.querySelectorAll(".dropdown-item")[0].name = (i + 1).toString();
        dropdown_button_option_template_content.querySelectorAll(".dropdown-item")[0].setAttribute("data-i18n", "dropdown-dunes-profile-item");
        dropdown_button_option_template_content.querySelectorAll(".dropdown-item")[0].innerHTML = $.i18n('dropdown-dunes-profile-item', (i+1).toString());
        document.getElementById(dropdownButtonContainerID).appendChild(dropdown_button_option_template_content);
    }

}

/**
 * Sets the dropdown listeners for the Dunes cards (these dropdowns change the station image and marker displayed in the image)
 */
function setDunesDropdownListener() {

    $('#dropdownMenuDunesLines + [aria-labelledby="dropdownMenuDunesLines"] button').on('click', function (e) {

        e.preventDefault();
        let ele = this;

        rivers_dunes_JSON[1].campaign_1_layers[1].eachLayer(function (layer) {

            if(layer.feature.properties["Name"].localeCompare(ele.name) === 0 && layer.feature.properties["layer"].localeCompare("UHG" + dunes_section_selected_index) === 0){
                console.log("DUNES");
                document.getElementById("dunes-top-card-title").innerHTML = $.i18n("dunes-day-1") + layer.feature.properties["dayOne"];
                document.getElementById("dunes-bottom-card-title").innerHTML = $.i18n("dunes-day-2") + layer.feature.properties["dayTwo"];
                // rivers_dunes_JSON[1].campaign_1_layers[1].overrideStyle(feature, {strokeColor: dunes_lines_color, strokeOpacity: 1.0, strokeWeight: 3.0});
            }else{
                // rivers_dunes_JSON[1].campaign_1_layers[1].overrideStyle(feature, {strokeColor: "#000000", strokeOpacity: 1.0, strokeWeight: 1.0});
            }

        });

        // rivers_dunes_JSON[1].campaign_1_layers[1].forEach(function (feature) {
        //
        //     if(feature.getProperty("Name").localeCompare(ele.name) === 0 && feature.getProperty("layer").localeCompare("UHG" + dunes_section_selected_index) === 0) {
        //         document.getElementById("dunes-top-card-title").innerHTML = $.i18n("dunes-day-1") + feature.getProperty("dayOne");
        //         document.getElementById("dunes-bottom-card-title").innerHTML = $.i18n("dunes-day-2") + feature.getProperty("dayTwo");
        //         rivers_dunes_JSON[1].campaign_1_layers[1].overrideStyle(feature, {strokeColor: dunes_lines_color, strokeOpacity: 1.0, strokeWeight: 3.0});
        //     }else{
        //         rivers_dunes_JSON[1].campaign_1_layers[1].overrideStyle(feature, {strokeColor: "#000000", strokeOpacity: 1.0, strokeWeight: 1.0});
        //     }
        //
        // });

        document.getElementById("dropdownMenuDunesLines").innerHTML = $.i18n('dropdown-dunes-profile-item', this.name);
        document.getElementById("dunes-top-card-image").src = "img/Dunes/Huallaga/UHG" + dunes_section_selected_index +"-" + this.name + ".png";

    });

}

/**
 * Toggles menu button enabled/blocked image source
 * @param submenuOptionButtonId
 * @param menuIndex
 */
function toggleIconAndTextEnabled(submenuOptionButtonId, menuIndex) {

    data_submenu_options[menuIndex].options.forEach(function (option) {

        if(option.submenu_option_button_id.localeCompare(submenuOptionButtonId) !== 0){
            document.getElementById(option.submenu_option_title_id).style.color = option.river_availability[activeRiverIndex] ? "white" : submenu_option_text_color;
            document.getElementById(option.submenu_option_image_id).src = option.river_availability[activeRiverIndex] ? option.submenu_option_image_ref : option.submenu_option_image_blocked_ref;
            data_submenu_options[menuIndex].options[data_submenu_options[menuIndex].options.indexOf(option)].submenu_option_enabled_state  = false;
        }else{
            document.getElementById(option.submenu_option_title_id).style.color = cita_main_color;
            document.getElementById(option.submenu_option_image_id).src = option.submenu_option_image_enabled_ref;
            data_submenu_options[menuIndex].options[data_submenu_options[menuIndex].options.indexOf(option)].submenu_option_enabled_state = !data_submenu_options[menuIndex].options[data_submenu_options[menuIndex].options.indexOf(option)].submenu_option_enabled_state;
        }

    })

}

/**
 * Toggles menu button enabled/blocked image source
 * @param submenuOptionImageId
 * @param submenuOptionTextId
 * @param submenuOptionFlag
 * @param submenuOptionStringKey
 */
function toggleBackgroundIconAndTextEnabled(submenuOptionImageId, submenuOptionTextId, submenuOptionFlag, submenuOptionStringKey) {

    console.log(submenuOptionFlag);

    document.getElementById(submenuOptionImageId).src = "img/side-bar-icon/" + submenuOptionStringKey + (submenuOptionFlag ? "_icon.png" : "_enabled_icon.png");
    document.getElementById(submenuOptionTextId).style.color = submenuOptionFlag ? "white" : cita_main_color;

}

/**
 * Restarts submenu button icon and sets enabled to false in the JSON object
 * @param menuIndex
 */
function clearSubmenuEnabledStatus(menuIndex) {

    data_submenu_options[menuIndex].options.forEach(function (option) {

        document.getElementById(option.submenu_option_title_id).style.color = option.available ? "white" : submenu_option_text_color;
        document.getElementById(option.submenu_option_image_id).src = option.submenu_option_image_ref;
        data_submenu_options[menuIndex].options[data_submenu_options[menuIndex].options.indexOf(option)].submenu_option_enabled_state  = false;

    })

}

/**
 * Restarts menus and submenus title and button icon color and source (enabled or blocked) depending on the booleans defined in the JSON object
 * @param menuIndex
 * @param riverIndex
 */
function reloadMenuOptionsAvailabilityForRiver(menuIndex, riverIndex) {

    data_submenu_options[menuIndex].options.forEach(function (option) {

        document.getElementById(option.submenu_option_title_id).style.color = option.river_availability[riverIndex] ? "white" : submenu_option_text_color;
        document.getElementById(option.submenu_option_image_id).src = option.river_availability[riverIndex] ? option.submenu_option_image_ref : option.submenu_option_image_blocked_ref;
        if(option.river_availability[riverIndex]) document.getElementById(option.submenu_option_button_id).addEventListener("click", option.submenu_option_button_click_function);
        if(!option.river_availability[riverIndex]) document.getElementById(option.submenu_option_button_id).removeEventListener("click", option.submenu_option_button_click_function);

    })

}

/**
 * Shows a progress gif loader. After process finishes call hideLoader function.
 * If the process takes too long better enclose it in a setTimeout block with 1000 or 1500ms parameter.
 */
function showLoader() {

    document.getElementById("general-loader-container").style.visibility = "visible";
    document.getElementById("general-loader-container").style.display = "flex";

}

/**
 * Hides the progress gif loader. Call this funtion after showLoader.
 */
function hideLoader() {

    document.getElementById("general-loader-container").style.visibility = "hidden";
    document.getElementById("general-loader-container").style.display = "none";

}

//</editor-fold>