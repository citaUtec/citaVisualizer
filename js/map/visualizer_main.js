//<editor-fold desc="VARIABLES">

let huallaga_migration_geojson_path;
let ucayali_migration_geojson_path;

let style_test = [
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "weight": 0.5
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "weight": 1.5
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "stylers": [
            {
                "color": "#f1ffec"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#cef6d1"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c7e4f4"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "color": "#fedfad"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#cfd1c9"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#cfd1c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c1e5fb"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#96cfeb"
            }
        ]
    }
];

//</editor-fold>

//<editor-fold desc="FUNCTIONS">

/**
 * Function executed when the browser finishes rendering all the html components
 */
$(document).ready(function () {

    hideElements(["senamhiCardsContainer", "crossSectionsCardsContainer", "UHGCardsContainer", "UHSCardsContainer", "metricsContainer", "imageZoomOverlay", "droneVideoButton", "droneVideoOverlay"]);
    hideElements(["morphometrics-legend-container", "progress-bar-container", "UHD-top-card-container", "UHD-bottom-card-container", "help-tooltip", "UHD-top-card-cross-icon", "UHD-bottom-card-cross-icon"]);
    hideElements(["drone-flights-marker-click-container", "water-level-card-container", "dunes-card-container", "bedload-card-container", "sediments-card-container"]);
    hideElements(["map-bottom-left-container"]);
    hideElements(["general-loader-container"]);

    // map = L.map('mapid', {zoomControl: false, maxBounds: L.latLngBounds(L.latLng(0.037389, -82.290353), L.latLng(-18.313536, -66.780152)), maxBoundsViscosity: 1.0}).setView([-9.466665, -75.549894], 6);
    map = L.map('mapid', {zoomControl: false}).setView([-9.466665, -75.549894], 6);

    L.control.zoom({position:'bottomright'}).addTo(map);

    //Voyager Label
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    huallaga_migration_data_layers = [huallaga_migration_1987_1989_data_layer, huallaga_migration_1989_1993_data_layer, huallaga_migration_1993_1997_data_layer, huallaga_migration_1997_2001_data_layer, huallaga_migration_2001_2005_data_layer, huallaga_migration_2005_2009_data_layer, huallaga_migration_2009_2013_data_layer, huallaga_migration_2013_2017_data_layer];
    huallaga_migration_geojson_path = ["data/rivers_migration/Huallaga/Geojson/hua_migra_1987_1989.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_1989_1993.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_1993_1997.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_1997_2001.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_2001_2005.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_2005_2009.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_2009_2013.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_2013_2017.geojson"];

    ucayali_migration_data_layers = [ucayali_migration_1987_1989_data_layer, ucayali_migration_1989_1993_data_layer, ucayali_migration_1993_1997_data_layer, ucayali_migration_1997_2001_data_layer, ucayali_migration_2001_2005_data_layer, ucayali_migration_2005_2009_data_layer, ucayali_migration_2009_2013_data_layer, ucayali_migration_2013_2017_data_layer];
    ucayali_migration_geojson_path = ["data/rivers_migration/Ucayali/Geojson/uca_migra_1987_1989.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_1989_1993.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_1993_1997.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_1997_2001.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_2001_2005.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_2005_2009.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_2009_2013.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_2013_2017.geojson"];

    rivers_morphometrics_JSON = [

        {
            "river": "Amazonas",
            "river_width_layer": [amazonas_avg_width_data_layer_1987, amazonas_avg_width_data_layer_1993, amazonas_avg_width_data_layer_1999, amazonas_avg_width_data_layer_2005, amazonas_avg_width_data_layer_2011, amazonas_avg_width_data_layer_2017],
            "river_sinuosity_layer": [amazonas_sinuosity_data_layer_1987, amazonas_sinuosity_data_layer_1993, amazonas_sinuosity_data_layer_1999, amazonas_sinuosity_data_layer_2005, amazonas_sinuosity_data_layer_2011, amazonas_sinuosity_data_layer_2017],
            "river_wavelength_layer": [amazonas_wavelength_data_layer_1987, amazonas_wavelength_data_layer_1993, amazonas_wavelength_data_layer_1999, amazonas_wavelength_data_layer_2005, amazonas_wavelength_data_layer_2011, amazonas_wavelength_data_layer_2017],
            "river_islands_layer": [amazonas_islands_data_layer_1987, amazonas_islands_data_layer_1993, amazonas_islands_data_layer_1999, amazonas_islands_data_layer_2005, amazonas_islands_data_layer_2011, amazonas_islands_data_layer_2017],
            "river_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Amazon/amazon1987.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Amazon/amazon1993.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Amazon/amazon1999.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Amazon/amazon2005.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Amazon/amazon2011.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Amazon/amazon2017.json"
            ],
            "river_island_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_islands/Amazon/islands_1987.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_islands/Amazon/islands_1993.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_islands/Amazon/islands_1999.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_islands/Amazon/islands_2005.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_islands/Amazon/islands_2011.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_islands/Amazon/islands_2017.geojson"
            ]
        },
        {
            "river": "Huallaga",
            "river_width_layer": [huallaga_avg_width_data_layer_1989, huallaga_avg_width_data_layer_1993, huallaga_avg_width_data_layer_1997, huallaga_avg_width_data_layer_2001,huallaga_avg_width_data_layer_2005, huallaga_avg_width_data_layer_2009, huallaga_avg_width_data_layer_2013, huallaga_avg_width_data_layer_2017],
            "river_sinuosity_layer": [huallaga_sinuosity_data_layer_1989, huallaga_sinuosity_data_layer_1993, huallaga_sinuosity_data_layer_1997, huallaga_sinuosity_data_layer_2001, huallaga_sinuosity_data_layer_2005, huallaga_sinuosity_data_layer_2009, huallaga_sinuosity_data_layer_2013, huallaga_sinuosity_data_layer_2017],
            "river_wavelength_layer": [huallaga_wavelength_data_layer_1989, huallaga_wavelength_data_layer_1993, huallaga_wavelength_data_layer_1997, huallaga_wavelength_data_layer_2001, huallaga_wavelength_data_layer_2005, huallaga_wavelength_data_layer_2009, huallaga_wavelength_data_layer_2013, huallaga_wavelength_data_layer_2017],
            "river_islands_layer": [huallaga_islands_data_layer_1987, huallaga_islands_data_layer_1993, huallaga_islands_data_layer_1999, huallaga_islands_data_layer_2005, huallaga_islands_data_layer_2011, huallaga_islands_data_layer_2017],
            "river_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Huallaga/huallaga1989.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Huallaga/huallaga1993.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Huallaga/huallaga1997.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Huallaga/huallaga2001.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Huallaga/huallaga2005.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Huallaga/huallaga2009.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Huallaga/huallaga2013.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Huallaga/huallaga2017.json"
            ],
            "river_island_path": []
        },
        {
            "river": "Marañon",
            "river_width_layer": [marañon_avg_width_data_layer_1987, marañon_avg_width_data_layer_1993, marañon_avg_width_data_layer_1999, marañon_avg_width_data_layer_2005, marañon_avg_width_data_layer_2011, marañon_avg_width_data_layer_2017],
            "river_sinuosity_layer": [marañon_sinuosity_data_layer_1987, marañon_sinuosity_data_layer_1993, marañon_sinuosity_data_layer_1999, marañon_sinuosity_data_layer_2005, marañon_sinuosity_data_layer_2011, marañon_sinuosity_data_layer_2017],
            "river_wavelength_layer": [marañon_wavelength_data_layer_1987, marañon_wavelength_data_layer_1993, marañon_wavelength_data_layer_1999, marañon_wavelength_data_layer_2005, marañon_wavelength_data_layer_2011, marañon_wavelength_data_layer_2017],
            "river_islands_layer": [marañon_islands_data_layer_1987, marañon_islands_data_layer_1993, marañon_islands_data_layer_1999, marañon_islands_data_layer_2005, marañon_islands_data_layer_2011, marañon_islands_data_layer_2017],
            "river_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Mara%C3%B1on/maranon1987.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Mara%C3%B1on/maranon1993.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Mara%C3%B1on/maranon1999.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Mara%C3%B1on/maranon2005.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Mara%C3%B1on/maranon2011.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Mara%C3%B1on/maranon2017.json"
            ],
            "river_island_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_islands/Mara%C3%B1on/islands_1987.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_islands/Mara%C3%B1on/islands_1993.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_islands/Mara%C3%B1on/islands_1999.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_islands/Mara%C3%B1on/islands_2005.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_islands/Mara%C3%B1on/islands_2011.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_islands/Mara%C3%B1on/islands_2017.geojson"
            ]
        },
        {
            "river": "Ucayali",
            "river_width_layer": [ucayali_avg_width_data_layer_1989, ucayali_avg_width_data_layer_1993, ucayali_avg_width_data_layer_1997, ucayali_avg_width_data_layer_2001, ucayali_avg_width_data_layer_2005, ucayali_avg_width_data_layer_2009, ucayali_avg_width_data_layer_2013, ucayali_avg_width_data_layer_2017],
            "river_sinuosity_layer": [ucayali_sinuosity_data_layer_1989, ucayali_sinuosity_data_layer_1993, ucayali_sinuosity_data_layer_1997, ucayali_sinuosity_data_layer_2001, ucayali_sinuosity_data_layer_2005, ucayali_sinuosity_data_layer_2009, ucayali_sinuosity_data_layer_2013, ucayali_sinuosity_data_layer_2017],
            "river_wavelength_layer": [ucayali_wavelength_data_layer_1989, ucayali_wavelength_data_layer_1993, ucayali_wavelength_data_layer_1997, ucayali_wavelength_data_layer_2001, ucayali_wavelength_data_layer_2005, ucayali_wavelength_data_layer_2009, ucayali_wavelength_data_layer_2013, ucayali_wavelength_data_layer_2017],
            "river_islands_layer": [ucayali_islands_data_layer_1987, ucayali_islands_data_layer_1993, ucayali_islands_data_layer_1999, ucayali_islands_data_layer_2005, ucayali_islands_data_layer_2011, ucayali_islands_data_layer_2017],
            "river_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Ucayali/ucayali1989.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Ucayali/ucayali1993.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Ucayali/ucayali1997.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Ucayali/ucayali2001.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Ucayali/ucayali2005.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Ucayali/ucayali2009.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Ucayali/ucayali2013.json",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_morphometrics/Ucayali/ucayali2017.json"
            ],
            "river_island_path": []

        }

    ];

    upper_rivers_morphometrics_JSON = [

        {
            "river": "Amazonas",
            "river_width_layer": [amazonas_upper_avg_width_data_layer_1987, amazonas_upper_avg_width_data_layer_1993, amazonas_upper_avg_width_data_layer_1999, amazonas_upper_avg_width_data_layer_2005, amazonas_upper_avg_width_data_layer_2011, amazonas_upper_avg_width_data_layer_2017],
            "river_sinuosity_layer": [amazonas_upper_sinuosity_data_layer_1987, amazonas_upper_sinuosity_data_layer_1993, amazonas_upper_sinuosity_data_layer_1999, amazonas_upper_sinuosity_data_layer_2005, amazonas_upper_sinuosity_data_layer_2011, amazonas_upper_sinuosity_data_layer_2017],
            "river_wavelength_layer": [amazonas_upper_wavelength_data_layer_1987, amazonas_upper_wavelength_data_layer_1993, amazonas_upper_wavelength_data_layer_1999, amazonas_upper_wavelength_data_layer_2005, amazonas_upper_wavelength_data_layer_2011, amazonas_upper_wavelength_data_layer_2017],
            "river_confinement_layer": [amazonas_upper_confinement_data_layer_1987, amazonas_upper_confinement_data_layer_1993, amazonas_upper_confinement_data_layer_1999, amazonas_upper_confinement_data_layer_2005, amazonas_upper_confinement_data_layer_2011, amazonas_upper_confinement_data_layer_2017],
            "river_path": []
        },
        {
            "river": "Huallaga",
            "river_width_layer": [huallaga_upper_avg_width_data_layer_1989, huallaga_upper_avg_width_data_layer_1993, huallaga_upper_avg_width_data_layer_1997, huallaga_upper_avg_width_data_layer_2001,huallaga_upper_avg_width_data_layer_2005, huallaga_upper_avg_width_data_layer_2009, huallaga_upper_avg_width_data_layer_2013, huallaga_upper_avg_width_data_layer_2017],
            "river_sinuosity_layer": [huallaga_upper_sinuosity_data_layer_1989, huallaga_upper_sinuosity_data_layer_1993, huallaga_upper_sinuosity_data_layer_1997, huallaga_upper_sinuosity_data_layer_2001, huallaga_upper_sinuosity_data_layer_2005, huallaga_upper_sinuosity_data_layer_2009, huallaga_upper_sinuosity_data_layer_2013, huallaga_upper_sinuosity_data_layer_2017],
            "river_wavelength_layer": [huallaga_upper_wavelength_data_layer_1989, huallaga_upper_wavelength_data_layer_1993, huallaga_upper_wavelength_data_layer_1997, huallaga_upper_wavelength_data_layer_2001, huallaga_upper_wavelength_data_layer_2005, huallaga_upper_wavelength_data_layer_2009, huallaga_upper_wavelength_data_layer_2013, huallaga_upper_wavelength_data_layer_2017],
            "river_confinement_layer": [huallaga_upper_confinement_data_layer_1989, huallaga_upper_confinement_data_layer_1993, huallaga_upper_confinement_data_layer_1997, huallaga_upper_confinement_data_layer_2001, huallaga_upper_confinement_data_layer_2005, huallaga_upper_confinement_data_layer_2009, huallaga_upper_confinement_data_layer_2013, huallaga_upper_confinement_data_layer_2017],
            "river_path": ["data/upper-river/Huallaga/upper_huallaga_1987.geojson", "data/upper-river/Huallaga/upper_huallaga_1993.geojson", "data/upper-river/Huallaga/upper_huallaga_1999.geojson", "data/upper-river/Huallaga/upper_huallaga_2005.geojson", "data/upper-river/Huallaga/upper_huallaga_2011.geojson", "data/upper-river/Huallaga/upper_huallaga_2017.geojson"]
        },
        {
            "river": "Marañon",
            "river_width_layer": [marañon_upper_avg_width_data_layer_1987, marañon_upper_avg_width_data_layer_1993, marañon_upper_avg_width_data_layer_1999, marañon_upper_avg_width_data_layer_2005, marañon_upper_avg_width_data_layer_2011, marañon_upper_avg_width_data_layer_2017],
            "river_sinuosity_layer": [marañon_upper_sinuosity_data_layer_1987, marañon_upper_sinuosity_data_layer_1993, marañon_upper_sinuosity_data_layer_1999, marañon_upper_sinuosity_data_layer_2005, marañon_upper_sinuosity_data_layer_2011, marañon_upper_sinuosity_data_layer_2017],
            "river_wavelength_layer": [marañon_upper_wavelength_data_layer_1987, marañon_upper_wavelength_data_layer_1993, marañon_upper_wavelength_data_layer_1999, marañon_upper_wavelength_data_layer_2005, marañon_upper_wavelength_data_layer_2011, marañon_upper_wavelength_data_layer_2017],
            "river_confinement_layer": [marañon_upper_confinement_data_layer_1987, marañon_upper_confinement_data_layer_1993, marañon_upper_confinement_data_layer_1999, marañon_upper_confinement_data_layer_2005, marañon_upper_confinement_data_layer_2011, marañon_upper_confinement_data_layer_2017],
            "river_path": ["data/upper-river/Marañon/upper_maranon_1987.geojson", "data/upper-river/Marañon/upper_maranon_1993.geojson", "data/upper-river/Marañon/upper_maranon_1999.geojson", "data/upper-river/Marañon/upper_maranon_2005.geojson", "data/upper-river/Marañon/upper_maranon_2011.geojson", "data/upper-river/Marañon/upper_maranon_2017.geojson"]
        },
        {
            "river": "Ucayali",
            "river_width_layer": [ucayali_upper_avg_width_data_layer_1989, ucayali_upper_avg_width_data_layer_1993, ucayali_upper_avg_width_data_layer_1997, ucayali_upper_avg_width_data_layer_2001, ucayali_upper_avg_width_data_layer_2005, ucayali_upper_avg_width_data_layer_2009, ucayali_upper_avg_width_data_layer_2013, ucayali_upper_avg_width_data_layer_2017],
            "river_sinuosity_layer": [ucayali_upper_sinuosity_data_layer_1989, ucayali_upper_sinuosity_data_layer_1993, ucayali_upper_sinuosity_data_layer_1997, ucayali_upper_sinuosity_data_layer_2001, ucayali_upper_sinuosity_data_layer_2005, ucayali_upper_sinuosity_data_layer_2009, ucayali_upper_sinuosity_data_layer_2013, ucayali_upper_sinuosity_data_layer_2017],
            "river_wavelength_layer": [ucayali_upper_wavelength_data_layer_1989, ucayali_upper_wavelength_data_layer_1993, ucayali_upper_wavelength_data_layer_1997, ucayali_upper_wavelength_data_layer_2001, ucayali_upper_wavelength_data_layer_2005, ucayali_upper_wavelength_data_layer_2009, ucayali_upper_wavelength_data_layer_2013, ucayali_upper_wavelength_data_layer_2017],
            "river_confinement_layer": [ucayali_upper_confinement_data_layer_1989, ucayali_upper_confinement_data_layer_1993, ucayali_upper_confinement_data_layer_1997, ucayali_upper_confinement_data_layer_2001, ucayali_upper_confinement_data_layer_2005, ucayali_upper_confinement_data_layer_2009, ucayali_upper_confinement_data_layer_2013, ucayali_upper_confinement_data_layer_2017],
            "river_path": []
        }

    ];

    rivers_erosion_deposition_JSON = [

        {
            "river": "Amazonas",
            "river_data_NC_layer": [amazonas_erosion_deposition_NC_data_layer_1993, amazonas_erosion_deposition_NC_data_layer_1999, amazonas_erosion_deposition_NC_data_layer_2005, amazonas_erosion_deposition_NC_data_layer_2011, amazonas_erosion_deposition_NC_data_layer_2017],
            "river_data_E_layer": [amazonas_erosion_deposition_E_data_layer_1993, amazonas_erosion_deposition_E_data_layer_1999, amazonas_erosion_deposition_E_data_layer_2005, amazonas_erosion_deposition_E_data_layer_2011, amazonas_erosion_deposition_E_data_layer_2017],
            "river_data_D_layer": [amazonas_erosion_deposition_D_data_layer_1993, amazonas_erosion_deposition_D_data_layer_1999, amazonas_erosion_deposition_D_data_layer_2005, amazonas_erosion_deposition_D_data_layer_2011, amazonas_erosion_deposition_D_data_layer_2017],
            "no_change_JSON_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/1993/no_change.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/1999/no_change.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/2005/no_change.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/2011/no_change.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/2017/no_change.geojson"
            ],
            "erosion_JSON_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/1993/erosion.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/1999/erosion.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/2005/erosion.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/2011/erosion.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/2017/erosion.geojson"
            ],
            "deposition_JSON_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/1993/deposition.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/1999/deposition.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/2005/deposition.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/2011/deposition.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Amazonas/2017/deposition.geojson"
            ],

        },
        {
            "river": "Huallaga",
            "erosion_JSON_path": [],
            "no_change_JSON_path": [],
            "deposition_JSON_path": [],

        },
        {
            "river": "Marañon",
            "river_data_NC_layer": [marañon_erosion_deposition_NC_data_layer_1993, marañon_erosion_deposition_NC_data_layer_1999, marañon_erosion_deposition_NC_data_layer_2005, marañon_erosion_deposition_NC_data_layer_2011, marañon_erosion_deposition_NC_data_layer_2017],
            "river_data_E_layer": [marañon_erosion_deposition_E_data_layer_1993, marañon_erosion_deposition_E_data_layer_1999, marañon_erosion_deposition_E_data_layer_2005, marañon_erosion_deposition_E_data_layer_2011, marañon_erosion_deposition_E_data_layer_2017],
            "river_data_D_layer": [marañon_erosion_deposition_D_data_layer_1993, marañon_erosion_deposition_D_data_layer_1999, marañon_erosion_deposition_D_data_layer_2005, marañon_erosion_deposition_D_data_layer_2011, marañon_erosion_deposition_D_data_layer_2017],
            "no_change_JSON_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/1993/no_change.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/1999/no_change.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/2005/no_change.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/2011/no_change.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/2017/no_change.geojson",
            ],
            "erosion_JSON_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/1993/erosion.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/1999/erosion.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/2005/erosion.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/2011/erosion.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/2017/erosion.geojson"
            ],
            "deposition_JSON_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/1993/deposition.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/1999/deposition.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/2005/deposition.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/2011/deposition.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_erosion_deposition/Mara%C3%B1on/2017/deposition.geojson"
            ],

        },
        {
            "river": "Ucayali",
            "no_change_JSON_path": [],
            "erosion_JSON_path": [],
            "deposition_JSON_path": [],

        }

    ];

    rivers_migration_JSON = [

        {
            "river": "Amazonas",
            "data_layer": [],
            "geojson_path": []
        },
        {
            "river": "Huallaga",
            "data_layer": huallaga_migration_data_layers,
            "geojson_path": huallaga_migration_geojson_path

        },
        {
            "river": "Marañon",
            "data_layer": [],
            "geojson_path": []
        },
        {
            "river": "Ucayali",
            "data_layer": ucayali_migration_data_layers,
            "geojson_path": ucayali_migration_geojson_path
        }

    ];

    rivers_dunes_JSON = [

        {
            "river": "Amazonas",
            "campaign_1_layers": [],
            "campaign_1_layers_path": [],
            "campaign_2_layers": [],
            "campaign_2_layers_path": [],
            "campaign_3_layers": [],
            "campaign_3_layers_path": []
        },
        {
            "river": "Huallaga",
            "campaign_1_layers": [huallaga_dunes_campaign_1_sections_layer, huallaga_dunes_campaign_1_lines_layer],
            "campaign_1_layers_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_dunes/Huallaga/Campaign_1/sections.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_dunes/Huallaga/Campaign_1/lines.geojson"
            ],
            "campaign_2_layers": [huallaga_dunes_campaign_2_sections_layer, huallaga_dunes_campaign_1_lines_layer],
            "campaign_2_layers_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_dunes/Huallaga/Campaign_2/sections.geojson",
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_dunes/Huallaga/Campaign_1/lines.geojson"
            ],
            "campaign_3_layers": [],
            "campaign_3_layers_path": []
        },
        {
            "river": "Marañon",
            "campaign_1_layers": [],
            "campaign_1_layers_path": [],
            "campaign_2_layers": [marañon_dunes_campaign_2_sections_layer],
            "campaign_2_layers_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_dunes/Mara%C3%B1on/Campaign_2/sections.geojson"
            ],
            "campaign_3_layers": [marañon_dunes_campaign_3_sections_layer],
            "campaign_3_layers_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_dunes/Mara%C3%B1on/Campaign_3/sections.geojson"
            ]
        },
        {
            "river": "Ucayali",
            "campaign_1_layers": [],
            "campaign_1_layers_path": [],
            "campaign_2_layers": [ucayali_dunes_campaign_2_sections_layer],
            "campaign_2_layers_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_dunes/Ucayali/Campaign_2/sections.geojson"
            ],
            "campaign_3_layers": [],
            "campaign_3_layers_path": []
        }

    ];

    rivers_bedload_JSON = [

        {
            "river": "Amazonas",
            "campaign_1_layers": [],
            "campaign_1_layers_path": [],
            "campaign_2_layers": [],
            "campaign_2_layers_path": [],
            "campaign_3_layers": [],
            "campaign_3_layers_path": []
        },
        {
            "river": "Huallaga",
            "campaign_1_layers": [huallaga_bedload_campaign_1_sections_layer],
            "campaign_1_layers_path": [
                "https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/River_bedload/Huallaga/Campaign_1/sections.geojson"
            ],
            "campaign_2_layers": [],
            "campaign_2_layers_path": [],
            "campaign_3_layers": [],
            "campaign_3_layers_path": []
        },
        {
            "river": "Marañon",
            "campaign_1_layers": [],
            "campaign_1_layers_path": [],
            "campaign_2_layers": [],
            "campaign_2_layers_path": [],
            "campaign_3_layers": [],
            "campaign_3_layers_path": []
        },
        {
            "river": "Ucayali",
            "campaign_1_layers": [],
            "campaign_1_layers_path": [],
            "campaign_2_layers": [],
            "campaign_2_layers_path": [],
            "campaign_3_layers": [],
            "campaign_3_layers_path": []
        }

    ];


    set_original_data_menu(data_menu_options, data_submenu_options);
    set_background_data_menu(background_data_menu_options, background_data_submenu_options);
    // // reloadMenuOptionsAvailabilityForRiver(1, 5);
    // // reloadMenuOptionsAvailabilityForRiver(2, 5);
    // addCITALogo();
    // addDancingRiversLogo();
    addLeftPanelToggleListener();
    addRightPanelToggleListener();
    setDroneFlightCards();
    renderDroneVideoList();
    addDisabledRivers();

    hideElements(["lspiv-marker-click-container"]);

    document.getElementById("card-1-marker-row-1").addEventListener("click", function () {
        fadeInElements(["droneVideoOverlay"], 350);
    });

    document.getElementById("imageZoomOverlay").addEventListener("click", function () {
        fadeOutElements(["imageZoomOverlay"], 350);
    });

    document.getElementById("spanish-button").addEventListener("click", spanishLanguageClickFunction);
    document.getElementById("english-button").addEventListener("click", engliishLanguageClickFunction);
    toggleButtonTooltipLanguage();

});

