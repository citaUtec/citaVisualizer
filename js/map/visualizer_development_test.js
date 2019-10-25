//<editor-fold desc="VARIABLES">

/**
 * @param droneVideoAnimations: JSON object with information of the drone flight (animation_speed and delay values need more testing WORK IN PROGRESS)
 */
var droneVideoAnimations = [

    {
        "Location": "TBD",
        "Project": "TBD",
        "Animation_speed": 100,
        "Delay": 1000,
        "video_code": "TBD.MOV",
        "Coordinates": [

            {lat: -12.135830, lng: -77.022718},
            {lat: -12.137062, lng: -77.022493},
            {lat: -12.139455, lng: -77.022321},
            {lat: -12.139023, lng: -77.017787},
            {lat: -12.135703, lng: -77.017934},
            {lat: -12.135297, lng: -77.019499},
            {lat: -12.135830, lng: -77.022718}

        ]

    },
    {
        //droneTest
        "Location": "TBD",
        "Project": "TBD",
        "Animation_speed": 30,
        "Delay": 30,
        "video_code": "TBD.MOV",
        "Coordinates": [

            {lat: -5.34855684673416, lng: -79.8327889855131},

            {lat: -5.34846289244619, lng: -79.8341309274986},

            {lat: -5.34783427345963, lng: -79.8356665906761},

            {lat: -5.34669732835794, lng: -79.8368115350562},

            {lat: -5.34512971833884, lng: -79.8372923290335},

            {lat: -5.34348098794222, lng: -79.8373207725484},

            {lat: -5.34183525377833, lng: -79.8370845758242},

            {lat: -5.34017662212954, lng: -79.8371244581171},

            {lat: -5.33937921922179, lng: -79.8374274089699}

        ]
    },
    {
        //droneTest2
        "Location": "TBD",
        "Project": "TBD",
        // "Animation_speed": 0.0101633,
        "Animation_speed": 50.1633,
        "Delay": 10,
        "video_code": "TBD.MOV",
        "Coordinates": [

            {lat: -5.156973955, lng: -80.61479032},

            {lat: -5.15752019, lng: -80.61498503},

            {lat: -5.158066425, lng: -80.61517974},

            {lat: -5.15861266, lng: -80.61537445},

            {lat: -5.159158894, lng: -80.61556916},

            {lat: -5.159705129, lng: -80.61576387},

            {lat: -5.160251364, lng: -80.61595858},

            {lat: -5.160797599, lng: -80.61615329},

            {lat: -5.161343834, lng: -80.616348}

        ]
    }

];

//</editor-fold>



//<editor-fold desc="FUNCTIONS">

/**
 * Divides the total distance in small parts to simulate an animation depending on the animation_speed and delay parameters
 * @param marker: Google maps marker object
 * @param coords: Coordinates array of the path
 * @param animation_speed
 * @param delay
 */
function animateMarker(marker, coords, animation_speed, delay) {

    var target = 0;
    let km_h = animation_speed || 50;
    coords.push([coords[0].lat, coords[0].lng]);

    function goToPoint() {

        var lat = marker.position.lat();
        var lng = marker.position.lng();
        var step = (km_h * delay * 1000) / 3600000;

        var dest = new google.maps.LatLng(coords[target].lat, coords[target].lng);
        var distance = google.maps.geometry.spherical.computeDistanceBetween(dest, marker.position);

        var numStep = distance / step;

        var i = 0;
        var deltaLat = (coords[target].lat - lat) / numStep;
        var deltaLng = (coords[target].lng - lng) / numStep;

        function moveMarker() {

            lat += deltaLat;
            lng += deltaLng;
            i += step;

            if (i < distance) {

                marker.setPosition(new google.maps.LatLng(lat, lng));
                setTimeout(moveMarker, delay);

            }else{

                marker.setPosition(dest);
                target++;

                if (target === coords.length) {
                    drone_video_animation_playing = false;
                    return;
                }

                setTimeout(goToPoint, delay);

            }

        }

        moveMarker();

    }

    goToPoint();

}

/**
 * Creates the marker and polyline (with its properties) path to use in the animation function (animateMarker)
 * @param droneFlightPathJSON: Path of the GeoJSON file in the project
 * @param strokeColor
 * @param strokeOpacity
 * @param strokeWeight
 */
function droneVideoPathAnimation(droneFlightPathJSON, strokeColor, strokeOpacity, strokeWeight) {

    var droneFlightPath = new google.maps.Polyline({
        path: droneFlightPathJSON.Coordinates,
        geodesic: true,
        strokeColor: strokeColor,
        strokeOpacity: strokeOpacity,
        strokeWeight: strokeWeight,
    });

    droneFlightPath.setMap(map);

    var droneAnimationMarker = new google.maps.Marker({
        position: new google.maps.LatLng(droneFlightPathJSON.Coordinates[0].lat, droneFlightPathJSON.Coordinates[0].lng),
        map: map,
        icon: "img/side-bar-icon/drone_marker_icon.png",
    });

    animateMarker(droneAnimationMarker, droneFlightPathJSON.Coordinates, droneFlightPathJSON.Animation_speed, droneFlightPathJSON.Delay);

}

//</editor-fold>