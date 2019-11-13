//<editor-fold desc="VARIABLES">

/**
 * List of colors used in the visualizer map
 * @type String (hex color format)
 */

let cita_main_color = "#00BFDF";
let islands_fill_color = "#69BC89";
let noChangeColor_erosionDeposition = "#5469AF";
let erosionColor_erosionDeposition = "#CA5569";
let depositionColor_erosionDeposition = "#8EC48C";
let dunes_section_border_color = "#252323";
let dunes_sections_color = "#7F95D1";
let dunes_lines_color = "#252323";
let bedload_sections_color = "#99FFFF";
let migration_green = "#6FBC6F";
let migration_yellow = "#F4F47B";
let migration_orange = "#FEC57C";
let migration_red = "#E98183";
let migration_older_year = "#E05A77";
let migration_recent_year = "#454545";
let migration_channel_change = "#9C7AF4";
let migration_cut_off = "#71A7EB";
let drone_animation_color = "#FF0000";
let panel_header_title_color = "#212529";
let menu_option_text_color = "#7A838B";
let submenu_option_text_color = "#686777";
let second_level_submenu_option_text_color = "#4B5358";
let metrics_width_colors = [

    "#E98183",
    "#FEC57C",
    "#F4F47B",
    "#6FBC6F"

];
let metrics_sinuosity_colors = [

    "#E98183",
    "#FEC57C",
    "#F4F47B",
    "#6FBC6F"

];
let metrics_wavelength_colors = [

    "#E98183",
    "#FEC57C",
    "#F4F47B",
    "#6FBC6F"

];

//DEM

let hydrographyDEMColors = [

    "#494949",
    "#757575",
    "#A2A2A2",
    "#CFCFCF",
    "#FBFBFB"

];


//River Outline Styles

let amazonasRiverOutlineStyle = {color: "#b3daff", opacity: 1.0, fillColor: "#b3daff", fillOpacity: 1.0, weight: 2};
let huallagaRiverOutlineStyle = {color: "#b3daff", opacity: 1.0, fillColor: "#b3daff", fillOpacity: 1.0, weight: 2};
let marañonRiverOutlineStyle = {color: "#b3daff", opacity: 1.0, fillColor: "#b3daff", fillOpacity: 1.0, weight: 2};
let ucayaliRiverOutlineStyle = {color: "#b3daff", opacity: 1.0, fillColor: "#b3daff", fillOpacity: 1.0, weight: 2};

function averageWidthPolygonStyle(featureValue){

    return {
        'color': menu_option_text_color,
        'opacity': 1.0,
        'fillColor': colorMapWidth(featureValue),
        'fillOpacity': 1.0,
        'weight': 2.0
    }

}


function sinuosityPolygonStyle(featureValue){

    return {
        'color': '#000000',
        'opacity': 1.0,
        'fillColor': colorMapSinuosity(featureValue),
        'fillOpacity': 1.0,
        'weight': 2.0
    }

}

function arcwavelengthPolygonStyle(featureValue){

    return {
        'color': '#000000',
        'opacity': 1.0,
        'fillColor': colorMapWavelength(featureValue),
        'fillOpacity': 1.0,
        'weight': 2.0
    }

}

let islandsPolygonStyle = {
    'color': '#000000',
    'opacity': 1.0,
    'fillColor': islands_fill_color,
    'fillOpacity': 1.0,
    'weight': 0.0
};

function migrationLineStyle(featureValue){

    return {
        'color': colorMapMigration(featureValue),
        'opacity': 1.0,
        'weight': 3.0
    }

}

let migrationCenterlineOlder = {
    'color': migration_older_year,
    'opacity': 1.0,
    'weight': 3.0
};

let migrationCenterlineRecent = {
    'color': migration_recent_year,
    'opacity': 1.0,
    'weight': 3.0
};

let migrationChangeChannelStyle = {
    'color': migration_channel_change,
    'opacity': 1.0,
    'weight': 3.0
};

let migrationCutOffStyle = {
    'color': migration_cut_off,
    'opacity': 1.0,
    'weight': 3.0
};

let dunesSectionsStyle = {
    'color': dunes_section_border_color,
    'opacity': 1.0,
    'fillColor': dunes_sections_color,
    'fillOpacity': 0.9,
    'weight': 3.0
};

