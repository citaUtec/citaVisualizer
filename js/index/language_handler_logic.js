var set_locale_to = function(locale) {

    if (locale) {$.i18n().locale = locale;}
    $('body').i18n();
    document.getElementById("dropdownMenuButtonTop").innerHTML = $.i18n('dropdown-UHD-section-item', UHDMarkerIndexTop.toString());

};

$.i18n().load( {
    'en': './i18n/en.json',
    // 'ru': './i18n/ru.json',
    'es': './i18n/es.json'
}).done(function() {
    set_locale_to("en");
});

function switchLanguage(countryCode) {
    set_locale_to(countryCode);
}