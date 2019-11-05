
//<editor-fold desc="VARIABLES">

/**
 * @param background_data_dancing_rivers: JSON object containing background data for all the projects divided in menus, submenus and second level submenus
 * @param background_data_menu_options: JSON object containing only menu options
 * @param background_data_submenu_options: JSON object containing only submenus (first and second level) options
 */
let background_data_dancing_rivers = {

    "data_menu_options": [

        {
            "menu_option_title": "Geopolitic",
            "menu_option_title_id": "geopolitic_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/geopolitic_icon.png",
            "menu_option_id": "geopolitic_menu_option_id",
            "menu_button_option_id": "geopolitic_menu_button_option_id",
            "menu_bottom_arrow_button_id": "geopolitic_menu_bottom_arrow_button_id",
            "available": true
        },
        // {
        //     "menu_option_title": "Socioeconomic",
        //     "menu_option_title_id": "socioeconomic_menu_option_title_id",
        //     "menu_option_image_ref": "img/side-bar-icon/socioeconomic_icon.png",
        //     "menu_option_id": "socioeconomic_menu_option_id",
        //     "menu_button_option_id": "socioeconomic_menu_button_option_id",
        //     "menu_bottom_arrow_button_id": "socioeconomic_menu_bottom_arrow_button_id",
        //     "available": true
        // },
        {
            "menu_option_title": "Geography",
            "menu_option_title_id": "geography_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/geography_icon.png",
            "menu_option_id": "geography_menu_option_id",
            "menu_button_option_id": "geography_menu_button_option_id",
            "menu_bottom_arrow_button_id": "geography_menu_bottom_arrow_button_id",
            "available": true
        },
        {
            "menu_option_title": "Infrastructure",
            "menu_option_title_id": "infrastructure_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/infrastructure_icon.png",
            "menu_option_id": "infrastructure_menu_option_id",
            "menu_button_option_id": "infrastructure_menu_button_option_id",
            "menu_bottom_arrow_button_id": "infrastructure_menu_bottom_arrow_button_id",
            "available": true
        },
        // {
        //     "menu_option_title": "Risk Management",
        //     "menu_option_title_id": "risk_management_menu_option_title_id",
        //     "menu_option_image_ref": "img/side-bar-icon/risk_manage_icon.png",
        //     "menu_option_id": "risk_management_menu_option_id",
        //     "menu_button_option_id": "risk_management_menu_button_option_id",
        //     "menu_bottom_arrow_button_id": "risk_management_menu_bottom_arrow_button_id",
        //     "available": true
        // },
        {
            "menu_option_title": "Stations",
            "menu_option_title_id": "stations_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/station_icon.png",
            "menu_option_id": "stations_menu_option_id",
            "menu_button_option_id": "stations_menu_button_option_id",
            "menu_bottom_arrow_button_id": "stations_menu_bottom_arrow_button_id",
            "available": true
        },

    ],

    "data_submenu_options": [

        {
            "submenu_name": "geopolitic_submenu",
            "options": [

                {
                    "submenu_option_title": "Politic Limits",
                    "submenu_option_title_id": "politic_limits_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/political_limits_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
                    "submenu_option_image_id": "politic_limits_submenu_image_id",
                    "submenu_option_id": "politic_limits_submenu_option_id",
                    "submenu_option_button_id": "politic_limits_submenu_option_button",
                    "submenu_option_button_check_icon_id": "politic_limits_submenu_option_check",
                    "submenu_option_button_click_function": dummyTest,
                    "submenu_bottom_arrow_button_id": "politics_limits_submenu_bottom_arrow_button_id",
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": [
                        {
                            "submenu_option_title": "Departamental",
                            "submenu_option_title_id": "regional_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/departamental_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/departamental_enabled_icon.png",
                            "submenu_option_image_id": "regional_submenu_image_id",
                            "submenu_option_id": "regional_submenu_option_id",
                            "submenu_option_button_id": "regional_submenu_option_button",
                            "submenu_option_button_check_icon_id": "regional_submenu_option_check",
                            "submenu_option_button_click_function": departments_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "regional_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Provincial",
                            "submenu_option_title_id": "provincial_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/province_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/province_enabled_icon.png",
                            "submenu_option_image_id": "provincial_submenu_image_id",
                            "submenu_option_id": "provincial_submenu_option_id",
                            "submenu_option_button_id": "provincial_submenu_option_button",
                            "submenu_option_button_check_icon_id": "provincial_submenu_option_check",
                            "submenu_option_button_click_function": provinces_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "provincial_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "District",
                            "submenu_option_title_id": "district_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/district_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/district_enabled_icon.png",
                            "submenu_option_image_id": "district_submenu_image_id",
                            "submenu_option_id": "district_submenu_option_id",
                            "submenu_option_button_id": "district_submenu_option_button",
                            "submenu_option_button_check_icon_id": "district_submenu_option_check",
                            "submenu_option_button_click_function": district_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "district_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        }
                    ]
                },
                // {
                //     "submenu_option_title": "Population",
                //     "submenu_option_title_id": "population_submenu_option_title_id",
                //     "submenu_option_image_ref": "img/side-bar-icon/population_icon.png",
                //     "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                //     "submenu_option_image_id": "population_submenu_image_id",
                //     "submenu_option_id": "population_submenu_option_id",
                //     "submenu_option_button_id": "population_submenu_option_button",
                //     "submenu_option_button_check_icon_id": "population_submenu_option_check",
                //     "submenu_option_button_click_function": dummyTest,
                //     "submenu_bottom_arrow_button_id": "population_submenu_bottom_arrow_button_id",
                //     "submenu_option_enabled_state": false,
                //     "available": true,
                //     "river_availability": [true, true, true, true, true],
                //     "data_second_level_submenu_options": [
                //         {
                //             "submenu_option_title": "Capitals of Regions",
                //             "submenu_option_title_id": "region_capitals_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/department_capital_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/department_capital_enabled_icon.png",
                //             "submenu_option_image_id": "region_capitals_submenu_image_id",
                //             "submenu_option_id": "region_capitals_submenu_option_id",
                //             "submenu_option_button_id": "region_capitals_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "region_capitals_submenu_option_check",
                //             "submenu_option_button_click_function": population_department_capital_submenu_option_clicked,
                //             "submenu_bottom_arrow_button_id": "region_capitals_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //         {
                //             "submenu_option_title": "Capitals of Provinces",
                //             "submenu_option_title_id": "province_capitals_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/province_capital_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/province_capital_enabled_icon.png",
                //             "submenu_option_image_id": "province_capitals_submenu_image_id",
                //             "submenu_option_id": "province_capitals_submenu_option_id",
                //             "submenu_option_button_id": "province_capitals_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "province_capitals_submenu_option_check",
                //             "submenu_option_button_click_function": population_province_capital_submenu_option_clicked,
                //             "submenu_bottom_arrow_button_id": "province_capitals_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //         {
                //             "submenu_option_title": "Capitals of Districts",
                //             "submenu_option_title_id": "district_capitals_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/district_capital_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/district_capital_enabled_icon.png",
                //             "submenu_option_image_id": "district_capitals_submenu_image_id",
                //             "submenu_option_id": "district_capitals_submenu_option_id",
                //             "submenu_option_button_id": "district_capitals_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "district_capitals_submenu_option_check",
                //             "submenu_option_button_click_function": population_district_capital_submenu_option_clicked,
                //             "submenu_bottom_arrow_button_id": "district_capitals_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //         // {
                //         //     "submenu_option_title": "Towns & Villages",
                //         //     "submenu_option_title_id": "towns_villages_submenu_option_title_id",
                //         //     "submenu_option_image_ref": "img/side-bar-icon/towns_capital_icon.png",
                //         //     "submenu_option_image_enabled_ref": "img/side-bar-icon/towns_capital_enabled_icon.png",
                //         //     "submenu_option_image_id": "towns_villages_submenu_image_id",
                //         //     "submenu_option_id": "towns_villages_submenu_option_id",
                //         //     "submenu_option_button_id": "towns_villages_submenu_option_button",
                //         //     "submenu_option_button_check_icon_id": "towns_villages_submenu_option_check",
                //         //     "submenu_option_button_click_function": population_town_submenu_option_clicked,
                //         //     "submenu_bottom_arrow_button_id": "towns_villages_submenu_bottom_arrow_button_id",
                //         //     "submenu_option_enabled_state": true,
                //         //     "available": true,
                //         //     "river_availability": [true, true, true, true, true]
                //         // }
                //     ]
                // },
                // {
                //     "submenu_option_title": "Population Density",
                //     "submenu_option_title_id": "population_density_submenu_option_title_id",
                //     "submenu_option_image_ref": "img/side-bar-icon/population_density_icon.png",
                //     "submenu_option_image_enabled_ref": "img/side-bar-icon/M_enabled_icon.png",
                //     "submenu_option_image_id": "population_density_submenu_image_id",
                //     "submenu_option_id": "population_density_submenu_option_id",
                //     "submenu_option_button_id": "population_density_submenu_option_button",
                //     "submenu_option_button_check_icon_id": "population_density_submenu_option_check",
                //     "submenu_option_button_click_function": dummyTest,
                //     "submenu_bottom_arrow_button_id": "population_density_submenu_bottom_arrow_button_id",
                //     "submenu_option_enabled_state": false,
                //     "available": true,
                //     "river_availability": [true, true, true, true, true],
                //     "data_second_level_submenu_options": []
                // },
                // {
                //     "submenu_option_title": "Urban-Rural Population",
                //     "submenu_option_title_id": "urban_rural_population_submenu_option_title_id",
                //     "submenu_option_image_ref": "img/side-bar-icon/urban_rural_population_icon.png",
                //     "submenu_option_image_enabled_ref": "img/side-bar-icon/U_enabled_icon.png",
                //     "submenu_option_image_id": "urban_rural_population_submenu_image_id",
                //     "submenu_option_id": "urban_rural_population_submenu_option_id",
                //     "submenu_option_button_id": "urban_rural_population_submenu_option_button",
                //     "submenu_option_button_check_icon_id": "urban_rural_population_submenu_option_check",
                //     "submenu_option_button_click_function": dummyTest,
                //     "submenu_bottom_arrow_button_id": "urban_rural_population_submenu_bottom_arrow_button_id",
                //     "submenu_option_enabled_state": false,
                //     "available": true,
                //     "river_availability": [true, true, true, true, true],
                //     "data_second_level_submenu_options": []
                // },
                {
                    "submenu_option_title": "Populated Areas",
                    "submenu_option_title_id": "populated_areas_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/populated_areas_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/U_enabled_icon.png",
                    "submenu_option_image_id": "populated_areas_submenu_image_id",
                    "submenu_option_id": "populated_areas_submenu_option_id",
                    "submenu_option_button_id": "populated_areas_submenu_option_button",
                    "submenu_option_button_check_icon_id": "populated_areas_submenu_option_check",
                    "submenu_option_button_click_function": dummyTest,
                    "submenu_bottom_arrow_button_id": "populated_areas_submenu_bottom_arrow_button_id",
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": [
                        {
                            "submenu_option_title": "Native Communities",
                            "submenu_option_title_id": "native_communities_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/native_communities_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/native_communities_enabled_icon.png",
                            "submenu_option_image_id": "native_communities_submenu_image_id",
                            "submenu_option_id": "native_communities_submenu_option_id",
                            "submenu_option_button_id": "native_communities_submenu_option_button",
                            "submenu_option_button_check_icon_id": "native_communities_submenu_option_check",
                            "submenu_option_button_click_function": populated_areas_native_communities_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "native_communities_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Farmers Communities",
                            "submenu_option_title_id": "farmers_communities_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/rural_communities_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/rural_communities_enabled_icon.png",
                            "submenu_option_image_id": "farmers_communities_submenu_image_id",
                            "submenu_option_id": "farmers_communities_submenu_option_id",
                            "submenu_option_button_id": "farmers_communities_submenu_option_button",
                            "submenu_option_button_check_icon_id": "farmers_communities_submenu_option_check",
                            "submenu_option_button_click_function": populated_areas_rural_communities_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "farmers_communities_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        // {
                        //     "submenu_option_title": "Urban Areas",
                        //     "submenu_option_title_id": "urban_areas_submenu_option_title_id",
                        //     "submenu_option_image_ref": "img/side-bar-icon/urban_areas_icon.png",
                        //     "submenu_option_image_enabled_ref": "img/side-bar-icon/M_enabled_icon.png",
                        //     "submenu_option_image_id": "urban_areas_submenu_image_id",
                        //     "submenu_option_id": "urban_areas_submenu_option_id",
                        //     "submenu_option_button_id": "urban_areas_submenu_option_button",
                        //     "submenu_option_button_check_icon_id": "urban_areas_submenu_option_check",
                        //     "submenu_option_button_click_function": dummyTest,
                        //     "submenu_bottom_arrow_button_id": "urban_areas_submenu_bottom_arrow_button_id",
                        //     "submenu_option_enabled_state": true,
                        //     "available": true,
                        //     "river_availability": [true, true, true, true, true]
                        // },
                    ]
                },
                // {
                //     "submenu_option_title": "Cultural Heritage",
                //     "submenu_option_title_id": "cultural_heritage_submenu_option_title_id",
                //     "submenu_option_image_ref": "img/side-bar-icon/cultural_heritage_icon.png",
                //     "submenu_option_image_enabled_ref": "img/side-bar-icon/U_enabled_icon.png",
                //     "submenu_option_image_id": "cultural_heritage_submenu_image_id",
                //     "submenu_option_id": "cultural_heritage_submenu_option_id",
                //     "submenu_option_button_id": "cultural_heritage_submenu_option_button",
                //     "submenu_option_button_check_icon_id": "cultural_heritage_submenu_option_check",
                //     "submenu_option_button_click_function": dummyTest,
                //     "submenu_bottom_arrow_button_id": "cultural_heritage_submenu_bottom_arrow_button_id",
                //     "submenu_option_enabled_state": false,
                //     "available": true,
                //     "river_availability": [false, false, false, false, false],
                //     "data_second_level_submenu_options": [
                //         {
                //             "submenu_option_title": "Historical Monuments",
                //             "submenu_option_title_id": "historical_monuments_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/archeological_monument_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
                //             "submenu_option_image_id": "historical_monuments_submenu_image_id",
                //             "submenu_option_id": "historical_monuments_submenu_option_id",
                //             "submenu_option_button_id": "historical_monuments_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "historical_monuments_submenu_option_check",
                //             "submenu_option_button_click_function": dummyTest,
                //             "submenu_bottom_arrow_button_id": "historical_monuments_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": false,
                //             "available": true,
                //             "river_availability": [false, false, false, false, false]
                //         },
                //         {
                //             "submenu_option_title": "Archaeological Sites",
                //             "submenu_option_title_id": "archaeological_sites_communities_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/archeological_site_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                //             "submenu_option_image_id": "archaeological_sites_submenu_image_id",
                //             "submenu_option_id": "archaeological_sites_submenu_option_id",
                //             "submenu_option_button_id": "archaeological_sites_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "archaeological_sites_submenu_option_check",
                //             "submenu_option_button_click_function": dummyTest,
                //             "submenu_bottom_arrow_button_id": "archaeological_sites_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //         {
                //             "submenu_option_title": "Museums",
                //             "submenu_option_title_id": "museums_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/museum_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/M_enabled_icon.png",
                //             "submenu_option_image_id": "museums_submenu_image_id",
                //             "submenu_option_id": "museums_submenu_option_id",
                //             "submenu_option_button_id": "museums_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "museums_submenu_option_check",
                //             "submenu_option_button_click_function": dummyTest,
                //             "submenu_bottom_arrow_button_id": "museums_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //         {
                //             "submenu_option_title": "Qapac Ñam",
                //             "submenu_option_title_id": "qapac_nam_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/qapac_ñan_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/M_enabled_icon.png",
                //             "submenu_option_image_id": "qapac_nam_submenu_image_id",
                //             "submenu_option_id": "qapac_nam_submenu_option_id",
                //             "submenu_option_button_id": "qapac_nam_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "qapac_nam_submenu_option_check",
                //             "submenu_option_button_click_function": dummyTest,
                //             "submenu_bottom_arrow_button_id": "qapac_nam_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //     ]
                // },
                {
                    "submenu_option_title": "Protected Natural Areas",
                    "submenu_option_title_id": "protected_natural_areas_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/protected_area_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/U_enabled_icon.png",
                    "submenu_option_image_id": "protected_natural_areas_submenu_image_id",
                    "submenu_option_id": "protected_natural_areas_submenu_option_id",
                    "submenu_option_button_id": "protected_natural_areas_submenu_option_button",
                    "submenu_option_button_check_icon_id": "protected_natural_areas_submenu_option_check",
                    "submenu_option_button_click_function": dummyTest,
                    "submenu_bottom_arrow_button_id": "protected_natural_areas_submenu_bottom_arrow_button_id",
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": [
                        {
                            "submenu_option_title": "National",
                            "submenu_option_title_id": "anp_national_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/anp_national_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/anp_national_enabled_icon.png",
                            "submenu_option_image_id": "anp_national_submenu_image_id",
                            "submenu_option_id": "anp_national_submenu_option_id",
                            "submenu_option_button_id": "anp_national_submenu_option_button",
                            "submenu_option_button_check_icon_id": "anp_national_submenu_option_check",
                            "submenu_option_button_click_function": dummyTest,
                            "submenu_bottom_arrow_button_id": "anp_national_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": false,
                            "available": true,
                            "river_availability": [false, false, false, false, false]
                        },
                        {
                            "submenu_option_title": "Regional",
                            "submenu_option_title_id": "anp_regional_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/anp_regional_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/anp_regional_enabled_icon.png",
                            "submenu_option_image_id": "anp_regional_submenu_image_id",
                            "submenu_option_id": "anp_regional_submenu_option_id",
                            "submenu_option_button_id": "anp_regional_submenu_option_button",
                            "submenu_option_button_check_icon_id": "anp_regional_submenu_option_check",
                            "submenu_option_button_click_function": pna_regional_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "anp_regional_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Private",
                            "submenu_option_title_id": "anp_private_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/anp_private_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/anp_private_enabled_icon.png",
                            "submenu_option_image_id": "anp_private_submenu_image_id",
                            "submenu_option_id": "anp_private_submenu_option_id",
                            "submenu_option_button_id": "anp_private_submenu_option_button",
                            "submenu_option_button_check_icon_id": "anp_private_submenu_option_check",
                            "submenu_option_button_click_function": pna_private_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "anp_private_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Buffer zone",
                            "submenu_option_title_id": "buffer_zone_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/buffer_zone_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/buffer_zone_enabled_icon.png",
                            "submenu_option_image_id": "buffer_zone_submenu_image_id",
                            "submenu_option_id": "buffer_zone_submenu_option_id",
                            "submenu_option_button_id": "buffer_zone_submenu_option_button",
                            "submenu_option_button_check_icon_id": "buffer_zone_submenu_option_check",
                            "submenu_option_button_click_function": pna_buffer_zone_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "buffer_zone_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                    ]
                }

            ]

        },
        // {
        //     "submenu_name": "socioeconomic_submenu",
        //     "options": [
        //
        //         {
        //             "submenu_option_title": "Pobreza",
        //             "submenu_option_title_id": "poverty_submenu_option_title_id",
        //             "submenu_option_image_ref": "img/side-bar-icon/poverty_icon.png",
        //             "submenu_option_image_enabled_ref": "img/side-bar-icon/width_enabled_icon.png",
        //             "submenu_option_image_blocked_ref": "img/side-bar-icon/width_blocked_icon.png",
        //             "submenu_option_image_id": "poverty_submenu_image_id",
        //             "submenu_option_id": "poverty_submenu_option_id",
        //             "submenu_option_button_id": "poverty_submenu_option_button",
        //             "submenu_option_button_check_icon_id": "poverty_submenu_option_check",
        //             "submenu_option_button_click_function": dummyTest,
        //             "submenu_bottom_arrow_button_id": "poverty_submenu_bottom_arrow_button_id",
        //             "submenu_option_enabled_state": false,
        //             "available": true,
        //             "river_availability": [true, true, true, true, true],
        //             "data_second_level_submenu_options": [
        //                 {
        //                     "submenu_option_title": "Regions",
        //                     "submenu_option_title_id": "poverty_regions_submenu_option_title_id",
        //                     "submenu_option_image_ref": "img/side-bar-icon/poverty_department_icon.png",
        //                     "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
        //                     "submenu_option_image_id": "poverty_regions_submenu_image_id",
        //                     "submenu_option_id": "poverty_regions_submenu_option_id",
        //                     "submenu_option_button_id": "poverty_regions_submenu_option_button",
        //                     "submenu_option_button_check_icon_id": "poverty_regions_submenu_option_check",
        //                     "submenu_option_button_click_function": dummyTest,
        //                     "submenu_bottom_arrow_button_id": "poverty_regions_submenu_bottom_arrow_button_id",
        //                     "submenu_option_enabled_state": true,
        //                     "available": true,
        //                     "river_availability": [true, true, true, true, true]
        //                 },
        //                 {
        //                     "submenu_option_title": "Provinces",
        //                     "submenu_option_title_id": "poverty_provinces_submenu_option_title_id",
        //                     "submenu_option_image_ref": "img/side-bar-icon/poverty_province_icon.png",
        //                     "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
        //                     "submenu_option_image_id": "poverty_provinces_submenu_image_id",
        //                     "submenu_option_id": "poverty_provinces_submenu_option_id",
        //                     "submenu_option_button_id": "poverty_provinces_submenu_option_button",
        //                     "submenu_option_button_check_icon_id": "poverty_provinces_submenu_option_check",
        //                     "submenu_option_button_click_function": dummyTest,
        //                     "submenu_bottom_arrow_button_id": "poverty_provinces_submenu_bottom_arrow_button_id",
        //                     "submenu_option_enabled_state": true,
        //                     "available": true,
        //                     "river_availability": [true, true, true, true, true]
        //                 },
        //             ]
        //
        //         },
        //         {
        //             "submenu_option_title": "HDI",
        //             "submenu_option_title_id": "hdi_submenu_option_title_id",
        //             "submenu_option_image_ref": "img/side-bar-icon/sinuosity_icon.png",
        //             "submenu_option_image_enabled_ref": "img/side-bar-icon/sinuosity_enabled_icon.png",
        //             "submenu_option_image_blocked_ref": "img/side-bar-icon/sinuosity_blocked_icon.png",
        //             "submenu_option_image_id": "hdi_submenu_image_id",
        //             "submenu_option_id": "shdi_submenu_option_id",
        //             "submenu_option_button_id": "hdi_submenu_option_button",
        //             "submenu_option_button_check_icon_id": "hdi_submenu_option_check",
        //             "submenu_option_button_click_function": dummyTest,
        //             "submenu_bottom_arrow_button_id": "hdi_submenu_bottom_arrow_button_id",
        //             "submenu_option_enabled_state": false,
        //             "available": true,
        //             "river_availability": [true, true, true, true, true],
        //             "data_second_level_submenu_options": []
        //         },
        //         {
        //             "submenu_option_title": "PBI Per Capita",
        //             "submenu_option_title_id": "pbi_per_capita_submenu_option_title_id",
        //             "submenu_option_image_ref": "img/side-bar-icon/arc_wavelength_icon.png",
        //             "submenu_option_image_enabled_ref": "img/side-bar-icon/arc_wavelength_enabled_icon.png",
        //             "submenu_option_image_blocked_ref": "img/side-bar-icon/arc_wavelength_blocked_icon.png",
        //             "submenu_option_image_id": "pbi_per_capita_submenu_image_id",
        //             "submenu_option_id": "pbi_per_capita_submenu_option_id",
        //             "submenu_option_button_id": "pbi_per_capita_submenu_option_button",
        //             "submenu_option_button_check_icon_id": "pbi_per_capita_submenu_option_check",
        //             "submenu_option_button_click_function": dummyTest,
        //             "submenu_bottom_arrow_button_id": "pbi_per_capita_submenu_bottom_arrow_button_id",
        //             "submenu_option_enabled_state": false,
        //             "available": true,
        //             "river_availability": [true, true, true, true, true],
        //             "data_second_level_submenu_options": []
        //         },
        //         {
        //             "submenu_option_title": "Public Services Access",
        //             "submenu_option_title_id": "public_services_access_submenu_option_title_id",
        //             "submenu_option_image_ref": "img/side-bar-icon/access_public_services_icon.png",
        //             "submenu_option_image_enabled_ref": "img/side-bar-icon/migration_enabled_icon.png",
        //             "submenu_option_image_blocked_ref": "img/side-bar-icon/migration_blocked_icon.png",
        //             "submenu_option_image_id": "public_services_access_submenu_image_id",
        //             "submenu_option_id": "public_services_access_submenu_option_id",
        //             "submenu_option_button_id": "public_services_access_submenu_option_button",
        //             "submenu_option_button_check_icon_id": "public_services_access_submenu_option_check",
        //             "submenu_option_button_click_function": dummyTest,
        //             "submenu_bottom_arrow_button_id": "public_service_access_submenu_bottom_arrow_button_id",
        //             "submenu_option_enabled_state": false,
        //             "available": true,
        //             "river_availability": [true, true, true, true, true],
        //             "data_second_level_submenu_options": [
        //                 {
        //                     "submenu_option_title": "Without Public Water System",
        //                     "submenu_option_title_id": "without_water_submenu_option_title_id",
        //                     "submenu_option_image_ref": "img/side-bar-icon/no_water_icon.png",
        //                     "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
        //                     "submenu_option_image_id": "without_water_submenu_image_id",
        //                     "submenu_option_id": "without_water_submenu_option_id",
        //                     "submenu_option_button_id": "without_water_submenu_option_button",
        //                     "submenu_option_button_check_icon_id": "without_water_submenu_option_check",
        //                     "submenu_option_button_click_function": dummyTest,
        //                     "submenu_bottom_arrow_button_id": "without_water_submenu_bottom_arrow_button_id",
        //                     "submenu_option_enabled_state": true,
        //                     "available": true,
        //                     "river_availability": [true, true, true, true, true]
        //                 },
        //                 {
        //                     "submenu_option_title": "Without Public Sewer Network",
        //                     "submenu_option_title_id": "without_sewer_submenu_option_title_id",
        //                     "submenu_option_image_ref": "img/side-bar-icon/no_drainage_icon.png",
        //                     "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
        //                     "submenu_option_image_id": "without_sewer_submenu_image_id",
        //                     "submenu_option_id": "without_sewer_submenu_option_id",
        //                     "submenu_option_button_id": "without_sewer_submenu_option_button",
        //                     "submenu_option_button_check_icon_id": "without_sewer_submenu_option_check",
        //                     "submenu_option_button_click_function": dummyTest,
        //                     "submenu_bottom_arrow_button_id": "without_sewer_submenu_bottom_arrow_button_id",
        //                     "submenu_option_enabled_state": true,
        //                     "available": true,
        //                     "river_availability": [true, true, true, true, true]
        //                 },
        //                 {
        //                     "submenu_option_title": "Without Electricity Connection",
        //                     "submenu_option_title_id": "without_electricity_submenu_option_title_id",
        //                     "submenu_option_image_ref": "img/side-bar-icon/no_electricity_icon.png",
        //                     "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
        //                     "submenu_option_image_id": "without_electricity_submenu_image_id",
        //                     "submenu_option_id": "without_electricity_submenu_option_id",
        //                     "submenu_option_button_id": "without_electricity_submenu_option_button",
        //                     "submenu_option_button_check_icon_id": "without_electricity_submenu_option_check",
        //                     "submenu_option_button_click_function": dummyTest,
        //                     "submenu_bottom_arrow_button_id": "without_electricity_submenu_bottom_arrow_button_id",
        //                     "submenu_option_enabled_state": true,
        //                     "available": true,
        //                     "river_availability": [true, true, true, true, true]
        //                 },
        //                 {
        //                     "submenu_option_title": "Internet Connection",
        //                     "submenu_option_title_id": "internet_connection_submenu_option_title_id",
        //                     "submenu_option_image_ref": "img/side-bar-icon/internet_icon.png",
        //                     "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
        //                     "submenu_option_image_id": "internet_connection_submenu_image_id",
        //                     "submenu_option_id": "internet_connection_submenu_option_id",
        //                     "submenu_option_button_id": "internet_connection_submenu_option_button",
        //                     "submenu_option_button_check_icon_id": "internet_connection_submenu_option_check",
        //                     "submenu_option_button_click_function": dummyTest,
        //                     "submenu_bottom_arrow_button_id": "internet_connection_submenu_bottom_arrow_button_id",
        //                     "submenu_option_enabled_state": true,
        //                     "available": true,
        //                     "river_availability": [true, true, true, true, true]
        //                 },
        //             ]
        //         },
        //
        //     ]
        //
        // },
        {
            "submenu_name": "geography_submenu",
            "options": [

                {
                    "submenu_option_title": "Hidrography",
                    "submenu_option_title_id": "hidrography_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/hydrography_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/water_level_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/water_level_blocked_icon.png",
                    "submenu_option_image_id": "hidrography_submenu_image_id",
                    "submenu_option_id": "hidrography_submenu_option_id",
                    "submenu_option_button_id": "hidrography_submenu_option_button",
                    "submenu_option_button_check_icon_id": "hidrography_submenu_option_check",
                    "submenu_option_button_click_function": dummyTest,
                    "submenu_bottom_arrow_button_id": "hidrography_submenu_bottom_arrow_button_id",
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": [
                        {
                            "submenu_option_title": "Basin",
                            "submenu_option_title_id": "hydrography_basin_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/hydrography_basin_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/hydrography_basin_enabled_icon.png",
                            "submenu_option_image_id": "hydrography_basin_submenu_image_id",
                            "submenu_option_id": "hydrography_basin_submenu_option_id",
                            "submenu_option_button_id": "hydrography_basin_submenu_option_button",
                            "submenu_option_button_check_icon_id": "hydrography_basin_submenu_option_check",
                            "submenu_option_button_click_function": hydrography_basins_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "hydrography_basin_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Rivers",
                            "submenu_option_title_id": "hydrography_rivers_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/geography_river_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/geography_river_enabled_icon.png",
                            "submenu_option_image_id": "hydrography_rivers_submenu_image_id",
                            "submenu_option_id": "hydrography_rivers_submenu_option_id",
                            "submenu_option_button_id": "hydrography_rivers_submenu_option_button",
                            "submenu_option_button_check_icon_id": "hydrography_rivers_submenu_option_check",
                            "submenu_option_button_click_function": hydrography_rivers_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "hydrography_rivers_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        // {
                        //     "submenu_option_title": "Streams",
                        //     "submenu_option_title_id": "quebradas_submenu_option_title_id",
                        //     "submenu_option_image_ref": "img/side-bar-icon/hydrography_stream_icon.png",
                        //     "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                        //     "submenu_option_image_id": "quebradas_submenu_image_id",
                        //     "submenu_option_id": "quebradas_submenu_option_id",
                        //     "submenu_option_button_id": "quebradas_submenu_option_button",
                        //     "submenu_option_button_check_icon_id": "quebradas_submenu_option_check",
                        //     "submenu_option_button_click_function": dummyTest,
                        //     "submenu_bottom_arrow_button_id": "quebradas_submenu_bottom_arrow_button_id",
                        //     "submenu_option_enabled_state": true,
                        //     "available": true,
                        //     "river_availability": [true, true, true, true, true]
                        // },
                        {
                            "submenu_option_title": "Lagoons & Lakes",
                            "submenu_option_title_id": "lagoons_lakes_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/lake_lagoon_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/lake_lagoon_enabled_icon.png",
                            "submenu_option_image_id": "lagoons_lakes_submenu_image_id",
                            "submenu_option_id": "lagoons_lakes_submenu_option_id",
                            "submenu_option_button_id": "lagoons_lakes_submenu_option_button",
                            "submenu_option_button_check_icon_id": "lagoons_lakes_submenu_option_check",
                            "submenu_option_button_click_function": hydrography_lakes_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "lagoons_lakes_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Glaciers",
                            "submenu_option_title_id": "glaciers_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/glaciers_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/glaciers_enabled_icon.png",
                            "submenu_option_image_id": "glaciers_submenu_image_id",
                            "submenu_option_id": "glaciers_submenu_option_id",
                            "submenu_option_button_id": "glaciers_submenu_option_button",
                            "submenu_option_button_check_icon_id": "glaciers_submenu_option_check",
                            "submenu_option_button_click_function": hydrography_glaciers_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "glaciers_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                    ]
                },
                {
                    "submenu_option_title": "Geology",
                    "submenu_option_title_id": "geology_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/geology_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/flow_rates_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/flow_rates_blocked_icon.png",
                    "submenu_option_image_id": "geology_submenu_image_id",
                    "submenu_option_id": "geology_submenu_option_id",
                    "submenu_option_button_id": "geology_submenu_option_button",
                    "submenu_option_button_check_icon_id": "geology_submenu_option_check",
                    "submenu_option_button_click_function": dummyTest,
                    "submenu_bottom_arrow_button_id": "geology_submenu_bottom_arrow_button_id",
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": []
                },
                // {
                //     "submenu_option_title": "Geomorphology",
                //     "submenu_option_title_id": "geomorphology_submenu_option_title_id",
                //     "submenu_option_image_ref": "img/side-bar-icon/hydrodynamic_icon.png",
                //     "submenu_option_image_enabled_ref": "img/side-bar-icon/hydrodynamic_enabled_icon.png",
                //     "submenu_option_image_blocked_ref": "img/side-bar-icon/hydrodynamic_blocked_icon.png",
                //     "submenu_option_image_id": "geomorphology_submenu_image_id",
                //     "submenu_option_id": "geomorphology_submenu_option_id",
                //     "submenu_option_button_id": "geomorphology_submenu_option_button",
                //     "submenu_option_button_check_icon_id": "geomorphology_submenu_option_check",
                //     "submenu_option_button_click_function": dummyTest,
                //     "submenu_bottom_arrow_button_id": "geomorphology_submenu_bottom_arrow_button_id",
                //     "submenu_option_enabled_state": false,
                //     "available": true,
                //     "river_availability": [true, true, true, true, true],
                //     "data_second_level_submenu_options": []
                // },
                // {
                //     "submenu_option_title": "Land uses",
                //     "submenu_option_title_id": "land_use_submenu_option_title_id",
                //     "submenu_option_image_ref": "img/side-bar-icon/land_use_icon.png",
                //     "submenu_option_image_enabled_ref": "img/side-bar-icon/dunes_enabled_icon.png",
                //     "submenu_option_image_blocked_ref": "img/side-bar-icon/dunes_blocked_icon.png",
                //     "submenu_option_image_id": "land_use_submenu_image_id",
                //     "submenu_option_id": "land_use_submenu_option_id",
                //     "submenu_option_button_id": "land_use_submenu_option_button",
                //     "submenu_option_button_check_icon_id": "land_use_submenu_option_check",
                //     "submenu_option_button_click_function": dummyTest,
                //     "submenu_bottom_arrow_button_id": "land_use_submenu_bottom_arrow_button_id",
                //     "submenu_option_enabled_state": false,
                //     "available": true,
                //     "river_availability": [true, true, true, true, true],
                //     "data_second_level_submenu_options": []
                // },
                {
                    "submenu_option_title": "DEM",
                    "submenu_option_title_id": "dem_geography_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/dem_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/dunes_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/dunes_blocked_icon.png",
                    "submenu_option_image_id": "dem_geography_submenu_image_id",
                    "submenu_option_id": "dem_geography_submenu_option_id",
                    "submenu_option_button_id": "dem_geography_submenu_option_button",
                    "submenu_option_button_check_icon_id": "dem_geography_submenu_option_check",
                    "submenu_option_button_click_function": demMenuOptionClicked,
                    "submenu_bottom_arrow_button_id": "dem_geography_submenu_bottom_arrow_button_id",
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": []
                },
                // {
                //     "submenu_option_title": "Environmental",
                //     "submenu_option_title_id": "environmental_submenu_option_title_id",
                //     "submenu_option_image_ref": "img/side-bar-icon/environmental_icon.png",
                //     "submenu_option_image_enabled_ref": "img/side-bar-icon/bedload_enabled_icon.png",
                //     "submenu_option_image_blocked_ref": "img/side-bar-icon/bedload_blocked_icon.png",
                //     "submenu_option_image_id": "environmental_submenu_image_id",
                //     "submenu_option_id": "environmental_submenu_option_id",
                //     "submenu_option_button_id": "environmental_submenu_option_button",
                //     "submenu_option_button_check_icon_id": "environmental_submenu_option_check",
                //     "submenu_option_button_click_function": dummyTest,
                //     "submenu_bottom_arrow_button_id": "environmental_submenu_bottom_arrow_button_id",
                //     "submenu_option_enabled_state": false,
                //     "available": true,
                //     "river_availability": [true, true, true, true, true],
                //     "data_second_level_submenu_options": [
                //
                //         {
                //             "submenu_option_title": "Green Coverage",
                //             "submenu_option_title_id": "green_coverage_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/vegetation_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                //             "submenu_option_image_id": "green_coverage_rivers_submenu_image_id",
                //             "submenu_option_id": "green_coverage_submenu_option_id",
                //             "submenu_option_button_id": "green_coverage_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "green_coverage_submenu_option_check",
                //             "submenu_option_button_click_function": dummyTest,
                //             "submenu_bottom_arrow_button_id": "green_coverage_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //         {
                //             "submenu_option_title": "Life Zones",
                //             "submenu_option_title_id": "life_zones_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/life_zones_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                //             "submenu_option_image_id": "life_zones_submenu_image_id",
                //             "submenu_option_id": "life_zones_submenu_option_id",
                //             "submenu_option_button_id": "life_zones_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "life_zones_submenu_option_check",
                //             "submenu_option_button_click_function": dummyTest,
                //             "submenu_bottom_arrow_button_id": "life_zones_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //         {
                //             "submenu_option_title": "Ecosystems",
                //             "submenu_option_title_id": "ecosystems_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/ecosystem_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                //             "submenu_option_image_id": "ecosystems_submenu_image_id",
                //             "submenu_option_id": "ecosystems_submenu_option_id",
                //             "submenu_option_button_id": "ecosystems_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "ecosystems_submenu_option_check",
                //             "submenu_option_button_click_function": dummyTest,
                //             "submenu_bottom_arrow_button_id": "ecosystems_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //         // {
                //         //     "submenu_option_title": "Oil Spill",
                //         //     "submenu_option_title_id": "oil_spill_submenu_option_title_id",
                //         //     "submenu_option_image_ref": "img/side-bar-icon/H_icon.png",
                //         //     "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                //         //     "submenu_option_image_id": "oil_spill_submenu_image_id",
                //         //     "submenu_option_id": "oil_spill_submenu_option_id",
                //         //     "submenu_option_button_id": "oil_spill_submenu_option_button",
                //         //     "submenu_option_button_check_icon_id": "oil_spill_submenu_option_check",
                //         //     "submenu_option_button_click_function": huallaga_submenu_option_clicked,
                //         //     "submenu_bottom_arrow_button_id": "oil_spill_submenu_bottom_arrow_button_id",
                //         //     "submenu_option_enabled_state": true,
                //         //     "available": true,
                //         //     "river_availability": [true, true, true, true, true]
                //         // },
                //     ]
                // },
                // {
                //     "submenu_option_title": "Climate",
                //     "submenu_option_title_id": "climate_submenu_option_title_id",
                //     "submenu_option_image_ref": "img/side-bar-icon/climate_icon.png",
                //     "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
                //     "submenu_option_image_id": "climate_submenu_image_id",
                //     "submenu_option_id": "climate_submenu_option_id",
                //     "submenu_option_button_id": "climate_submenu_option_button",
                //     "submenu_option_button_check_icon_id": "climate_submenu_option_check",
                //     "submenu_option_button_click_function": dummyTest,
                //     "submenu_bottom_arrow_button_id": "climate_submenu_bottom_arrow_button_id",
                //     "submenu_option_enabled_state": false,
                //     "available": true,
                //     "river_availability": [true, true, true, true, true],
                //     "data_second_level_submenu_options": [
                //
                //         {
                //             "submenu_option_title": "Precipitation",
                //             "submenu_option_title_id": "precipitation_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/precipitation_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                //             "submenu_option_image_id": "precipitation_submenu_image_id",
                //             "submenu_option_id": "precipitation_submenu_option_id",
                //             "submenu_option_button_id": "precipitation_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "precipitation_submenu_option_check",
                //             "submenu_option_button_click_function": dummyTest,
                //             "submenu_bottom_arrow_button_id": "precipitation_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //         {
                //             "submenu_option_title": "Temperature",
                //             "submenu_option_title_id": "temperature_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/temperature_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                //             "submenu_option_image_id": "temperature_submenu_image_id",
                //             "submenu_option_id": "temperature_submenu_option_id",
                //             "submenu_option_button_id": "temperature_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "temperature_submenu_option_check",
                //             "submenu_option_button_click_function": dummyTest,
                //             "submenu_bottom_arrow_button_id": "temperature_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //         {
                //             "submenu_option_title": "Evapotranspiration",
                //             "submenu_option_title_id": "evapotranspiration_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/evapotranspiration_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                //             "submenu_option_image_id": "evapotranspiration_submenu_image_id",
                //             "submenu_option_id": "evapotranspiration_submenu_option_id",
                //             "submenu_option_button_id": "evapotranspiration_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "evapotranspiration_submenu_option_check",
                //             "submenu_option_button_click_function": dummyTest,
                //             "submenu_bottom_arrow_button_id": "evapotranspiration_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //
                //     ]
                // },

            ]

        },
        {
            "submenu_name": "infrastructure_submenu",
            "options": [

                {
                    "submenu_option_title": "Transport",
                    "submenu_option_title_id": "transport_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/transport_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/water_level_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/water_level_blocked_icon.png",
                    "submenu_option_image_id": "transport_submenu_image_id",
                    "submenu_option_id": "transport_submenu_option_id",
                    "submenu_option_button_id": "transport_submenu_option_button",
                    "submenu_option_button_check_icon_id": "transport_submenu_option_check",
                    "submenu_option_button_click_function": dummyTest,
                    "submenu_bottom_arrow_button_id": "transport_submenu_bottom_arrow_button_id",
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": [
                        {
                            "submenu_option_title": "Roadways",
                            "submenu_option_title_id": "roadways_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/road_network_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
                            "submenu_option_image_id": "roadways_submenu_image_id",
                            "submenu_option_id": "roadways_submenu_option_id",
                            "submenu_option_button_id": "roadways_submenu_option_button",
                            "submenu_option_button_check_icon_id": "roadways_submenu_option_check",
                            "submenu_option_button_click_function": dummyTest,
                            "submenu_bottom_arrow_button_id": "roadways_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Ports",
                            "submenu_option_title_id": "ports_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/ports_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/ports_enabled_icon.png",
                            "submenu_option_image_id": "ports_submenu_image_id",
                            "submenu_option_id": "ports_submenu_option_id",
                            "submenu_option_button_id": "ports_submenu_option_button",
                            "submenu_option_button_check_icon_id": "ports_submenu_option_check",
                            "submenu_option_button_click_function": transport_ports_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "ports_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Airports",
                            "submenu_option_title_id": "airports_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/airports_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/airports_enabled_icon.png",
                            "submenu_option_image_id": "airports_submenu_image_id",
                            "submenu_option_id": "airports_submenu_option_id",
                            "submenu_option_button_id": "airports_submenu_option_button",
                            "submenu_option_button_check_icon_id": "airports_submenu_option_check",
                            "submenu_option_button_click_function": transport_airports_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "airports_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Railways",
                            "submenu_option_title_id": "railways_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/railroads_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                            "submenu_option_image_id": "railways_submenu_image_id",
                            "submenu_option_id": "railways_submenu_option_id",
                            "submenu_option_button_id": "railways_submenu_option_button",
                            "submenu_option_button_check_icon_id": "railways_submenu_option_check",
                            "submenu_option_button_click_function": dummyTest,
                            "submenu_bottom_arrow_button_id": "railways_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                    ]
                },
                {
                    "submenu_option_title": "Energy",
                    "submenu_option_title_id": "energy_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/energy_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/flow_rates_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/flow_rates_blocked_icon.png",
                    "submenu_option_image_id": "energy_submenu_image_id",
                    "submenu_option_id": "energy_submenu_option_id",
                    "submenu_option_button_id": "energy_submenu_option_button",
                    "submenu_option_button_check_icon_id": "energy_submenu_option_check",
                    "submenu_option_button_click_function": dummyTest,
                    "submenu_bottom_arrow_button_id": "energy_submenu_bottom_arrow_button_id",
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": [
                        // {
                        //     "submenu_option_title": "Hydroelectric Power Plants",
                        //     "submenu_option_title_id": "hydroelectric_submenu_option_title_id",
                        //     "submenu_option_image_ref": "img/side-bar-icon/A_icon.png",
                        //     "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
                        //     "submenu_option_image_id": "hydroelectric_submenu_image_id",
                        //     "submenu_option_id": "hydroelectric_submenu_option_id",
                        //     "submenu_option_button_id": "hydroelectric_submenu_option_button",
                        //     "submenu_option_button_check_icon_id": "hydroelectric_submenu_option_check",
                        //     "submenu_option_button_click_function": amazonas_submenu_option_clicked,
                        //     "submenu_bottom_arrow_button_id": "hydroelectric_submenu_bottom_arrow_button_id",
                        //     "submenu_option_enabled_state": true,
                        //     "available": true,
                        //     "river_availability": [true, true, true, true, true]
                        // },
                        // {
                        //     "submenu_option_title": "Thermoelectric Power Plants",
                        //     "submenu_option_title_id": "thermoelectric_submenu_option_title_id",
                        //     "submenu_option_image_ref": "img/side-bar-icon/H_icon.png",
                        //     "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                        //     "submenu_option_image_id": "thermoelectric_submenu_image_id",
                        //     "submenu_option_id": "thermoelectric_submenu_option_id",
                        //     "submenu_option_button_id": "thermoelectric_submenu_option_button",
                        //     "submenu_option_button_check_icon_id": "thermoelectric_submenu_option_check",
                        //     "submenu_option_button_click_function": huallaga_submenu_option_clicked,
                        //     "submenu_bottom_arrow_button_id": "thermoelectric_submenu_bottom_arrow_button_id",
                        //     "submenu_option_enabled_state": true,
                        //     "available": true,
                        //     "river_availability": [true, true, true, true, true]
                        // },
                        {
                            "submenu_option_title": "Transmission Lines",
                            "submenu_option_title_id": "transmission_lines_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/transmission_lines_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                            "submenu_option_image_id": "transmission_lines_submenu_image_id",
                            "submenu_option_id": "transmission_lines_submenu_option_id",
                            "submenu_option_button_id": "transmission_lines_submenu_option_button",
                            "submenu_option_button_check_icon_id": "transmission_lines_submenu_option_check",
                            "submenu_option_button_click_function": dummyTest,
                            "submenu_bottom_arrow_button_id": "transmission_lines_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Power plants",
                            "submenu_option_title_id": "power_plants_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/hydroelectric_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                            "submenu_option_image_id": "power_plants_submenu_image_id",
                            "submenu_option_id": "power_plants_submenu_option_id",
                            "submenu_option_button_id": "power_plants_submenu_option_button",
                            "submenu_option_button_check_icon_id": "power_plants_submenu_option_check",
                            "submenu_option_button_click_function": dummyTest,
                            "submenu_bottom_arrow_button_id": "power_plants_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                    ]
                },
                {
                    "submenu_option_title": "Irrigation",
                    "submenu_option_title_id": "irrigation_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/irrigation_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/hydrodynamic_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/hydrodynamic_blocked_icon.png",
                    "submenu_option_image_id": "irrigation_submenu_image_id",
                    "submenu_option_id": "irrigation_submenu_option_id",
                    "submenu_option_button_id": "irrigation_submenu_option_button",
                    "submenu_option_button_check_icon_id": "irrigation_submenu_option_check",
                    "submenu_option_button_click_function": dummyTest,
                    "submenu_bottom_arrow_button_id": "irrigation_submenu_bottom_arrow_button_id",
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": [
                        {
                            "submenu_option_title": "Reservoirs",
                            "submenu_option_title_id": "reservoirs_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/A_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
                            "submenu_option_image_id": "reservoirs_submenu_image_id",
                            "submenu_option_id": "reservoirs_submenu_option_id",
                            "submenu_option_button_id": "reservoirs_submenu_option_button",
                            "submenu_option_button_check_icon_id": "reservoirs_submenu_option_check",
                            "submenu_option_button_click_function": dummyTest,
                            "submenu_bottom_arrow_button_id": "reservoirs_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Dams",
                            "submenu_option_title_id": "dams_irrigation_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/H_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                            "submenu_option_image_id": "dams_irrigation_submenu_image_id",
                            "submenu_option_id": "dams_irrigation_submenu_option_id",
                            "submenu_option_button_id": "dams_irrigation_submenu_option_button",
                            "submenu_option_button_check_icon_id": "dams_irrigation_submenu_option_check",
                            "submenu_option_button_click_function": dummyTest,
                            "submenu_bottom_arrow_button_id": "dams_irrigation_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Main channels",
                            "submenu_option_title_id": "main_channels_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/H_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                            "submenu_option_image_id": "main_channels_submenu_image_id",
                            "submenu_option_id": "main_channels_submenu_option_id",
                            "submenu_option_button_id": "main_channels_submenu_option_button",
                            "submenu_option_button_check_icon_id": "main_channels_submenu_option_check",
                            "submenu_option_button_click_function": dummyTest,
                            "submenu_bottom_arrow_button_id": "main_channels_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Wells",
                            "submenu_option_title_id": "wells_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/H_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                            "submenu_option_image_id": "wells_submenu_image_id",
                            "submenu_option_id": "wells_submenu_option_id",
                            "submenu_option_button_id": "channels_submenu_option_button",
                            "submenu_option_button_check_icon_id": "channels_submenu_option_check",
                            "submenu_option_button_click_function": dummyTest,
                            "submenu_bottom_arrow_button_id": "channels_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                    ]
                },
                {
                    "submenu_option_title": "Extractive",
                    "submenu_option_title_id": "extractive_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/dunes_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/dunes_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/dunes_blocked_icon.png",
                    "submenu_option_image_id": "extractive_submenu_image_id",
                    "submenu_option_id": "extractive_submenu_option_id",
                    "submenu_option_button_id": "extractive_submenu_option_button",
                    "submenu_option_button_check_icon_id": "extractive_submenu_option_check",
                    "submenu_option_button_click_function": dummyTest,
                    "submenu_bottom_arrow_button_id": "extractive_submenu_bottom_arrow_button_id",
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": [
                        {
                            "submenu_option_title": "Mining projects",
                            "submenu_option_title_id": "mining_projects_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/mining_projects_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/mining_projects_enabled_icon.png",
                            "submenu_option_image_id": "mining_projects_submenu_image_id",
                            "submenu_option_id": "mining_projects_submenu_option_id",
                            "submenu_option_button_id": "mining_projects_submenu_option_button",
                            "submenu_option_button_check_icon_id": "mining_projects_submenu_option_check",
                            "submenu_option_button_click_function": extractive_mining_projects_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "mining_projects_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Hydrocarbons",
                            "submenu_option_title_id": "hydrocarbons_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/hydrocarbons_projects_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/hydrocarbons_projects_enabled_icon.png",
                            "submenu_option_image_id": "hydrocarbons_submenu_image_id",
                            "submenu_option_id": "hydrocarbons_submenu_option_id",
                            "submenu_option_button_id": "hydrocarbons_submenu_option_button",
                            "submenu_option_button_check_icon_id": "hydrocarbons_submenu_option_check",
                            "submenu_option_button_click_function": extractive_hydrocarbons_submenu_option_clicked,
                            "submenu_bottom_arrow_button_id": "hydrocarbons_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                        {
                            "submenu_option_title": "Wood industry",
                            "submenu_option_title_id": "wood_industry_submenu_option_title_id",
                            "submenu_option_image_ref": "img/side-bar-icon/wood_projects_icon.png",
                            "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
                            "submenu_option_image_id": "wood_industry_submenu_image_id",
                            "submenu_option_id": "wood_industry_submenu_option_id",
                            "submenu_option_button_id": "wood_industry_submenu_option_button",
                            "submenu_option_button_check_icon_id": "wood_industry_submenu_option_check",
                            "submenu_option_button_click_function": dummyTest,
                            "submenu_bottom_arrow_button_id": "wood_industry_submenu_bottom_arrow_button_id",
                            "submenu_option_enabled_state": true,
                            "available": true,
                            "river_availability": [true, true, true, true, true]
                        },
                    ]
                },
                // {
                //     "submenu_option_title": "Health",
                //     "submenu_option_title_id": "health_submenu_option_title_id",
                //     "submenu_option_image_ref": "img/side-bar-icon/health_icon.png",
                //     "submenu_option_image_enabled_ref": "img/side-bar-icon/dunes_enabled_icon.png",
                //     "submenu_option_image_blocked_ref": "img/side-bar-icon/dunes_blocked_icon.png",
                //     "submenu_option_image_id": "health_submenu_image_id",
                //     "submenu_option_id": "health_submenu_option_id",
                //     "submenu_option_button_id": "health_submenu_option_button",
                //     "submenu_option_button_check_icon_id": "health_submenu_option_check",
                //     "submenu_option_button_click_function": dummyTest,
                //     "submenu_bottom_arrow_button_id": "health_submenu_bottom_arrow_button_id",
                //     "submenu_option_enabled_state": false,
                //     "available": true,
                //     "river_availability": [true, true, true, true, true],
                //     "data_second_level_submenu_options": [
                //         {
                //             "submenu_option_title": "Hospitals",
                //             "submenu_option_title_id": "hospitals_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/hospitals_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
                //             "submenu_option_image_id": "hospitals_submenu_image_id",
                //             "submenu_option_id": "hospitals_submenu_option_id",
                //             "submenu_option_button_id": "hospitals_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "hospitals_submenu_option_check",
                //             "submenu_option_button_click_function": dummyTest,
                //             "submenu_bottom_arrow_button_id": "hospitals_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //         {
                //             "submenu_option_title": "Health centers",
                //             "submenu_option_title_id": "health_centers_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/health_center_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
                //             "submenu_option_image_id": "health_centers_submenu_image_id",
                //             "submenu_option_id": "health_centers_submenu_option_id",
                //             "submenu_option_button_id": "health_centers_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "health_centers_submenu_option_check",
                //             "submenu_option_button_click_function": dummyTest,
                //             "submenu_bottom_arrow_button_id": "health_centers_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //         {
                //             "submenu_option_title": "Health posts",
                //             "submenu_option_title_id": "health_posts_submenu_option_title_id",
                //             "submenu_option_image_ref": "img/side-bar-icon/health_posts_icon.png",
                //             "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
                //             "submenu_option_image_id": "health_posts_submenu_image_id",
                //             "submenu_option_id": "health_posts_submenu_option_id",
                //             "submenu_option_button_id": "health_posts_submenu_option_button",
                //             "submenu_option_button_check_icon_id": "health_posts_submenu_option_check",
                //             "submenu_option_button_click_function": dummyTest,
                //             "submenu_bottom_arrow_button_id": "health_posts_submenu_bottom_arrow_button_id",
                //             "submenu_option_enabled_state": true,
                //             "available": true,
                //             "river_availability": [true, true, true, true, true]
                //         },
                //     ]
                // },

            ],

        },
        // {
        //     "submenu_name": "risk_management_submenu",
        //     "options": [
        //
        //         {
        //             "submenu_option_title": "Danger Map",
        //             "submenu_option_title_id": "danger_map_submenu_option_title_id",
        //             "submenu_option_image_ref": "img/side-bar-icon/hazard_icon.png",
        //             "submenu_option_image_enabled_ref": "img/side-bar-icon/water_level_enabled_icon.png",
        //             "submenu_option_image_blocked_ref": "img/side-bar-icon/water_level_blocked_icon.png",
        //             "submenu_option_image_id": "danger_map_submenu_image_id",
        //             "submenu_option_id": "danger_map_submenu_option_id",
        //             "submenu_option_button_id": "danger_map_submenu_option_button",
        //             "submenu_option_button_check_icon_id": "danger_map_submenu_option_check",
        //             "submenu_option_button_click_function": dummyTest,
        //             "submenu_bottom_arrow_button_id": "danger_map_submenu_bottom_arrow_button_id",
        //             "submenu_option_enabled_state": false,
        //             "available": true,
        //             "river_availability": [true, true, true, true, true],
        //             "data_second_level_submenu_options": [
        //                 {
        //                     "submenu_option_title": "Floods",
        //                     "submenu_option_title_id": "floods_hazard_submenu_option_title_id",
        //                     "submenu_option_image_ref": "img/side-bar-icon/flood_icon.png",
        //                     "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
        //                     "submenu_option_image_id": "floods_hazard_submenu_image_id",
        //                     "submenu_option_id": "floods_hazard_submenu_option_id",
        //                     "submenu_option_button_id": "floods_hazard_submenu_option_button",
        //                     "submenu_option_button_check_icon_id": "floods_hazard_submenu_option_check",
        //                     "submenu_option_button_click_function": dummyTest,
        //                     "submenu_bottom_arrow_button_id": "floods_hazard_submenu_bottom_arrow_button_id",
        //                     "submenu_option_enabled_state": true,
        //                     "available": true,
        //                     "river_availability": [true, true, true, true, true]
        //                 },
        //                 {
        //                     "submenu_option_title": "Earthquakes",
        //                     "submenu_option_title_id": "earthquakes_hazard_submenu_option_title_id",
        //                     "submenu_option_image_ref": "img/side-bar-icon/earthquake_icon.png",
        //                     "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
        //                     "submenu_option_image_id": "earthquakes_hazard_submenu_image_id",
        //                     "submenu_option_id": "earthquakes_hazard_submenu_option_id",
        //                     "submenu_option_button_id": "earthquakes_hazard_submenu_option_button",
        //                     "submenu_option_button_check_icon_id": "earthquakes_hazard_submenu_option_check",
        //                     "submenu_option_button_click_function": dummyTest,
        //                     "submenu_bottom_arrow_button_id": "earthquakes_hazard_submenu_bottom_arrow_button_id",
        //                     "submenu_option_enabled_state": true,
        //                     "available": true,
        //                     "river_availability": [true, true, true, true, true]
        //                 },
        //                 {
        //                     "submenu_option_title": "Landslides",
        //                     "submenu_option_title_id": "landslides_hazard_submenu_option_title_id",
        //                     "submenu_option_image_ref": "img/side-bar-icon/landslide_icon.png",
        //                     "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
        //                     "submenu_option_image_id": "landslides_hazard_submenu_image_id",
        //                     "submenu_option_id": "landslides_hazard_submenu_option_id",
        //                     "submenu_option_button_id": "landslides_hazard_submenu_option_button",
        //                     "submenu_option_button_check_icon_id": "landslides_hazard_submenu_option_check",
        //                     "submenu_option_button_click_function": dummyTest,
        //                     "submenu_bottom_arrow_button_id": "landslides_hazard_submenu_bottom_arrow_button_id",
        //                     "submenu_option_enabled_state": true,
        //                     "available": true,
        //                     "river_availability": [true, true, true, true, true]
        //                 },
        //             ]
        //         },
        //         {
        //             "submenu_option_title": "Vulnerability Map",
        //             "submenu_option_title_id": "vulnerability_map_submenu_option_title_id",
        //             "submenu_option_image_ref": "img/side-bar-icon/vulnerable_icon.png",
        //             "submenu_option_image_enabled_ref": "img/side-bar-icon/flow_rates_enabled_icon.png",
        //             "submenu_option_image_blocked_ref": "img/side-bar-icon/flow_rates_blocked_icon.png",
        //             "submenu_option_image_id": "vulnerability_map_submenu_image_id",
        //             "submenu_option_id": "vulnerability_map_submenu_option_id",
        //             "submenu_option_button_id": "vulnerability_map_submenu_option_button",
        //             "submenu_option_button_check_icon_id": "vulnerability_map_submenu_option_check",
        //             "submenu_option_button_click_function": dummyTest,
        //             "submenu_bottom_arrow_button_id": "vulnerability_map_submenu_bottom_arrow_button_id",
        //             "submenu_option_enabled_state": false,
        //             "available": true,
        //             "river_availability": [true, true, true, true, true],
        //             "data_second_level_submenu_options": [
        //                 {
        //                     "submenu_option_title": "Floods",
        //                     "submenu_option_title_id": "floods_vulnerability_submenu_option_title_id",
        //                     "submenu_option_image_ref": "img/side-bar-icon/flood_icon.png",
        //                     "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
        //                     "submenu_option_image_id": "floods_vulnerability_submenu_image_id",
        //                     "submenu_option_id": "floods_vulnerability_submenu_option_id",
        //                     "submenu_option_button_id": "floods_vulnerability_submenu_option_button",
        //                     "submenu_option_button_check_icon_id": "floods_vulnerability_submenu_option_check",
        //                     "submenu_option_button_click_function": dummyTest,
        //                     "submenu_bottom_arrow_button_id": "floods_vulnerability_submenu_bottom_arrow_button_id",
        //                     "submenu_option_enabled_state": true,
        //                     "available": true,
        //                     "river_availability": [true, true, true, true, true]
        //                 },
        //                 {
        //                     "submenu_option_title": "Earthquakes",
        //                     "submenu_option_title_id": "earthquakes_vulnerability_submenu_option_title_id",
        //                     "submenu_option_image_ref": "img/side-bar-icon/earthquake_icon.png",
        //                     "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
        //                     "submenu_option_image_id": "earthquakes_vulnerability_submenu_image_id",
        //                     "submenu_option_id": "earthquakes_vulnerability_submenu_option_id",
        //                     "submenu_option_button_id": "earthquakes_vulnerability_submenu_option_button",
        //                     "submenu_option_button_check_icon_id": "earthquakes_vulnerability_submenu_option_check",
        //                     "submenu_option_button_click_function": dummyTest,
        //                     "submenu_bottom_arrow_button_id": "earthquakes_vulnerability_submenu_bottom_arrow_button_id",
        //                     "submenu_option_enabled_state": true,
        //                     "available": true,
        //                     "river_availability": [true, true, true, true, true]
        //                 },
        //                 {
        //                     "submenu_option_title": "Landslides",
        //                     "submenu_option_title_id": "landslides_vulnerability_submenu_option_title_id",
        //                     "submenu_option_image_ref": "img/side-bar-icon/landslide_icon.png",
        //                     "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
        //                     "submenu_option_image_id": "landslides_vulnerability_submenu_image_id",
        //                     "submenu_option_id": "landslides_vulnerability_submenu_option_id",
        //                     "submenu_option_button_id": "landslides_vulnerability_submenu_option_button",
        //                     "submenu_option_button_check_icon_id": "landslides_vulnerability_submenu_option_check",
        //                     "submenu_option_button_click_function": dummyTest,
        //                     "submenu_bottom_arrow_button_id": "landslides_vulnerability_submenu_bottom_arrow_button_id",
        //                     "submenu_option_enabled_state": true,
        //                     "available": true,
        //                     "river_availability": [true, true, true, true, true]
        //                 },
        //             ]
        //         },
        //         {
        //             "submenu_option_title": "Risk Synthesis Map",
        //             "submenu_option_title_id": "risk_synthesis_map_submenu_option_title_id",
        //             "submenu_option_image_ref": "img/side-bar-icon/risk_synthesis_map_icon.png",
        //             "submenu_option_image_enabled_ref": "img/side-bar-icon/hydrodynamic_enabled_icon.png",
        //             "submenu_option_image_blocked_ref": "img/side-bar-icon/hydrodynamic_blocked_icon.png",
        //             "submenu_option_image_id": "risk_synthesis_map_submenu_image_id",
        //             "submenu_option_id": "risk_synthesis_map_submenu_option_id",
        //             "submenu_option_button_id": "risk_synthesis_map_submenu_option_button",
        //             "submenu_option_button_check_icon_id": "risk_synthesis_map_submenu_option_check",
        //             "submenu_option_button_click_function": dummyTest,
        //             "submenu_bottom_arrow_button_id": "risk_synthesis_map_submenu_bottom_arrow_button_id",
        //             "submenu_option_enabled_state": false,
        //             "available": true,
        //             "river_availability": [true, true, true, true, true],
        //             "data_second_level_submenu_options": []
        //         },
        //         {
        //             "submenu_option_title": "Oil spills",
        //             "submenu_option_title_id": "oil_spills_submenu_option_title_id",
        //             "submenu_option_image_ref": "img/side-bar-icon/oil_spill_icon.png",
        //             "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
        //             "submenu_option_image_id": "oil_spills_submenu_image_id",
        //             "submenu_option_id": "oil_spills_submenu_option_id",
        //             "submenu_option_button_id": "oil_spills_submenu_option_button",
        //             "submenu_option_button_check_icon_id": "oil_spills_submenu_option_check",
        //             "submenu_option_button_click_function": dummyTest,
        //             "submenu_bottom_arrow_button_id": "oil_spills_submenu_bottom_arrow_button_id",
        //             "submenu_option_enabled_state": false,
        //             "available": true,
        //             "river_availability": [true, true, true, true, true],
        //             "data_second_level_submenu_options": []
        //         },
        //
        //
        //     ],
        //
        // },
        {
            "submenu_name": "stations_submenu",
            "options": [

                {
                    "submenu_option_title": "IGN",
                    "submenu_option_title_id": "ign_map_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/ign_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/marker_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/marker_blocked_icon.png",
                    "submenu_option_image_id": "ign_map_submenu_image_id",
                    "submenu_option_id": "ign_map_submenu_option_id",
                    "submenu_option_button_id": "ign_map_submenu_option_button",
                    "submenu_option_button_check_icon_id": "ign_map_submenu_option_check",
                    "submenu_option_button_click_function": dummyTest,
                    "submenu_bottom_arrow_button_id": "ign_map_submenu_bottom_arrow_button_id",
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "SENAMHI",
                    "submenu_option_title_id": "senamhi_map_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/senamhi_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/grid_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/grid_blocked_icon.png",
                    "submenu_option_image_id": "senamhi_map_submenu_image_id",
                    "submenu_option_id": "senamhi_map_submenu_option_id",
                    "submenu_option_button_id": "senamhi_map_submenu_option_button",
                    "submenu_option_button_check_icon_id": "senamhi_map_submenu_option_check",
                    "submenu_option_button_click_function": dummyTest,
                    "submenu_bottom_arrow_button_id": "senamhi_map_submenu_bottom_arrow_button_id",
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": []
                }

            ]

        },

    ]

};

var background_data_menu_options = background_data_dancing_rivers["data_menu_options"];
var background_data_submenu_options = background_data_dancing_rivers["data_submenu_options"];
var dem_layer_status = false;
var dem_enabled = false;

//Background Data Geopolitic

var districts_layers_added = false;
var districts_layers_visible = false;
var provinces_layers_added = false;
var provinces_layers_visible = false;
var departments_layers_added = false;
var departments_layers_visible = false;

var populated_areas_native_communities_layers_added = false;
var populated_areas_native_communities_layers_visible = false;
var populated_areas_rural_communities_layers_added = false;
var populated_areas_rural_communities_layers_visible = false;

//Background Data Protected Natural Areas
var pna_national_layers_added = false;
var pna_national_layers_visible = false;
var pna_regional_layers_added = false;
var pna_regional_layers_visible = false;
var pna_private_layers_added = false;
var pna_private_layers_visible = false;
var pna_buffer_zone_layers_added = false;
var pna_buffer_zone_layers_visible = false;


//Background data Population
var population_department_capital_added = false;
var population_department_capital_visible = false;
var population_province_capital_added = false;
var population_province_capital_visible = false;
var population_district_capital_added = false;
var population_district_capital_visible = false;
var population_town_added = false;
var population_town_visible = false;

//Background Data Hydrography
var hydrography_basins_added = false;
var hydrography_basins_visible = false;
var hydrography_rivers_added = false;
var hydrography_rivers_visible = false;
var hydrography_lakes_added = false;
var hydrography_lakes_visible = false;
var hydrography_glaciers_added = false;
var hydrography_glaciers_visible = false;

//Background Data Transport
var transport_ports_added = false;
var transport_ports_visible = false;
var transport_airports_added = false;
var transport_airports_visible = false;

//Background Data Extractive
var extractive_mining_projects_added = false;
var extractive_mining_projects_visible = false;
var extractive_hydrocarbons_added = false;
var extractive_hydrocarbons_visible = false;


//ePiura JSON Object
// let background_data_dancing_rivers = {
//
//     "data_menu_options": [
//
//         {
//             "menu_option_title": "Research projects",
//             "menu_option_title_id": "research_projects_menu_option_title_id",
//             "menu_option_image_ref": "img/side-bar-icon/communities-icon.png",
//             "menu_option_id": "communities_menu_option_id",
//             "menu_button_option_id": "research_projects_menu_button_option_id",
//             "menu_button_icon_id": "research_projects_menu_button_icon_id",
//             "menu_bottom_arrow_button_id": "research_projects_menu_bottom_arrow_button_id",
//             "available": true
//         },
//         {
//             "menu_option_title": "Gauging stations",
//             "menu_option_title_id": "cita_stations_menu_option_title_id",
//             "menu_option_image_ref": "img/side-bar-icon/elevation_icon.png",
//             "menu_option_id": "cita_stations_menu_option_id",
//             "menu_button_option_id": "cita_stations_menu_button_option_id",
//             "menu_button_icon_id": "cita_stations_menu_button_icon_id",
//             "menu_bottom_arrow_button_id": "cita_stations_menu_bottom_arrow_button_id",
//             "available": true
//         },
//         {
//             "menu_option_title": "Population density by basin",
//             "menu_option_title_id": "population_density_basin_menu_option_title_id",
//             "menu_option_image_ref": "img/side-bar-icon/malos_pasos_icon.png",
//             "menu_option_id": "population_density_menu_option_id",
//             "menu_button_option_id": "population_density_menu_button_option_id",
//             "menu_button_icon_id": "population_density_menu_button_icon_id",
//             "menu_bottom_arrow_button_id": "population_density_menu_bottom_arrow_button_id",
//             "available": true
//         },
//         {
//             "menu_option_title": "Drone flights",
//             "menu_option_title_id": "drone_flights_menu_option_title_id",
//             "menu_option_image_ref": "img/side-bar-icon/drone_icon.png",
//             "menu_option_id": "drone_flights_menu_option_id",
//             "menu_button_option_id": "drone_flights_menu_button_option_id",
//             "menu_button_icon_id": "drone_flights_menu_button_icon_id",
//             "menu_bottom_arrow_button_id": "drone_flights_menu_bottom_arrow_button_id",
//             "available": true
//         },
//
//     ],
//
//     "data_submenu_options": [
//
//         {
//             "submenu_name": "research_projects_submenu",
//             "options": [
//
//                 {
//                     "submenu_option_title": "ePiura",
//                     "submenu_option_title_id": "epiura_submenu_option_title_id",
//                     "submenu_option_image_ref": "img/side-bar-icon/A_icon.png",
//                     "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
//                     "submenu_option_image_id": "epiura_submenu_image_id",
//                     "submenu_option_id": "epiura_submenu_option_id",
//                     "submenu_option_button_id": "epiura_submenu_option_button",
//                     "submenu_option_button_check_icon_id": "epiura_submenu_option_check",
//                     "submenu_option_button_click_functio n": amazonas_submenu_option_clicked,
//                     "submenu_option_enabled_state": true,
//                     "available": true,
//                     "river_availability": [true, true, true, true, true]
//                 },
//                 {
//                     "submenu_option_title": "Aquafondo",
//                     "submenu_option_title_id": "aquafondo_submenu_option_title_id",
//                     "submenu_option_image_ref": "img/side-bar-icon/H_icon.png",
//                     "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
//                     "submenu_option_image_id": "aquafondo_submenu_image_id",
//                     "submenu_option_id": "aquafondo_submenu_option_id",
//                     "submenu_option_button_id": "aquafondo_submenu_option_button",
//                     "submenu_option_button_check_icon_id": "aquafondo_submenu_option_check",
//                     "submenu_option_button_click_function": huallaga_submenu_option_clicked,
//                     "submenu_option_enabled_state": true,
//                     "available": true,
//                     "river_availability": [true, true, true, true, true]
//                 },
//
//             ],
//             "available": true
//
//         },
//         {
//             "submenu_name": "cita_stations_submenu",
//             "options": [
//
//                 {
//                     "submenu_option_title": "LSPIV",
//                     "submenu_option_title_id": "lspiv_submenu_option_title_id",
//                     "submenu_option_image_ref": "img/side-bar-icon/A_icon.png",
//                     "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
//                     "submenu_option_image_id": "lspiv_submenu_image_id",
//                     "submenu_option_id": "lspiv_submenu_option_id",
//                     "submenu_option_button_id": "lspiv_submenu_option_button",
//                     "submenu_option_button_check_icon_id": "lspiv_submenu_option_check",
//                     "submenu_option_button_click_functio n": amazonas_submenu_option_clicked,
//                     "submenu_option_enabled_state": true,
//                     "available": true,
//                     "river_availability": [true, true, true, true, true]
//                 },
//                 {
//                     "submenu_option_title": "Sediments",
//                     "submenu_option_title_id": "sediments_submenu_option_title_id",
//                     "submenu_option_image_ref": "img/side-bar-icon/H_icon.png",
//                     "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
//                     "submenu_option_image_id": "sediments_submenu_image_id",
//                     "submenu_option_id": "sediments_submenu_option_id",
//                     "submenu_option_button_id": "sediments_submenu_option_button",
//                     "submenu_option_button_check_icon_id": "sediments_submenu_option_check",
//                     "submenu_option_button_click_function": huallaga_submenu_option_clicked,
//                     "submenu_option_enabled_state": true,
//                     "available": true,
//                     "river_availability": [true, true, true, true, true]
//                 },
//                 {
//                     "submenu_option_title": "ADCP",
//                     "submenu_option_title_id": "adcp_submenu_option_title_id",
//                     "submenu_option_image_ref": "img/side-bar-icon/H_icon.png",
//                     "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
//                     "submenu_option_image_id": "adcp_submenu_image_id",
//                     "submenu_option_id": "adcp_submenu_option_id",
//                     "submenu_option_button_id": "adcp_submenu_option_button",
//                     "submenu_option_button_check_icon_id": "adcp_submenu_option_check",
//                     "submenu_option_button_click_function": huallaga_submenu_option_clicked,
//                     "submenu_option_enabled_state": true,
//                     "available": true,
//                     "river_availability": [true, true, true, true, true]
//                 },
//
//             ],
//             "available": true
//
//         },
//         {
//             "submenu_name": "population_density_basin_submenu",
//             "options": [
//
//                 {
//                     "submenu_option_title": "Piura",
//                     "submenu_option_title_id": "piura_submenu_option_title_id",
//                     "submenu_option_image_ref": "img/side-bar-icon/A_icon.png",
//                     "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
//                     "submenu_option_image_id": "piura_submenu_image_id",
//                     "submenu_option_id": "piura_submenu_option_id",
//                     "submenu_option_button_id": "piura_submenu_option_button",
//                     "submenu_option_button_check_icon_id": "piura_submenu_option_check",
//                     "submenu_option_button_click_function": amazonas_submenu_option_clicked,
//                     "submenu_option_enabled_state": true,
//                     "available": true,
//                     "river_availability": [true, true, true, true, true]
//                 },
//                 {
//                     "submenu_option_title": "Chira",
//                     "submenu_option_title_id": "chira_submenu_option_title_id",
//                     "submenu_option_image_ref": "img/side-bar-icon/H_icon.png",
//                     "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
//                     "submenu_option_image_id": "chira_submenu_image_id",
//                     "submenu_option_id": "chira_submenu_option_id",
//                     "submenu_option_button_id": "chira_submenu_option_button",
//                     "submenu_option_button_check_icon_id": "chira_submenu_option_check",
//                     "submenu_option_button_click_function": huallaga_submenu_option_clicked,
//                     "submenu_option_enabled_state": true,
//                     "available": true,
//                     "river_availability": [true, true, true, true, true]
//                 },
//                 {
//                     "submenu_option_title": "Rímac",
//                     "submenu_option_title_id": "rimac_submenu_option_title_id",
//                     "submenu_option_image_ref": "img/side-bar-icon/H_icon.png",
//                     "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
//                     "submenu_option_image_id": "rimac_submenu_image_id",
//                     "submenu_option_id": "rimac_submenu_option_id",
//                     "submenu_option_button_id": "rimac_submenu_option_button",
//                     "submenu_option_button_check_icon_id": "rimac_submenu_option_check",
//                     "submenu_option_button_click_function": huallaga_submenu_option_clicked,
//                     "submenu_option_enabled_state": true,
//                     "available": true,
//                     "river_availability": [true, true, true, true, true]
//                 },
//
//             ],
//             "available": true
//
//         },
//         {
//             "submenu_name": "drone_flights_submenu",
//             "options": [],
//             "available": false
//
//         },
//
//     ]
//
// };

//</editor-fold>



//<editor-fold desc="FUNCTIONS">

/**
 * Creates the menu, submenu and second level submenu structure iterating over the background data JSON object. The html structure is based in templates
 * elements defined in the html main file
 * @param menu_options_JSON
 * @param submenu_options_JSON
 */
function set_background_data_menu(menu_options_JSON, submenu_options_JSON) {

    var background_data_content_list_template = document.getElementsByTagName("template")[11];
    var background_data_content_menu_option_template = document.getElementsByTagName("template")[12];
    var background_data_content_submenu_template = document.getElementsByTagName("template")[13];
    var background_data_content_second_level_submenu_template = document.getElementsByTagName("template")[16];
    var background_data_content_list_template_content = document.importNode(background_data_content_list_template.content,true);

    for(var i = 0; i < menu_options_JSON.length; i++){

        var background_data_content_menu_option_template_content = document.importNode(background_data_content_menu_option_template.content,true);

        background_data_content_menu_option_template_content.getElementById("data-background-menu-button").style.paddingTop = (i === 0) ? "8%" : "4%";
        background_data_content_menu_option_template_content.getElementById("data-background-menu-button").id = menu_options_JSON[i].menu_button_option_id;
        background_data_content_menu_option_template_content.getElementById("background-data-submenu-container").id = menu_options_JSON[i].menu_option_id;
        background_data_content_menu_option_template_content.getElementById("data-background-menu-title").innerHTML = menu_options_JSON[i].menu_option_title;
        background_data_content_menu_option_template_content.getElementById("data-background-menu-title").style.color = menu_options_JSON[i].available ? "#FFFFFF" : "#323232";
        background_data_content_menu_option_template_content.getElementById("data-background-menu-title").setAttribute("data-i18n", menu_options_JSON[i].menu_option_title_id);
        background_data_content_menu_option_template_content.getElementById("data-background-menu-title").id = menu_options_JSON[i].menu_option_title_id;
        background_data_content_menu_option_template_content.getElementById("data-background-menu-icon").src = menu_options_JSON[i].menu_option_image_ref;
        background_data_content_menu_option_template_content.getElementById("data-background-menu-icon").id = menu_options_JSON[i].menu_button_icon_id;
        background_data_content_menu_option_template_content.getElementById("menu-arrow-bottom-image").id = menu_options_JSON[i].menu_bottom_arrow_button_id;

        (function (i) {

            background_data_content_menu_option_template_content.getElementById(menu_options_JSON[i].menu_bottom_arrow_button_id).addEventListener("click", function () {

                if(document.getElementById(menu_options_JSON[i].menu_option_id).style.maxHeight === "40vh"){
                    document.getElementById(menu_options_JSON[i].menu_option_id).style.maxHeight = "0";
                    document.getElementById(menu_options_JSON[i].menu_bottom_arrow_button_id).src = "img/side-bar-icon/arrow_bottom_icon.png";
                }else{
                    document.getElementById(menu_options_JSON[i].menu_option_id).style.maxHeight = "40vh";
                    document.getElementById(menu_options_JSON[i].menu_bottom_arrow_button_id).src = "img/side-bar-icon/arrow_up_icon.png";
                }

            });

        }(i));

        background_data_content_list_template_content.getElementById("data-background-content-list").appendChild(background_data_content_menu_option_template_content);

        for(var j = 0; j < submenu_options_JSON[i].options.length; j++){

            var background_data_content_submenu_template_content = document.importNode(background_data_content_submenu_template.content,true);
            background_data_content_submenu_template_content.getElementById("background-data-second-level-submenu-container").id = submenu_options_JSON[i].options[j].submenu_option_id;
            background_data_content_submenu_template_content.getElementById("data-background-submenu-title").innerHTML = submenu_options_JSON[i].options[j].submenu_option_title;
            background_data_content_submenu_template_content.getElementById("data-background-submenu-title").style.color = submenu_options_JSON[i].options[j].available ? "white" : submenu_option_text_color;
            // background_data_content_submenu_template_content.getElementById("data-background-submenu-title").style.color = submenu_options_JSON[i].options[j].submenu_option_enabled_state ? "#00BFDF" : background_data_content_submenu_template_content.getElementById("data-background-submenu-title").style.color;
            background_data_content_submenu_template_content.getElementById("data-background-submenu-title").setAttribute("data-i18n", submenu_options_JSON[i].options[j].submenu_option_title_id);
            background_data_content_submenu_template_content.getElementById("data-background-submenu-title").id = submenu_options_JSON[i].options[j].submenu_option_title_id;
            background_data_content_submenu_template_content.getElementById("data-background-submenu-icon").src = submenu_options_JSON[i].options[j].submenu_option_enabled_state ? submenu_options_JSON[i].options[j].submenu_option_image_enabled_ref : submenu_options_JSON[i].options[j].submenu_option_image_ref;
            background_data_content_submenu_template_content.getElementById("data-background-submenu-icon").id = submenu_options_JSON[i].options[j].submenu_option_image_id;
            if(submenu_options_JSON[i].options[j].data_second_level_submenu_options.length <= 0) background_data_content_submenu_template_content.getElementById("background-submenu-arrow-bottom-image").style.visibility = "hidden";
            background_data_content_submenu_template_content.getElementById("background-submenu-arrow-bottom-image").id = submenu_options_JSON[i].options[j].submenu_bottom_arrow_button_id;
            background_data_content_submenu_template_content.getElementById("background-data-submenu-option-button").id = submenu_options_JSON[i].options[j].submenu_option_button_id;
            if(submenu_options_JSON[i].options[j].available) background_data_content_submenu_template_content.getElementById(submenu_options_JSON[i].options[j].submenu_option_button_id).addEventListener("click", submenu_options_JSON[i].options[j].submenu_option_button_click_function);

            (function (i, j) {

                background_data_content_submenu_template_content.getElementById(submenu_options_JSON[i].options[j].submenu_bottom_arrow_button_id).addEventListener("click", function () {

                    if(document.getElementById(submenu_options_JSON[i].options[j].submenu_option_id).style.maxHeight === "40vh"){
                        document.getElementById(submenu_options_JSON[i].options[j].submenu_option_id).style.maxHeight = "0";
                        document.getElementById(submenu_options_JSON[i].options[j].submenu_bottom_arrow_button_id).src = "img/side-bar-icon/arrow_bottom_icon.png";
                    }else{
                        document.getElementById(submenu_options_JSON[i].options[j].submenu_option_id).style.maxHeight = "40vh";
                        document.getElementById(submenu_options_JSON[i].options[j].submenu_bottom_arrow_button_id).src = "img/side-bar-icon/arrow_up_icon.png";
                    }

                });

            }(i, j));

            background_data_content_list_template_content.getElementById(menu_options_JSON[i].menu_option_id).appendChild(background_data_content_submenu_template_content);

            for(var k = 0; k < submenu_options_JSON[i].options[j].data_second_level_submenu_options.length; k++){

                var background_data_content_second_level_submenu_template_content = document.importNode(background_data_content_second_level_submenu_template.content,true);
                background_data_content_second_level_submenu_template_content.getElementById("original-data-second-level-submenu-option").id = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_id;
                background_data_content_second_level_submenu_template_content.getElementById("data-original-second-level-submenu-title").innerHTML = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_title;
                background_data_content_second_level_submenu_template_content.getElementById("data-original-second-level-submenu-title").style.color = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].available ? "white" : second_level_submenu_option_text_color;
                background_data_content_second_level_submenu_template_content.getElementById("data-original-second-level-submenu-title").setAttribute("data-i18n", submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_title_id);
                background_data_content_second_level_submenu_template_content.getElementById("data-original-second-level-submenu-title").id = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_title_id;
                background_data_content_second_level_submenu_template_content.getElementById("data-original-second-level-submenu-icon").src = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_image_ref;
                background_data_content_second_level_submenu_template_content.getElementById("data-original-second-level-submenu-icon").id = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_image_id;
                background_data_content_second_level_submenu_template_content.getElementById("original-data-second-level-submenu-option-button").id = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_button_id;
                if(submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].available) background_data_content_second_level_submenu_template_content.getElementById(submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_button_id).addEventListener("click", submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_button_click_function);

                background_data_content_list_template_content.getElementById(submenu_options_JSON[i].options[j].submenu_option_id).appendChild(background_data_content_second_level_submenu_template_content);

            }

        }

    }

    document.getElementById("data-background-container").appendChild(background_data_content_list_template_content);

}

function setSubmenuOptionClickedAction(submenuImageId, submenuTitleId, markerIconPath, submenuVisibleFlag, submenuStringKey, submenuAddedFlag, submenuDataLayer, submenuJSONPath, layerType, featureStyle) {

    toggleBackgroundIconAndTextEnabled(submenuImageId, submenuTitleId, window[submenuVisibleFlag], submenuStringKey);

    if(!window[submenuAddedFlag]){

        showLoader();
        window[submenuAddedFlag] = true;
        window[submenuVisibleFlag] = true;
        window[submenuDataLayer] = new L.GeoJSON();
        addSinglePolygonToMap(submenuJSONPath, markerIconPath, layerType, window[submenuDataLayer], featureStyle, hideLoader);

    }else{

        if(window[submenuVisibleFlag]) window[submenuDataLayer].remove();
        if(!window[submenuVisibleFlag]) window[submenuDataLayer].addTo(map);
        window[submenuVisibleFlag] = !window[submenuVisibleFlag];

    }

}






function addDistrictsDatalLayer() {

    setSubmenuOptionClickedAction("district_submenu_image_id", "district_submenu_option_title_id", "", "districts_layers_visible", "district", "districts_layers_added", "districts_data_layer", "data/Background_data/Geopolitical/Districts/districts.geojson","polygon", administrativeDivisionsDistrictStyle);

}

function addProvincesDatalLayer() {

    setSubmenuOptionClickedAction("provincial_submenu_image_id", "provincial_submenu_option_title_id", "", "provinces_layers_visible", "province", "provinces_layers_added", "provinces_data_layer", "data/Background_data/Geopolitical/Provinces/provinces.geojson", "polygon", administrativeDivisionsProvinceStyle);

}

function addDepartmentsDataLayer() {

    setSubmenuOptionClickedAction("regional_submenu_image_id", "regional_submenu_option_title_id", "", "departments_layers_visible", "departamental", "departments_layers_added", "departments_data_layer", "data/Background_data/Geopolitical/Departments/departments.geojson", "polygon", administrativeDivisionsDepartmentStyle);

}

function addPopulationDepartmentCapitalLayer() {

    setSubmenuOptionClickedAction("region_capitals_submenu_image_id", "region_capitals_submenu_option_title_id", "https://citavisualizador.s3-us-west-1.amazonaws.com/marker_icons/background_data/background_data_red_marker.png", "population_department_capital_visible", "department_capital", "population_department_capital_added", "population_department_capital_data_layer", "data/Background_data/Population/departamental.geojson", "marker", populationDepartmentStyle);

}

function addPopulationProvinceCapitalLayer() {

    setSubmenuOptionClickedAction("province_capitals_submenu_image_id", "province_capitals_submenu_option_title_id", "https://citavisualizador.s3-us-west-1.amazonaws.com/marker_icons/background_data/background_data_blue_marker.png", "population_province_capital_visible", "province_capital", "population_province_capital_added", "population_department_province_data_layer", "data/Background_data/Population/provincial.geojson", "marker", populationProvinceStyle);

}

function addPopulationDistrictCapitalLayer() {

    setSubmenuOptionClickedAction("district_capitals_submenu_image_id", "district_capitals_submenu_option_title_id", "https://citavisualizador.s3-us-west-1.amazonaws.com/marker_icons/background_data/background_data_gray_marker.png", "population_district_capital_visible", "district_capital", "population_district_capital_added", "population_department_district_data_layer", "data/Background_data/Population/distrital.geojson", "marker", populationDistrictStyle);

}

function addPopulationTownLayer() {

    // setSubmenuOptionClickedAction("towns_villages_submenu_image_id", "towns_villages_submenu_option_title_id", "", "population_town_visible", "towns_capital", "population_town_added", "population_town_data_layer", "data/Background_data/Population/distrital.geojson", "marker", population_town_stroke_color, population_town_stroke_opacity, population_town_stroke_weigth, population_town_fill_color, population_town_fill_opacity);

}

function addPopulatedAreasNativeCommunitiesLayer() {

    toggleBackgroundIconAndTextEnabled("native_communities_submenu_image_id", "native_communities_submenu_option_title_id", populated_areas_native_communities_layers_visible, "native_communities");

    if(!populated_areas_native_communities_layers_added){

        showLoader();
        populated_areas_native_communities_layers_added = true;
        populated_areas_native_communities_layers_visible = true;
        populated_areas_native_communities_data_layer = new L.GeoJSON();
        addSinglePolygonToMap("data/Background_data/Hydrography/hydrography_basins.geojson", "", "polygon", populated_areas_native_communities_data_layer, '#000000', 1.0, '#ccffe6', 0.35, 2, hideLoader);

    }else{

        if(populated_areas_native_communities_layers_visible) populated_areas_native_communities_data_layer.remove();
        if(!populated_areas_native_communities_layers_visible) populated_areas_native_communities_data_layer.addTo(map);
        populated_areas_native_communities_layers_visible = !populated_areas_native_communities_layers_visible;

    }
    
}

function addPopulatedAreasRuralCommunitiesLayer() {

    setSubmenuOptionClickedAction("farmers_communities_submenu_image_id", "farmers_communities_submenu_option_title_id", "", "populated_areas_rural_communities_layers_visible", "rural_communities", "populated_areas_rural_communities_layers_added", "populated_areas_rural_communities_data_layer", "data/Background_data/Populated_Areas/rural_communities.geojson", "polygon", populatedAreasRuralStyle);

}

function addPNARegionalLayer() {

    setSubmenuOptionClickedAction("anp_regional_submenu_image_id", "anp_regional_submenu_option_title_id", "", "pna_regional_layers_visible", "anp_regional", "pna_regional_layers_added", "pna_regional_data_layer", "data/Background_data/Protected_Natural_Areas/pna_regional.geojson", "polygon", protectedAreasRegionalStyle);

}

function addPNAPrivateLayer() {

    setSubmenuOptionClickedAction("anp_private_submenu_image_id", "anp_private_submenu_option_title_id", "", "pna_buffer_zone_layers_visible", "anp_private", "pna_private_layers_added", "pna_private_data_layer", "data/Background_data/Protected_Natural_Areas/pna_private.geojson", "polygon", protectedAreasPrivateStyle);
    
}

function addPNABufferZoneLayer() {

    setSubmenuOptionClickedAction("buffer_zone_submenu_image_id", "buffer_zone_submenu_option_title_id", "", "pna_private_layers_visible", "anp_buffer_zone", "pna_buffer_zone_layers_added", "pna_buffer_zone_data_layer", "data/Background_data/Protected_Natural_Areas/pna_buffer_zone.geojson", "polygon", protectedAreasBufferZoneStyle);
        
}

function addHydrographyBasinsLayer() {

    setSubmenuOptionClickedAction("hydrography_basin_submenu_image_id", "hydrography_basin_submenu_option_title_id", "","hydrography_basins_visible", "hydrography_basin", "hydrography_basins_added", "hidrography_basins_data_layer", "data/Background_data/Hydrography/hydrography_basins.geojson", "polygon", hydrographyBasinStyle);

}

function addHydrographyRiversLayer() {

    setSubmenuOptionClickedAction("hydrography_rivers_submenu_image_id", "hydrography_rivers_submenu_option_title_id", "", "hydrography_rivers_visible", "geography_river", "hydrography_rivers_added", "hidrography_rivers_data_layer", "data/Background_data/Hydrography/hydrography_rivers.geojson", "polygon", hydrographyRiversStyle);

}

function addHydrographyLakesLayer() {

    setSubmenuOptionClickedAction("lagoons_lakes_submenu_image_id", "lagoons_lakes_submenu_option_title_id", "", "hydrography_lakes_visible", "lake_lagoon", "hydrography_lakes_added", "hidrography_lakes_data_layer", "data/Background_data/Hydrography/hydrography_lakes.geojson", "polygon", hydrographyLakesStyle);

}

function addHydrographyGlaciersLayer() {

    setSubmenuOptionClickedAction("glaciers_submenu_image_id", "glaciers_submenu_option_title_id", "", "hydrography_glaciers_visible", "glaciers", "hydrography_glaciers_added", "hidrography_glaciers_data_layer", "data/Background_data/Hydrography/hydrography_glaciers.geojson", "polygon", hydrographyGlaciersStyle);

}

function addTransportPortLayer() {

    setSubmenuOptionClickedAction("ports_submenu_image_id", "ports_submenu_option_title_id", "https://citavisualizador.s3-us-west-1.amazonaws.com/marker_icons/background_data/background_data_blue_marker.png", "transport_ports_visible", "ports", 'transport_ports_added', "transport_ports_data_layer", "data/Background_data/Transport/ports.geojson", "marker", transportationPortsStyle);

}

function addTransportAirportLayer() {

    setSubmenuOptionClickedAction("airports_submenu_image_id", "airports_submenu_option_title_id", "https://citavisualizador.s3-us-west-1.amazonaws.com/marker_icons/background_data/background_data_blue_marker.png    ", "transport_airports_visible", "airports", "transport_airports_added", "transport_airports_data_layer", "data/Background_data/Transport/airports.geojson", "marker", transportationAirportsStyle);

}

function addExtractiveMiningProjectsLayer() {

    setSubmenuOptionClickedAction("mining_projects_submenu_image_id", "mining_projects_submenu_option_title_id", "", "extractive_mining_projects_visible", "mining_projects", "extractive_mining_projects_added", "extractive_mining_projects_data_layer", "data/Background_data/Extractive/mining_projects.geojson", "polygon", extractiveMiningProjectsStyle);

}

function addExtractiveHydrocarbonsLayer() {

    setSubmenuOptionClickedAction("hydrocarbons_submenu_image_id", "hydrocarbons_submenu_option_title_id", "", "extractive_hydrocarbons_visible", "hydrocarbons_projects", "extractive_hydrocarbons_added", "extractive_hydrocarbons_data_layer", "data/Background_data/Extractive/hydrocarbons.geojson", "polygon", extractiveHydrocarbonsStyle);

}






function provinces_submenu_option_clicked(){

    addProvincesDatalLayer();

}

function district_submenu_option_clicked(){

    addDistrictsDatalLayer();

}

function departments_submenu_option_clicked(){

    addDepartmentsDataLayer();

}

function population_department_capital_submenu_option_clicked() {

    addPopulationDepartmentCapitalLayer();
}

function population_province_capital_submenu_option_clicked() {

    addPopulationProvinceCapitalLayer();
}

function population_district_capital_submenu_option_clicked() {

    addPopulationDistrictCapitalLayer();

}

function population_town_submenu_option_clicked() {

    addPopulationTownLayer();

}

function populated_areas_native_communities_submenu_option_clicked() {
    
}

function populated_areas_rural_communities_submenu_option_clicked() {

    addPopulatedAreasRuralCommunitiesLayer();

}

function pna_regional_submenu_option_clicked() {

    addPNARegionalLayer();

}

function pna_private_submenu_option_clicked() {

    addPNAPrivateLayer();

}

function pna_buffer_zone_submenu_option_clicked() {

    addPNABufferZoneLayer();

}

function hydrography_basins_submenu_option_clicked() {

    addHydrographyBasinsLayer();

}

function hydrography_rivers_submenu_option_clicked(){

    addHydrographyRiversLayer();

}

function hydrography_lakes_submenu_option_clicked() {

    addHydrographyLakesLayer();
}

function hydrography_glaciers_submenu_option_clicked() {

    addHydrographyGlaciersLayer();
}

function transport_ports_submenu_option_clicked() {

    addTransportPortLayer();

}

function transport_airports_submenu_option_clicked() {

    addTransportAirportLayer();

}

function extractive_mining_projects_submenu_option_clicked() {

    addExtractiveMiningProjectsLayer();

}

function extractive_hydrocarbons_submenu_option_clicked() {

    addExtractiveHydrocarbonsLayer();

}




/**
 * Displays the communities data layer divided by colors (WORK IN PROGRESS)
 */
function communitiesOptionClicked() {

    if(communities_enabled){
        communities_data_layer.setMap(null);
        document.getElementById("communities_menu_button_icon_id").src = "img/side-bar-icon/communities-icon.png";
        document.getElementById("communities_menu_option_title_id").style.color = "#FFFFFF";
    }else{
        communities_data_layer.setMap(map);
        document.getElementById("communities_menu_button_icon_id").src = "img/side-bar-icon/communities-enabled_icon.png";
        document.getElementById("communities_menu_option_title_id").style.color = "#00BFDF";
    }

    communities_enabled = !communities_enabled;

}

/**
 * Displays the Digital Elevation Map of Peru as images according to the zoom level (the images are stored in the corresponding folder in the project)
 */
function demMenuOptionClicked() {

    if(dem_enabled){
        map.overlayMapTypes.removeAt(0);
        hideElements(["background-legend-container"]);
        document.getElementById("dem_geography_submenu_image_id").src = "img/side-bar-icon/elevation_icon.png";
        document.getElementById("dem_geography_submenu_option_title_id").style.color = "#FFFFFF";
    }else{
        document.getElementById("dem_geography_submenu_image_id").src = "img/side-bar-icon/elevation_enabled_icon.png";
        document.getElementById("dem_geography_submenu_option_title_id").style.color = "#00BFDF";
        // removeElementChildNodesWithClass("legendDIVStyle");
        // removeElementChildNodesWithClass("extraLegendDIVStyle");
        removeElementChildNodesWithClass("backgroundLegendDIVStyle");
        // addMorphometricsLegend(["#050505", "#424242", "#808080", "#bdbdbd", "#fafafa"], ["6246 m.a.s.l", "2928 m.a.s.l", "478 m.a.s.l", "183 m.a.s.l", "0 m.a.s.l"]);
        // addExtraLegend(["#050505", "#424242", "#808080", "#bdbdbd", "#fafafa"], ["6246 m.a.s.l", "2928 m.a.s.l", "478 m.a.s.l", "183 m.a.s.l", "0 m.a.s.l"]);
        addBackgroundDataLegend(["#050505", "#424242", "#808080", "#bdbdbd", "#fafafa"], ["6246 m.a.s.l", "2928 m.a.s.l", "478 m.a.s.l", "183 m.a.s.l", "0 m.a.s.l"]);

        var mapBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-18.358391, -81.298417), new google.maps.LatLng(0.007659, -68.673950));
        var mapMinZoom = 0;
        var mapMaxZoom = 12;
        dem_overlay_map = new google.maps.ImageMapType({
            getTileUrl: function(coord, zoom) {
                var proj = map.getProjection();
                var z2 = Math.pow(2, zoom);
                var tileXSize = 256 / z2;
                var tileYSize = 256 / z2;
                var tileBounds = new google.maps.LatLngBounds(
                    proj.fromPointToLatLng(new google.maps.Point(coord.x * tileXSize, (coord.y + 1) * tileYSize)),
                    proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * tileXSize, coord.y * tileYSize))
                );
                var x = coord.x >= 0 ? coord.x : z2 + coord.x;
                var y = coord.y;
                if (mapBounds.intersects(tileBounds) && (mapMinZoom <= zoom) && (zoom <= mapMaxZoom))
                    return "img/DEM/" + zoom + "/" + x + "/" + y + ".png";
            },
            tileSize: new google.maps.Size(256, 256),
            isPng: true,
            opacity: 1.0
        });

        map.overlayMapTypes.insertAt(0, dem_overlay_map);

    }

    dem_enabled = !dem_enabled;

}

/**
 * Displays the Malos Pasos data layer as lines and points (WORK IN PROGRESS)
 */
function firesMenuOptionClicked(){

    removeDisabledRiverPolygons();

    if(fires_enabled){
        document.getElementById("malos_pasos_menu_button_icon_id").src = "img/side-bar-icon/malos_pasos_icon.png";
        document.getElementById("malos_pasos_menu_option_title_id").style.color = "#FFFFFF";
        malos_pasos_points_data_layer.setMap(null);
        malos_pasos_lines_data_layer.setMap(null);
    }else{
        document.getElementById("malos_pasos_menu_button_icon_id").src = "img/side-bar-icon/malos_pasos_enabled_icon.png";
        document.getElementById("malos_pasos_menu_option_title_id").style.color = "#00BFDF";
        malos_pasos_points_data_layer.setMap(map);
        malos_pasos_lines_data_layer.setMap(map);
    }

    fires_enabled = !fires_enabled;

    // rivers_valley_data_layer.setMap(map);

}

function dummyTest(){

}

//</editor-fold>