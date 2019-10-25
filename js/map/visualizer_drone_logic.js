//<editor-fold desc="VARIABLES">

/**
 * @param drone_flights_JSON: JSON variable thtat contains the information about the drone flights videos showed in the web
 * @param droneFlightsMarkersArray: Drone map markers array
 * @param droneFlightsMarkersPositionsArray: Lat Lon array of drone markers
 * @param previous_drone_marker_coordinates: Values used to validate if drone video card should be dismissed or not
 */

// var drone_flights_JSON = [
//
//     {
//         "title": "Río Huallaga - Chontayacu",
//         "location": "Uchiza",
//         "latitude": -8.405576,
//         "longitude": -76.37996,
//         "code": "https://citavisualizador.s3-us-west-1.amazonaws.com/videos/drone_flights/DJI_0145.mov",
//         "thumbnail_image": "img/bottom-cards-images/card_1.JPG"
//
//     },
//     {
//         "title": "Río Huallaga",
//         "location": "Tingo María",
//         "latitude": -9.286076,
//         "longitude": -75.9998,
//         "code": "https://citavisualizador.s3-us-west-1.amazonaws.com/videos/drone_flights/DJI_0107.mov",
//         "thumbnail_image": "img/bottom-cards-images/card_1.JPG"
//     }
//
// ];

var drone_flights_JSON = [

    {
        "title": "Río Huallaga - Chontayacu",
        "location": "Uchiza",
        "latitude": -8.405576,
        "longitude": -76.37996,
        "code": "https://citavisualizador.s3-us-west-1.amazonaws.com/videos/drone_flights/test.mp4",
        "thumbnail_image": "img/bottom-cards-images/card_1.JPG"

    },
    {
        "title": "Río Huallaga",
        "location": "Tingo María",
        "latitude": -9.286076,
        "longitude": -75.9998,
        "code": "https://citavisualizador.s3-us-west-1.amazonaws.com/videos/drone_flights/test.mp4",
        "thumbnail_image": "img/bottom-cards-images/card_1.JPG"
    },
    {
        "title": "Río Huallaga",
        "location": "Tingo María",
        "latitude": -9.286076,
        "longitude": -75.9998,
        "code": "https://citavisualizador.s3-us-west-1.amazonaws.com/videos/drone_flights/test.mp4",
        "thumbnail_image": "img/bottom-cards-images/card_1.JPG"
    },
    {
        "title": "Río Huallaga - Chontayacu",
        "location": "Uchiza",
        "latitude": -8.405576,
        "longitude": -76.37996,
        "code": "https://citavisualizador.s3-us-west-1.amazonaws.com/videos/drone_flights/test.mp4",
        "thumbnail_image": "img/bottom-cards-images/card_1.JPG"

    },
    {
        "title": "Río Huallaga",
        "location": "Tingo María",
        "latitude": -9.286076,
        "longitude": -75.9998,
        "code": "https://citavisualizador.s3-us-west-1.amazonaws.com/videos/drone_flights/test.mp4",
        "thumbnail_image": "img/bottom-cards-images/card_1.JPG"
    },
    {
        "title": "Río Huallaga - Chontayacu",
        "location": "Uchiza",
        "latitude": -8.405576,
        "longitude": -76.37996,
        "code": "https://citavisualizador.s3-us-west-1.amazonaws.com/videos/drone_flights/test.mp4",
        "thumbnail_image": "img/bottom-cards-images/card_1.JPG"

    },
    {
        "title": "Río Huallaga",
        "location": "Tingo María",
        "latitude": -9.286076,
        "longitude": -75.9998,
        "code": "https://citavisualizador.s3-us-west-1.amazonaws.com/videos/drone_flights/test.mp4",
        "thumbnail_image": "img/bottom-cards-images/card_1.JPG"
    },
    {
        "title": "Río Huallaga - Chontayacu",
        "location": "Uchiza",
        "latitude": -8.405576,
        "longitude": -76.37996,
        "code": "https://citavisualizador.s3-us-west-1.amazonaws.com/videos/drone_flights/test.mp4",
        "thumbnail_image": "img/bottom-cards-images/card_1.JPG"

    },
    {
        "title": "Río Huallaga",
        "location": "Tingo María",
        "latitude": -9.286076,
        "longitude": -75.9998,
        "code": "https://citavisualizador.s3-us-west-1.amazonaws.com/videos/drone_flights/test.mp4",
        "thumbnail_image": "img/bottom-cards-images/card_1.JPG"
    },

];

var droneFlightsMarkersArray = [];
var droneFlightsMarkersPositionsArray = [];
var previous_drone_marker_coordinates = {lat: -180, lng: -180};

//</editor-fold>

//<editor-fold desc="FUNCTIONS">

/**
 * Starts animation when the drone marker is clicked
 * @param event
 */
function droneVideoAnimationClickCallback(event) {

    document.getElementById('drone-animation-video').playbackRate = 2.5;
    document.getElementById("drone-animation-video").src = "videos/drone_animation_videos/" + event.feature.getProperty("video_code");

    document.getElementById("drone-animation-video").oncanplay = function () {

        if(!drone_video_animation_playing){
            drone_video_animation_playing = true;
            fadeInElements(["drone-video-animation-click-container"], 350);
            //offsetCenter(new google.maps.LatLng(droneVideoAnimations[1].Coordinates[0].lat, droneVideoAnimations[1].Coordinates[0].lng), 16);
            droneVideoPathAnimation(droneVideoAnimations[1], "#FF0000", 0.0, 2.0);
        }

    };

}

/**
 * Adds drone marker to the map using the JSON object defined in the variables section
 */
function addDroneMarker() {

    for (var i = 0; i < drone_flights_JSON.length; i++){

        var json = drone_flights_JSON[i];

        var marker = L.marker([drone_flights_JSON[i].latitude, drone_flights_JSON[i].longitude], {
            icon: L.icon({iconUrl: "img/side-bar-icon/drone_marker_icon.png"})
        });

        marker.addTo(map);

        (function (marker, i, json, previous_drone_marker_coordinates) {

            marker.on('click', function () {

                offsetCenter(marker.getLatLng(), 11);
                document.getElementById("drone-flights-marker-click-container").addEventListener("click", function () {
                    document.getElementById("droneVideoOverlay").style.visibility = "visible";
                });
                document.getElementById("card-1-marker-row-1-title").innerHTML = json.title;
                document.getElementById("card-1-marker-row-1-location").innerHTML = json.location;
                document.getElementById("drone-video-source").src = json.code;
                document.getElementById("drone-video-source").src = json.code;

                setTimeout(function () {
                    document.getElementById("card-1-marker-row-1").style.visibility = "visible";
                    fadeInElements(["drone-flights-marker-click-container"], 350);
                }, 1000);

            });

        })(marker, i, json, previous_drone_marker_coordinates);

        droneFlightsMarkersArray.push(marker);
        droneFlightsMarkersPositionsArray.push(marker.getLatLng());

    }

    var coordsArray = coordinatesArrayCenter(droneFlightsMarkersPositionsArray);
    map.setZoom(7);
    map.flyTo([coordsArray.centerX, coordsArray.centerY]);

}

//</editor-fold>