let dunesLinesStyle = {
    'color': dunes_lines_color,
    'strokeOpacity': 1.0,
    'strokeWeight': 2.0
};

let bedloadSectionsStyle = {
    'color': '#000000',
    'opacity': 0.8,
    'fillColor': bedload_sections_color,
    'fillOpacity': 0.9,
    'weight': 1.0
};

function confinementPolygonStyle(featureValue) {

    return {
        'color': '#000000',
        'opacity': 1.0,
        'fillColor': colorMapConfinement(featureValue),
        'fillOpacity': 1.0,
        'weight': 2.0
    }
}

let disabledRiversPolygonStyle = {
    'color': '#8C8C8C',
    'opacity': 1.0,
    'fillColor': '#d9d9d9',
    'fillOpacity': 1.0,
    'weight': 2.0
};





//Background Data colors

//GEOPOLITICAL

//Administrative Divisions

let administrativeDivisionsDepartmentStyle = {
    fillColor: "#FFFFFF",
    fillOpacity: 0.0,
    color: "#5F1A37",
    strokeOpacity: 1.0,
    weight: 2.0
};
let administrativeDivisionsProvinceStyle = {
    fillColor: "#FFFFFF",
    fillOpacity: 0.0,
    color: "#5F1A37",
    strokeOpacity: 0.7,
    weight: 1.0,
    // dashArray: "5 10",

};
let administrativeDivisionsDistrictStyle = {
    fillColor: "#FFFFFF",
    fillOpacity: 0.0,
    color: "#5F1A37",
    strokeOpacity: 0.4,
    weight: 0.5,
    dashArray: "5 10",
};

//Population

let populationDepartmentStyle = {
    fillColor: "#AA0000",
        fillOpacity: 0.35,
        color: "#000000",
        strokeOpacity: 1.0,
        weight: 1.0
};
let populationProvinceStyle = {
    fillColor: "#AA0000",
    fillOpacity: 0.35,
    color: "#000000",
    strokeOpacity: 1.0,
    weight: 1.0
};
let populationDistrictStyle = {
    fillColor: "#AA0000",
    fillOpacity: 0.35,
    color: "#000000",
    strokeOpacity: 1.0,
    weight: 1.0
};

//Populated Areas

let populatedAreasRuralStyle = {
    fillColor: "#AA0000",
    fillOpacity: 0.35,
    color: "#AA0000",
    opacity: 0.4,
    weight: 1.0
};

let populatedAreasNativeStyle = {
    fillColor: "#7A557A",
    fillOpacity: 0.35,
    color: "#7A557A",
    opacity: 0.4,
    weight: 1.0
};

//Protected Natural Areas

let protectedAreasDepartmentStyle = {
    fillColor: "#608C60",
    fillOpacity: 0.35,
    color: "#608C60",
    strokeOpacity: 1.0,
    weight: 1.0
};

let protectedAreasRegionalStyle = {
    fillColor: "#2D5663",
    fillOpacity: 0.35,
    color: "#2D5663",
    strokeOpacity: 1.0,
    weight: 1.0
};

let protectedAreasPrivateStyle = {
    fillColor: "#A87A5C",
    fillOpacity: 0.35,
    color: "#A87A5C",
    strokeOpacity: 1.0,
    weight: 1.0
};

let protectedAreasBufferZoneStyle = {
    fillColor: "#7A7A7A",
    fillOpacity: 0.35,
    color: "#7A7A7A",
    strokeOpacity: 1.0,
    weight: 1.0
};

//GEOGRAPHY

//Hydrography

let hydrographyBasinStyle = {
    fillColor: "#B9C9CE",
    fillOpacity: 0.35,
    color: "#B9C9CE",
    strokeOpacity: 1.0,
    weight: 1.0
};

let hydrographyRiversStyle = {
    fillColor: "#2D5663",
    fillOpacity: 0.35,
    color: "#2D5663",
    strokeOpacity: 1.0,
    weight: 1.0
};

let hydrographyLakesStyle = {
    fillColor: "#B0DAE5",
    fillOpacity: 0.35,
    color: "#99BDC6",
    strokeOpacity: 1.0,
    weight: 1.0
};

let hydrographyGlaciersStyle = {
    fillColor: "#E8E8E8",
    fillOpacity: 0.35,
    color: "#000000",
    strokeOpacity: 1.0,
    weight: 1.0
};