/**
 * Function related to the google maps initialization
 */
function initMap() {
//
//     map = new google.maps.Map(document.getElementById('map'),
//         {
//             zoom: initial_zoom,
//             center: initial_center,
//             styles: style_test,
//             disableDefaultUI: true,
//             scaleControl: true,
//             restriction: {
//                 latLngBounds: peruBounds,
//                 strictBounds: false,
//             },
//         });
//
//     map.setOptions({ minZoom: min_zoom, maxZoom: max_zoom });
//
//     map.addListener("drag", function () {
//
//         // fadeOutElements(["drone-flights-marker-click-container", "lspiv-marker-click-container"], 350);
//         previous_drone_marker_coordinates.lat = -180;
//         previous_drone_marker_coordinates.lng = -180;
//
//     });
//
//     google.maps.event.addListener(map, "click", function (event) {
//
//         if(previous_water_level_marker_coordinates.lat !== -180 && previous_water_level_marker_coordinates.lng !== -180){
//
//             if(event.latLng.lat() !== previous_water_level_marker_coordinates.lat && event.latLng.lng() !== previous_water_level_marker_coordinates.lng){
//                 fadeOutElements(["water-level-card-container"], 350);
//                 previous_water_level_marker_coordinates.lat = -180;
//                 previous_water_level_marker_coordinates.lng = -180;
//             }
//
//         }
//
//         fadeOutElements(["dunes-card-container", "bedload-card-container", "sediments-card-container", "drone-flights-marker-click-container"], 350);
//
//     });
//
//     //South America Limits Bounds
//     [south_america_limits_data_layer] = initializeDataLayersLiteral([south_america_limits_data_layer]);
//
//     //South America Limits
//     addInteractiveSinglePolygonToMap("data/country_limits/south_america.geojson", south_america_limits_data_layer, "limits", null, null, null, null);
//
//     hideElements(["senamhiCardsContainer", "crossSectionsCardsContainer", "UHGCardsContainer", "UHSCardsContainer", "metricsContainer", "imageZoomOverlay", "droneVideoButton", "droneVideoOverlay", "main-wrapper"]);
//     hideElements(["morphometrics-legend-container", "progress-bar-container", "UHD-top-card-container", "UHD-bottom-card-container", "help-tooltip", "UHD-top-card-cross-icon", "UHD-bottom-card-cross-icon"]);
//     hideElements(["drone-flights-marker-click-container", "water-level-card-container", "dunes-card-container", "bedload-card-container", "sediments-card-container"]);
//     hideElements(["map-bottom-left-container"]);
//     hideElements(["general-loader-container"]);
//
//     document.getElementById("general-loader-container").style.visibility = "hidden";
//
//     //Rivers Data Layers
//     [amazonas_disabled_river_data_layer, amazonas_river_outline_data_layer, huallaga_disabled_river_data_layer, huallaga_river_outline_data_layer, marañon_disabled_river_data_layer, marañon_river_outline_data_layer, ucayali_disabled_river_data_layer, ucayali_river_outline_data_layer] = initializeDataLayersLiteral([amazonas_disabled_river_data_layer, amazonas_river_outline_data_layer, huallaga_disabled_river_data_layer, huallaga_river_outline_data_layer, marañon_disabled_river_data_layer, marañon_river_outline_data_layer, ucayali_disabled_river_data_layer, ucayali_river_outline_data_layer]);
//     //Background Data Layers
//     // [communities_data_layer, malos_pasos_lines_data_layer, malos_pasos_points_data_layer] = initializeDataLayersLiteral([communities_data_layer, malos_pasos_lines_data_layer, malos_pasos_points_data_layer]);
//     //Field Measurements Data Layers
//     // [water_level_data_layer, dunes_sections_huallaga_campaign_1_data_layer, dunes_lines_huallaga_campaign_1_data_layer, bedload_sections_huallaga_campaign_1_data_layer, sediments_stations_huallaga_campaign_1_data_layer] = initializeDataLayersLiteral([water_level_data_layer, dunes_sections_huallaga_campaign_1_data_layer, dunes_lines_huallaga_campaign_1_data_layer, bedload_sections_huallaga_campaign_1_data_layer, sediments_stations_huallaga_campaign_1_data_layer]);
//     //Extra Data Layers
//     // [lspiv_data_layer, rivers_valley_data_layer] = initializeDataLayersLiteral([lspiv_data_layer, ucayali_migration_1987_1989_data_layer, rivers_valley_data_layer]);
//
//     huallaga_migration_data_layers = [huallaga_migration_1987_1989_data_layer, huallaga_migration_1989_1993_data_layer, huallaga_migration_1993_1997_data_layer, huallaga_migration_1997_2001_data_layer, huallaga_migration_2001_2005_data_layer, huallaga_migration_2005_2009_data_layer, huallaga_migration_2009_2013_data_layer, huallaga_migration_2013_2017_data_layer];
//     huallaga_migration_geojson_path = ["data/rivers_migration/Huallaga/Geojson/hua_migra_1987_1989.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_1989_1993.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_1993_1997.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_1997_2001.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_2001_2005.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_2005_2009.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_2009_2013.geojson", "data/rivers_migration/Huallaga/Geojson/hua_migra_2013_2017.geojson"];
//
//     ucayali_migration_data_layers = [ucayali_migration_1987_1989_data_layer, ucayali_migration_1989_1993_data_layer, ucayali_migration_1993_1997_data_layer, ucayali_migration_1997_2001_data_layer, ucayali_migration_2001_2005_data_layer, ucayali_migration_2005_2009_data_layer, ucayali_migration_2009_2013_data_layer, ucayali_migration_2013_2017_data_layer];
//     ucayali_migration_geojson_path = ["data/rivers_migration/Ucayali/Geojson/uca_migra_1987_1989.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_1989_1993.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_1993_1997.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_1997_2001.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_2001_2005.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_2005_2009.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_2009_2013.geojson", "data/rivers_migration/Ucayali/Geojson/uca_migra_2013_2017.geojson"];
//
//     rivers_morphometrics_JSON = [
//
//         {
//             "river": "Amazonas",
//             "river_width_layer": [amazonas_avg_width_data_layer_1987, amazonas_avg_width_data_layer_1993, amazonas_avg_width_data_layer_1999, amazonas_avg_width_data_layer_2005, amazonas_avg_width_data_layer_2011, amazonas_avg_width_data_layer_2017],
//             "river_sinuosity_layer": [amazonas_sinuosity_data_layer_1987, amazonas_sinuosity_data_layer_1993, amazonas_sinuosity_data_layer_1999, amazonas_sinuosity_data_layer_2005, amazonas_sinuosity_data_layer_2011, amazonas_sinuosity_data_layer_2017],
//             "river_wavelength_layer": [amazonas_wavelength_data_layer_1987, amazonas_wavelength_data_layer_1993, amazonas_wavelength_data_layer_1999, amazonas_wavelength_data_layer_2005, amazonas_wavelength_data_layer_2011, amazonas_wavelength_data_layer_2017],
//             "river_islands_layer": [amazonas_islands_data_layer_1987, amazonas_islands_data_layer_1993, amazonas_islands_data_layer_1999, amazonas_islands_data_layer_2005, amazonas_islands_data_layer_2011, amazonas_islands_data_layer_2017],
//             "river_path": ["data/rivers/Amazon/amazon1987.json", "data/rivers/Amazon/amazon1993.json", "data/rivers/Amazon/amazon1999.json", "data/rivers/Amazon/amazon2005.json", "data/rivers/Amazon/amazon2011.json", "data/rivers/Amazon/amazon2017.json"],
//             "river_island_path": ["data/rivers_islands/Amazonas/awislas_amaz_1987.geojson", "data/rivers_islands/Amazonas/awislas_amaz_1993.geojson", "data/rivers_islands/Amazonas/awislas_amaz_1999.geojson", "data/rivers_islands/Amazonas/awislas_amaz_2005.geojson", "data/rivers_islands/Amazonas/awislas_amaz_2011.geojson", "data/rivers_islands/Amazonas/awislas_amaz_2017.geojson"]
//         },
//         {
//             "river": "Huallaga",
//             "river_width_layer": [huallaga_avg_width_data_layer_1989, huallaga_avg_width_data_layer_1993, huallaga_avg_width_data_layer_1997, huallaga_avg_width_data_layer_2001,huallaga_avg_width_data_layer_2005, huallaga_avg_width_data_layer_2009, huallaga_avg_width_data_layer_2013, huallaga_avg_width_data_layer_2017],
//             "river_sinuosity_layer": [huallaga_sinuosity_data_layer_1989, huallaga_sinuosity_data_layer_1993, huallaga_sinuosity_data_layer_1997, huallaga_sinuosity_data_layer_2001, huallaga_sinuosity_data_layer_2005, huallaga_sinuosity_data_layer_2009, huallaga_sinuosity_data_layer_2013, huallaga_sinuosity_data_layer_2017],
//             "river_wavelength_layer": [huallaga_wavelength_data_layer_1989, huallaga_wavelength_data_layer_1993, huallaga_wavelength_data_layer_1997, huallaga_wavelength_data_layer_2001, huallaga_wavelength_data_layer_2005, huallaga_wavelength_data_layer_2009, huallaga_wavelength_data_layer_2013, huallaga_wavelength_data_layer_2017],
//             "river_islands_layer": [huallaga_islands_data_layer_1987, huallaga_islands_data_layer_1993, huallaga_islands_data_layer_1999, huallaga_islands_data_layer_2005, huallaga_islands_data_layer_2011, huallaga_islands_data_layer_2017],
//             "river_path": ["data/rivers/Huallaga/huallaga1989.json", "data/rivers/Huallaga/huallaga1993.json", "data/rivers/Huallaga/huallaga1997.json", "data/rivers/Huallaga/huallaga2001.json", "data/rivers/Huallaga/huallaga2005.json", "data/rivers/Huallaga/huallaga2009.json", "data/rivers/Huallaga/huallaga2013.json", "data/rivers/Huallaga/huallaga2017.json"],
//             "river_island_path": []
//         },
//         {
//             "river": "Marañon",
//             "river_width_layer": [marañon_avg_width_data_layer_1987, marañon_avg_width_data_layer_1993, marañon_avg_width_data_layer_1999, marañon_avg_width_data_layer_2005, marañon_avg_width_data_layer_2011, marañon_avg_width_data_layer_2017],
//             "river_sinuosity_layer": [marañon_sinuosity_data_layer_1987, marañon_sinuosity_data_layer_1993, marañon_sinuosity_data_layer_1999, marañon_sinuosity_data_layer_2005, marañon_sinuosity_data_layer_2011, marañon_sinuosity_data_layer_2017],
//             "river_wavelength_layer": [marañon_wavelength_data_layer_1987, marañon_wavelength_data_layer_1993, marañon_wavelength_data_layer_1999, marañon_wavelength_data_layer_2005, marañon_wavelength_data_layer_2011, marañon_wavelength_data_layer_2017],
//             "river_islands_layer": [marañon_islands_data_layer_1987, marañon_islands_data_layer_1993, marañon_islands_data_layer_1999, marañon_islands_data_layer_2005, marañon_islands_data_layer_2011, marañon_islands_data_layer_2017],
//             "river_path": ["data/rivers/Marañon/maranon1987.json", "data/rivers/Marañon/maranon1993.json", "data/rivers/Marañon/maranon1999.json", "data/rivers/Marañon/maranon2005.json", "data/rivers/Marañon/maranon2011.json", "data/rivers/Marañon/maranon2017.json"],
//             "river_island_path": ["data/rivers_islands/Marañon/awislas_mara_1987.geojson", "data/rivers_islands/Marañon/awislas_mara_1993.geojson", "data/rivers_islands/Marañon/awislas_mara_1999.geojson", "data/rivers_islands/Marañon/awislas_mara_2005.geojson", "data/rivers_islands/Marañon/awislas_mara_2011.geojson", "data/rivers_islands/Marañon/awislas_mara_2017.geojson"]
//         },
//         {
//             "river": "Ucayali",
//             "river_width_layer": [ucayali_avg_width_data_layer_1989, ucayali_avg_width_data_layer_1993, ucayali_avg_width_data_layer_1997, ucayali_avg_width_data_layer_2001, ucayali_avg_width_data_layer_2005, ucayali_avg_width_data_layer_2009, ucayali_avg_width_data_layer_2013, ucayali_avg_width_data_layer_2017],
//             "river_sinuosity_layer": [ucayali_sinuosity_data_layer_1989, ucayali_sinuosity_data_layer_1993, ucayali_sinuosity_data_layer_1997, ucayali_sinuosity_data_layer_2001, ucayali_sinuosity_data_layer_2005, ucayali_sinuosity_data_layer_2009, ucayali_sinuosity_data_layer_2013, ucayali_sinuosity_data_layer_2017],
//             "river_wavelength_layer": [ucayali_wavelength_data_layer_1989, ucayali_wavelength_data_layer_1993, ucayali_wavelength_data_layer_1997, ucayali_wavelength_data_layer_2001, ucayali_wavelength_data_layer_2005, ucayali_wavelength_data_layer_2009, ucayali_wavelength_data_layer_2013, ucayali_wavelength_data_layer_2017],
//             "river_islands_layer": [ucayali_islands_data_layer_1987, ucayali_islands_data_layer_1993, ucayali_islands_data_layer_1999, ucayali_islands_data_layer_2005, ucayali_islands_data_layer_2011, ucayali_islands_data_layer_2017],
//             "river_path": ["data/rivers/Ucayali/ucayali1989.json", "data/rivers/Ucayali/ucayali1993.json", "data/rivers/Ucayali/ucayali1997.json", "data/rivers/Ucayali/ucayali2001.json", "data/rivers/Ucayali/ucayali2005.json", "data/rivers/Ucayali/ucayali2009.json", "data/rivers/Ucayali/ucayali2013.json", "data/rivers/Ucayali/ucayali2017.json"],
//             "river_island_path": []
//
//         }
//
//     ];
//
//     upper_rivers_morphometrics_JSON = [
//
//         {
//             "river": "Amazonas",
//             "river_width_layer": [amazonas_upper_avg_width_data_layer_1987, amazonas_upper_avg_width_data_layer_1993, amazonas_upper_avg_width_data_layer_1999, amazonas_upper_avg_width_data_layer_2005, amazonas_upper_avg_width_data_layer_2011, amazonas_upper_avg_width_data_layer_2017],
//             "river_sinuosity_layer": [amazonas_upper_sinuosity_data_layer_1987, amazonas_upper_sinuosity_data_layer_1993, amazonas_upper_sinuosity_data_layer_1999, amazonas_upper_sinuosity_data_layer_2005, amazonas_upper_sinuosity_data_layer_2011, amazonas_upper_sinuosity_data_layer_2017],
//             "river_wavelength_layer": [amazonas_upper_wavelength_data_layer_1987, amazonas_upper_wavelength_data_layer_1993, amazonas_upper_wavelength_data_layer_1999, amazonas_upper_wavelength_data_layer_2005, amazonas_upper_wavelength_data_layer_2011, amazonas_upper_wavelength_data_layer_2017],
//             "river_path": []
//         },
//         {
//             "river": "Huallaga",
//             "river_width_layer": [huallaga_upper_avg_width_data_layer_1989, huallaga_upper_avg_width_data_layer_1993, huallaga_upper_avg_width_data_layer_1997, huallaga_upper_avg_width_data_layer_2001,huallaga_upper_avg_width_data_layer_2005, huallaga_upper_avg_width_data_layer_2009, huallaga_upper_avg_width_data_layer_2013, huallaga_upper_avg_width_data_layer_2017],
//             "river_sinuosity_layer": [huallaga_upper_sinuosity_data_layer_1989, huallaga_upper_sinuosity_data_layer_1993, huallaga_upper_sinuosity_data_layer_1997, huallaga_upper_sinuosity_data_layer_2001, huallaga_upper_sinuosity_data_layer_2005, huallaga_upper_sinuosity_data_layer_2009, huallaga_upper_sinuosity_data_layer_2013, huallaga_upper_sinuosity_data_layer_2017],
//             "river_wavelength_layer": [huallaga_upper_wavelength_data_layer_1989, huallaga_upper_wavelength_data_layer_1993, huallaga_upper_wavelength_data_layer_1997, huallaga_upper_wavelength_data_layer_2001, huallaga_upper_wavelength_data_layer_2005, huallaga_upper_wavelength_data_layer_2009, huallaga_upper_wavelength_data_layer_2013, huallaga_upper_wavelength_data_layer_2017],
//             "river_path": ["data/upper-river/Huallaga/upper_huallaga_1987.geojson", "data/upper-river/Huallaga/upper_huallaga_1993.geojson", "data/upper-river/Huallaga/upper_huallaga_1999.geojson", "data/upper-river/Huallaga/upper_huallaga_2005.geojson", "data/upper-river/Huallaga/upper_huallaga_2011.geojson", "data/upper-river/Huallaga/upper_huallaga_2017.geojson"]
//         },
//         {
//             "river": "Marañon",
//             "river_width_layer": [marañon_upper_avg_width_data_layer_1987, marañon_upper_avg_width_data_layer_1993, marañon_upper_avg_width_data_layer_1999, marañon_upper_avg_width_data_layer_2005, marañon_upper_avg_width_data_layer_2011, marañon_upper_avg_width_data_layer_2017],
//             "river_sinuosity_layer": [marañon_upper_sinuosity_data_layer_1987, marañon_upper_sinuosity_data_layer_1993, marañon_upper_sinuosity_data_layer_1999, marañon_upper_sinuosity_data_layer_2005, marañon_upper_sinuosity_data_layer_2011, marañon_upper_sinuosity_data_layer_2017],
//             "river_wavelength_layer": [marañon_upper_wavelength_data_layer_1987, marañon_upper_wavelength_data_layer_1993, marañon_upper_wavelength_data_layer_1999, marañon_upper_wavelength_data_layer_2005, marañon_upper_wavelength_data_layer_2011, marañon_upper_wavelength_data_layer_2017],
//             "river_confinement_layer": [marañon_upper_confinement_data_layer_1987, marañon_upper_confinement_data_layer_1993, marañon_upper_confinement_data_layer_1999, marañon_upper_confinement_data_layer_2005, marañon_upper_confinement_data_layer_2011, marañon_upper_confinement_data_layer_2017],
//             "river_path": ["data/upper-river/Marañon/upper_maranon_1987.geojson", "data/upper-river/Marañon/upper_maranon_1993.geojson", "data/upper-river/Marañon/upper_maranon_1999.geojson", "data/upper-river/Marañon/upper_maranon_2005.geojson", "data/upper-river/Marañon/upper_maranon_2011.geojson", "data/upper-river/Marañon/upper_maranon_2017.geojson"]
//         },
//         {
//             "river": "Ucayali",
//             "river_width_layer": [ucayali_upper_avg_width_data_layer_1989, ucayali_upper_avg_width_data_layer_1993, ucayali_upper_avg_width_data_layer_1997, ucayali_upper_avg_width_data_layer_2001, ucayali_upper_avg_width_data_layer_2005, ucayali_upper_avg_width_data_layer_2009, ucayali_upper_avg_width_data_layer_2013, ucayali_upper_avg_width_data_layer_2017],
//             "river_sinuosity_layer": [ucayali_upper_sinuosity_data_layer_1989, ucayali_upper_sinuosity_data_layer_1993, ucayali_upper_sinuosity_data_layer_1997, ucayali_upper_sinuosity_data_layer_2001, ucayali_upper_sinuosity_data_layer_2005, ucayali_upper_sinuosity_data_layer_2009, ucayali_upper_sinuosity_data_layer_2013, ucayali_upper_sinuosity_data_layer_2017],
//             "river_wavelength_layer": [ucayali_upper_wavelength_data_layer_1989, ucayali_upper_wavelength_data_layer_1993, ucayali_upper_wavelength_data_layer_1997, ucayali_upper_wavelength_data_layer_2001, ucayali_upper_wavelength_data_layer_2005, ucayali_upper_wavelength_data_layer_2009, ucayali_upper_wavelength_data_layer_2013, ucayali_upper_wavelength_data_layer_2017],
//             "river_path": []
//         }
//
//     ];
//
//     rivers_erosion_deposition_JSON = [
//
//         {
//             "river": "Amazonas",
//             "river_data_NC_layer": [amazonas_erosion_deposition_NC_data_layer_1993, amazonas_erosion_deposition_NC_data_layer_1999, amazonas_erosion_deposition_NC_data_layer_2005, amazonas_erosion_deposition_NC_data_layer_2011, amazonas_erosion_deposition_NC_data_layer_2017],
//             "river_data_E_layer": [amazonas_erosion_deposition_E_data_layer_1993, amazonas_erosion_deposition_E_data_layer_1999, amazonas_erosion_deposition_E_data_layer_2005, amazonas_erosion_deposition_E_data_layer_2011, amazonas_erosion_deposition_E_data_layer_2017],
//             "river_data_D_layer": [amazonas_erosion_deposition_D_data_layer_1993, amazonas_erosion_deposition_D_data_layer_1999, amazonas_erosion_deposition_D_data_layer_2005, amazonas_erosion_deposition_D_data_layer_2011, amazonas_erosion_deposition_D_data_layer_2017],
//             "no_change_JSON_path": ["data/rivers/Amazon/Erosion-deposition/1993/noch_amazonas1993.geojson", "data/rivers/Amazon/Erosion-deposition/1999/noch_amazonas1999.geojson", "data/rivers/Amazon/Erosion-deposition/2005/noch_amazonas2005.geojson", "data/rivers/Amazon/Erosion-deposition/2011/noch_amazonas2011.geojson", "data/rivers/Amazon/Erosion-deposition/2017/noch_amazonas2017.geojson"],
//             "erosion_JSON_path": ["data/rivers/Amazon/Erosion-deposition/1993/ero_amazonas1993.geojson", "data/rivers/Amazon/Erosion-deposition/1999/ero_amazonas1999.geojson", "data/rivers/Amazon/Erosion-deposition/2005/ero_amazonas2005.geojson", "data/rivers/Amazon/Erosion-deposition/2011/ero_amazonas2011.geojson", "data/rivers/Amazon/Erosion-deposition/2017/ero_amazonas2017.geojson"],
//             "deposition_JSON_path": ["data/rivers/Amazon/Erosion-deposition/1993/depo_amazonas1993.geojson", "data/rivers/Amazon/Erosion-deposition/1999/depo_amazonas1999.geojson", "data/rivers/Amazon/Erosion-deposition/2005/depo_amazonas2005.geojson", "data/rivers/Amazon/Erosion-deposition/2011/depo_amazonas2011.geojson", "data/rivers/Amazon/Erosion-deposition/2017/depo_amazonas2017.geojson"],
//
//         },
//         {
//             "river": "Huallaga",
//             "erosion_JSON_path": [],
//             "no_change_JSON_path": [],
//             "deposition_JSON_path": [],
//
//         },
//         {
//             "river": "Marañon",
//             "river_data_NC_layer": [marañon_erosion_deposition_NC_data_layer_1993, marañon_erosion_deposition_NC_data_layer_1999, marañon_erosion_deposition_NC_data_layer_2005, marañon_erosion_deposition_NC_data_layer_2011, marañon_erosion_deposition_NC_data_layer_2017],
//             "river_data_E_layer": [marañon_erosion_deposition_E_data_layer_1993, marañon_erosion_deposition_E_data_layer_1999, marañon_erosion_deposition_E_data_layer_2005, marañon_erosion_deposition_E_data_layer_2011, marañon_erosion_deposition_E_data_layer_2017],
//             "river_data_D_layer": [marañon_erosion_deposition_D_data_layer_1993, marañon_erosion_deposition_D_data_layer_1999, marañon_erosion_deposition_D_data_layer_2005, marañon_erosion_deposition_D_data_layer_2011, marañon_erosion_deposition_D_data_layer_2017],
//             "no_change_JSON_path": ["data/rivers/Marañon/Erosion-deposition/1993/noch_marañon1993.geojson", "data/rivers/Marañon/Erosion-deposition/1999/noch_marañon1999.geojson", "data/rivers/Marañon/Erosion-deposition/2005/noch_marañon2005.geojson", "data/rivers/Marañon/Erosion-deposition/2011/noch_marañon2011.geojson", "data/rivers/Marañon/Erosion-deposition/2017/noch_marañon2017.geojson"],
//             "erosion_JSON_path": ["data/rivers/Marañon/Erosion-deposition/1993/ero_marañon1993.geojson", "data/rivers/Marañon/Erosion-deposition/1999/ero_marañon1999.geojson", "data/rivers/Marañon/Erosion-deposition/2005/ero_marañon2005.geojson", "data/rivers/Marañon/Erosion-deposition/2011/ero_marañon2011.geojson", "data/rivers/Marañon/Erosion-deposition/2017/ero_marañon2017.geojson"],
//             "deposition_JSON_path": ["data/rivers/Marañon/Erosion-deposition/1993/depo_marañon1993.geojson", "data/rivers/Marañon/Erosion-deposition/1999/depo_marañon1999.geojson", "data/rivers/Marañon/Erosion-deposition/2005/depo_marañon2005.geojson", "data/rivers/Marañon/Erosion-deposition/2011/depo_marañon2011.geojson", "data/rivers/Marañon/Erosion-deposition/2017/depo_marañon2017.geojson"],
//
//         },
//         {
//             "river": "Ucayali",
//             "no_change_JSON_path": [],
//             "erosion_JSON_path": [],
//             "deposition_JSON_path": [],
//
//         }
//
//     ];
//
//     //Erosion - Deposition data layers initialization
//     initializeDataLayers(rivers_erosion_deposition_JSON[0].river_data_NC_layer);
//     initializeDataLayers(rivers_erosion_deposition_JSON[0].river_data_E_layer);
//     initializeDataLayers(rivers_erosion_deposition_JSON[0].river_data_D_layer);
//     initializeDataLayers(rivers_erosion_deposition_JSON[2].river_data_NC_layer);
//     initializeDataLayers(rivers_erosion_deposition_JSON[2].river_data_E_layer);
//     initializeDataLayers(rivers_erosion_deposition_JSON[2].river_data_D_layer);
//
//     huallaga_migration_data_layers = initializeDataLayersLiteral(huallaga_migration_data_layers);
//     ucayali_migration_data_layers = initializeDataLayersLiteral(ucayali_migration_data_layers);
//
//     rivers_migration_JSON = [
//
//         {
//             "river": "Amazonas",
//             "data_layer": [],
//             "geojson_path": []
//         },
//         {
//             "river": "Huallaga",
//             "data_layer": huallaga_migration_data_layers,
//             "geojson_path": huallaga_migration_geojson_path
//
//         },
//         {
//             "river": "Marañon",
//             "data_layer": [],
//             "geojson_path": []
//         },
//         {
//             "river": "Ucayali",
//             "data_layer": ucayali_migration_data_layers,
//             "geojson_path": ucayali_migration_geojson_path
//         }
//
//     ];
//
//     rivers_dunes_JSON = [
//
//         {
//             "river": "Amazonas",
//             "campaign_1_layers": [],
//             "campaign_1_layers_path": [],
//             "campaign_2_layers": [],
//             "campaign_2_layers_path": [],
//             "campaign_3_layers": [],
//             "campaign_3_layers_path": []
//         },
//         {
//             "river": "Huallaga",
//             "campaign_1_layers": [huallaga_dunes_campaign_1_sections_layer, huallaga_dunes_campaign_1_lines_layer],
//             "campaign_1_layers_path": ["data/UHG-dunes/Huallaga/Campaign_1/sections.geojson", "data/UHG-dunes/Huallaga/Campaign_1/lines.geojson"],
//             "campaign_2_layers": [huallaga_dunes_campaign_2_sections_layer],
//             "campaign_2_layers_path": ["data/UHG-dunes/Huallaga/Campaign_2/sections.geojson"],
//             "campaign_3_layers": [],
//             "campaign_3_layers_path": []
//         },
//         {
//             "river": "Marañon",
//             "campaign_1_layers": [],
//             "campaign_1_layers_path": [],
//             "campaign_2_layers": [marañon_dunes_campaign_2_sections_layer],
//             "campaign_2_layers_path": ["data/UHG-dunes/Marañon/Campaign_2/sections.geojson"],
//             "campaign_3_layers": [marañon_dunes_campaign_3_sections_layer],
//             "campaign_3_layers_path": ["data/UHG-dunes/Marañon/Campaign_3/sections.geojson"]
//         },
//         {
//             "river": "Ucayali",
//             "campaign_1_layers": [],
//             "campaign_1_layers_path": [],
//             "campaign_2_layers": [ucayali_dunes_campaign_2_sections_layer],
//             "campaign_2_layers_path": ["data/UHG-dunes/Ucayali/Campaign_2/sections.geojson"],
//             "campaign_3_layers": [],
//             "campaign_3_layers_path": []
//         }
//
//     ];
//
//     rivers_bedload_JSON = [
//
//         {
//             "river": "Amazonas",
//             "campaign_1_layers": [],
//             "campaign_1_layers_path": [],
//             "campaign_2_layers": [],
//             "campaign_2_layers_path": [],
//             "campaign_3_layers": [],
//             "campaign_3_layers_path": []
//         },
//         {
//             "river": "Huallaga",
//             "campaign_1_layers": [huallaga_bedload_campaign_1_sections_layer],
//             "campaign_1_layers_path": ["data/UHG-bedload/Huallaga/Campaign_1/sections.geojson"],
//             "campaign_2_layers": [],
//             "campaign_2_layers_path": [],
//             "campaign_3_layers": [],
//             "campaign_3_layers_path": []
//         },
//         {
//             "river": "Marañon",
//             "campaign_1_layers": [],
//             "campaign_1_layers_path": [],
//             "campaign_2_layers": [],
//             "campaign_2_layers_path": [],
//             "campaign_3_layers": [],
//             "campaign_3_layers_path": []
//         },
//         {
//             "river": "Ucayali",
//             "campaign_1_layers": [],
//             "campaign_1_layers_path": [],
//             "campaign_2_layers": [],
//             "campaign_2_layers_path": [],
//             "campaign_3_layers": [],
//             "campaign_3_layers_path": []
//         }
//
//     ];
//
//     // //TODO: Se agrego manualmente geojson de los perfiles de la campaña 1 para el huallaga. Todos los shapes deberian tener sus perfiles
//     // rivers_dunes_JSON[1].campaign_1_layers[1] = new google.maps.Data();
//     // addInteractiveSinglePolygonToMap(rivers_dunes_JSON[1].campaign_1_layers_path[1], rivers_dunes_JSON[1].campaign_1_layers[1], "dunes_lines", null, null, null, null);
//
//     //Communities
//     // addInteractiveSinglePolygonToMap("data/communities/amazon-native-communities.geojson", communities_data_layer, "communities", null, null, null, null);
//
//     //Malos pasos
//     // addInteractiveSinglePolygonToMap("data/malos_pasos/malos_pasos.geojson", malos_pasos_points_data_layer, "malos_pasos", null, null, null, null);
//     // addInteractiveSinglePolygonToMap("data/malos_pasos/malos_pasos_huallaga.geojson", malos_pasos_lines_data_layer, "malos_pasos_lineas", null, null, null, null);
//
//     //Rivers Valley
//     // addInteractiveSinglePolygonToMap("data/rivers_valley/rivers_valley.geojson", rivers_valley_data_layer, "rivers_valley", null, null, null, null);
//
//     //Drone Animation Test
//     // drone_video_animation_data_layer = new google.maps.Data();
//     // addInteractiveSinglePolygonToMap("data/drone_flight_animation/droneTest.geojson", drone_video_animation_data_layer, "drone_animation", droneVideoAnimationClickCallback, null, null, null);
//     // addInteractiveSinglePolygonToMap("data/drone_flight_animation/droneTest2.geojson", drone_video_animation_data_layer, "drone_animation", droneVideoAnimationClickCallback, null, null, null);
//     // drone_video_animation_data_layer.setMap(map);
//     // hideElements(["drone-video-animation-click-container"]);
//
//     //Disabled polygons
//     addInteractiveSinglePolygonToMap("data/disabled-rivers/Amazonas/amazonas_test_small.json", amazonas_disabled_river_data_layer, "disabled", null, null, null, null);
//     addInteractiveSinglePolygonToMap("data/disabled-rivers/Huallaga/huallaga_test_small.json", huallaga_disabled_river_data_layer, "disabled", null, null, null, null);
//     addInteractiveSinglePolygonToMap("data/disabled-rivers/Marañon/marañon_test_small.json", marañon_disabled_river_data_layer, "disabled", null, null, null, null);
//     addInteractiveSinglePolygonToMap("data/disabled-rivers/Ucayali/ucayali_test_small.json", ucayali_disabled_river_data_layer, "disabled", null, null, null, initMapComplete);
//
}

//</editor-fold>