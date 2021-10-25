let dataObj = null;
let currCrew = 0;

async function getDataObj() {
    dataObj = await $.getJSON("./assets/data.json");
}

getDataObj();

$(document).ready(function () {
    $("#crew-doug").click(function (e) {
        changeCrew(0);
        currCrew = 0;
        $(".crew-picker__main button").removeClass("selected");
        setTimeout(() => {
            $("#crew-doug").addClass("selected");
        }, 500)
    });
    $("#crew-mark").click(function (e) {
        changeCrew(1);
        currCrew = 1;
        $(".crew-picker__main button").removeClass("selected");
        setTimeout(() => {
            $("#crew-mark").addClass("selected");
        }, 500)
    });
    $("#crew-vict").click(function (e) {
        changeCrew(2);
        currCrew = 2;
        $(".crew-picker__main button").removeClass("selected");
        setTimeout(() => {
            $("#crew-vict").addClass("selected");
        }, 500)
    });
    $("#crew-anou").click(function (e) {
        changeCrew(3);
        currCrew = 3;
        $(".crew-picker__main button").removeClass("selected");
        setTimeout(() => {
            $("#crew-anou").addClass("selected");
        }, 500)
    });
});

function changeCrew(crew) {
    if (crew > currCrew) {
        animateNextCrew();
    } else {
        animatePreviousCrew();
    }
    $(".fade-me").fadeOut(300);
    setTimeout(() => {
        $(".fade-me").fadeIn(300);
        $(".crew-preview__main").attr("src", dataObj.crew[crew].images.webp);
        $("h3").text(dataObj.crew[crew].role);
        $("h1").text(dataObj.crew[crew].name);
        $(".crew-description__main").text(dataObj.crew[crew].bio);
    }, 500)
}

function animateNextCrew() {
    $(".animate-me").addClass("animate-next");
    setTimeout(() => {
        $(".animate-me").removeClass("animate-next");
    }, 1000)
}

function animatePreviousCrew() {
    $(".animate-me").addClass("animate-previous");
    setTimeout(() => {
        $(".animate-me").removeClass("animate-previous");
    }, 1000)
}

$(".crew-picker__main button").click(function (e) {
    $(".crew-picker__main button").attr("disabled", true);
    setTimeout(() => {
        $(".crew-picker__main button").attr("disabled", false);
    }, 1000)
});