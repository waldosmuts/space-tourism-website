$(document).ready(function () {
    // Opens Nav Menu
    $("nav").hide();
    $(".toggle-nav__header").click(function (e) {
        e.preventDefault();
        $("nav").show("fast");
    });
    // Closes Nav Menu
    $(".close-nav__header").click(function (e) {
        e.preventDefault();
        $("nav").hide("fast");
    });
});