let dataObj = null;
let currDestination = 0;

async function getDataObj() {
    dataObj = await $.getJSON("./assets/data.json");
}

getDataObj();

$(document).ready(function () {
    $("#destination-moon").click(function (e) {
        changeDestination(0);
        currDestination = 0;
        $(".destination-picker__main span").removeClass("selected");
        setTimeout(() => {
            $("#destination-moon").addClass("selected");
        }, 500)
    });
    $("#destination-mars").click(function (e) {
        changeDestination(1);
        currDestination = 1;
        $(".destination-picker__main span").removeClass("selected");
        setTimeout(() => {
            $("#destination-mars").addClass("selected");
        }, 500)
    });
    $("#destination-europa").click(function (e) {
        changeDestination(2);
        currDestination = 2;
        $(".destination-picker__main span").removeClass("selected");
        setTimeout(() => {
            $("#destination-europa").addClass("selected");
        }, 500)
    });
    $("#destination-titan").click(function (e) {
        changeDestination(3);
        currDestination = 3;
        $(".destination-picker__main span").removeClass("selected");
        setTimeout(() => {
            $("#destination-titan").addClass("selected");
        }, 500)
    });
});

function changeDestination(dest) {
    if (dest > currDestination) {
        animateNextDestination();
    } else {
        animatePreviousDestination();
    }
    $(".fade-me").fadeOut(300);
    setTimeout(() => {
        $(".fade-me").fadeIn(300);
        $(".destination-preview__main").attr("src", dataObj.destinations[dest].images.webp);
        $("h1").text(dataObj.destinations[dest].name);
        $(".destination-description__main").text(dataObj.destinations[dest].description);
        $(".stat-info__main").eq(0).text(dataObj.destinations[dest].distance);
        $(".stat-info__main").eq(1).text(dataObj.destinations[dest].travel);
    }, 500)
}

function animateNextDestination() {
    $(".animate-me").addClass("animate-next");
    setTimeout(() => {
        $(".animate-me").removeClass("animate-next");
    }, 1000)
}

function animatePreviousDestination() {
    $(".animate-me").addClass("animate-previous");
    setTimeout(() => {
        $(".animate-me").removeClass("animate-previous");
    }, 1000)
}

$(".destination-picker__main").click(function (e) {
    $(".destination-picker__main span").attr("pointer-events", "none");
    setTimeout(() => {
        $(".destination-picker__main span").attr("pointer-events", "auto");
    }, 1000)
});