//INFRASTRUCTURE

//Transportation

let transportationPortsStyle = {
    fillColor: "#AA0000",
    fillOpacity: 0.35,
    color: "#000000",
    strokeOpacity: 1.0,
    weight: 1.0
};

let transportationAirportsStyle = {
    fillColor: "#AA0000",
    fillOpacity: 0.35,
    color: "#000000",
    strokeOpacity: 1.0,
    weight: 1.0
};

//Extractive

let extractiveMiningProjectsStyle = {
    fillColor: "#AA0000",
    fillOpacity: 0.35,
    color: "#000000",
    strokeOpacity: 1.0,
    weight: 1.0
};

let extractiveHydrocarbonsStyle = {
    fillColor: "#AA0000",
    fillOpacity: 0.35,
    color: "#000000",
    strokeOpacity: 1.0,
    weight: 1.0
};

//</editor-fold>


//<editor-fold desc="FUNCTIONS">

/**
 * Evaluates the metric value and returns the correspondent color according to the scale (km)
 * @param metricValue in km
 * @returns color hex value
 */
function colorMapWidth(metricValue) {
    return  metricValue >= 1.2 ? metrics_width_colors[0]:
            metricValue >= 0.8 ? metrics_width_colors[1]:
            metricValue >= 0.4 ? metrics_width_colors[2]:
                                 metrics_width_colors[3];
}

/**
 * Evaluates the metric value and returns the correspondent color according to the scale
 * @param metricValue
 * @returns color hex value
 */
function colorMapSinuosity(metricValue) {
    return  metricValue >= 2.00 ? metrics_sinuosity_colors[0]:
            metricValue >= 1.70 ? metrics_sinuosity_colors[1]:
            metricValue >= 1.35 ? metrics_sinuosity_colors[2]:
                                  metrics_sinuosity_colors[3];
}

/**
 * Evaluates the metric value and returns the correspondent color according to the scale (km)
 * @param metricValue in km
 * @returns color hex value
 */
function colorMapWavelength(metricValue) {

    if(activeRiverIndex === 0){

        return  metricValue >= 15.0 ? metrics_wavelength_colors[0]:
                metricValue >= 10.0 ? metrics_wavelength_colors[1]:
                metricValue >= 0.50 ? metrics_wavelength_colors[2]:
                                      metrics_wavelength_colors[3];

    } else if(activeRiverIndex === 1){

        return  metricValue >= 0.90 ? metrics_wavelength_colors[0]:
                metricValue >= 0.60 ? metrics_wavelength_colors[1]:
                metricValue >= 0.30 ? metrics_wavelength_colors[2]:
                                      metrics_wavelength_colors[3];

    }else if(activeRiverIndex === 2){

        return  metricValue >= 15.0 ? metrics_wavelength_colors[0]:
                metricValue >= 10.0 ? metrics_wavelength_colors[1]:
                metricValue >= 0.50 ? metrics_wavelength_colors[2]:
                                      metrics_wavelength_colors[3];

    }else if(activeRiverIndex === 3){

        return  metricValue >= 15.0 ? metrics_wavelength_colors[0]:
                metricValue >= 10.0 ? metrics_wavelength_colors[1]:
                metricValue >= 0.50 ? metrics_wavelength_colors[2]:
                                      metrics_wavelength_colors[3];

    }

}

/**
 * Evaluates the metric value and returns the correspondent color according to the scale (km)
 * @param metricValue in km
 * @returns color hex value
 */
function colorMapMigration(metricValue) {

    return  metricValue > 0.9 ? migration_red:
            metricValue > 0.6 ? migration_orange:
            metricValue > 0.3 ? migration_yellow:
                                migration_green;

}

function colorMapConfinement(metricValue) {

    return  metricValue > 0.2 ? migration_yellow:
                                migration_green;

}

/**
 * Returns the fill color for the current polygon correspondent with the selected morphometric option (width, sinuosity, wavelength)
 * @param properties object with metrics values
 * @returns color hex value
 */
function polygonFillColor(properties) {

    if(data_submenu_options[1].options[0].submenu_option_enabled_state){

        return colorMapWidth(properties.av_width/1000);

    }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){

        return colorMapSinuosity(properties.sinuosity);

    }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){

        return colorMapWavelength(properties.arcwavelen/1000);

    }

}

//</editor-fold>