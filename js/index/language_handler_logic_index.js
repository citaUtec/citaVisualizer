var set_locale_to = function(locale) {

    if (locale) {
        $.i18n().locale = locale;
    }
    $('body').i18n();

};

var language="es";

$.i18n().load( {
    'en': './i18n/en.json',
    'es': './i18n/es.json',
    /*'ru': './i18n/ru.json',*/

} ).done(function() {
    set_locale_to(language);
});

/*var flag ="./img/us.png";*/
/*var bandera = document.getElementById("bandera");*/



var idiom = "Spanish";

$(document).ready(function() {

    SwitchLanguage();
});
function SwitchLanguage() {

        /*var esp = document.getElementById("button_esp");
        var eng = document.getElementById("button_eng");*/

            document.getElementById("button_esp").addEventListener("click", function () {
                document.getElementById("button_esp").className = "lg-button1";
                document.getElementById("button_eng").className = "lg-button2";

                idiom = "Spanish";
                language = "es";

                set_locale_to(language);
            });


            document.getElementById("button_eng").addEventListener("click", function () {
                document.getElementById("button_eng").className = "lg-button1";
                document.getElementById("button_esp").className = "lg-button2";

                idiom = "English";
                language = "en";

                set_locale_to(language);
            });


/*    console.log("idioma es " + idiom);

    console.log("language es " + language);*/
        /*if(esp.state() === true){
            console.log("Holi");
        }*/

        /*var selectedLanguage = document.getElementById("idiom").value;*/

/*        if (idiom === "English") {
            language = "en";
            console.log(language);
            /!*flag="./img/language-flag-images/us.png";*!/
        }

        if (idiom === "Spanish") {
            language = "es";
            console.log(language);
            /!*flag="./img/language-flag-images/es.png";*!/
        }*/

        /*set_locale_to(language);*/

        /*bandera.src = flag;*/

    }
