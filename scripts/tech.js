let dataObj = null;
let currTech = 0;

async function getDataObj() {
    dataObj = await $.getJSON("./assets/data.json");
    if (window.innerWidth > 1350) {
        $(".tech-preview__main").attr("src", dataObj.technology[0].images.portrait);
    }
}

getDataObj();

$(document).ready(function () {
    $("#tech-vehicle").click(function (e) {
        changeTech(0);
        currTech = 0;
        $(".tech-picker__main button").removeClass("selected");
        setTimeout(() => {
            $("#tech-vehicle").addClass("selected");
        }, 500)
    });
    $("#tech-spaceport").click(function (e) {
        changeTech(1);
        currTech = 1;
        $(".tech-picker__main button").removeClass("selected");
        setTimeout(() => {
            $("#tech-spaceport").addClass("selected");
        }, 500)
    });
    $("#tech-capsule").click(function (e) {
        changeTech(2);
        currTech = 2;
        $(".tech-picker__main button").removeClass("selected");
        setTimeout(() => {
            $("#tech-capsule").addClass("selected");
        }, 500)
    });
});

function changeTech(tech) {
    if (tech > currTech) {
        animateNextTech();
    } else {
        animatePreviousTech();
    }
    $(".fade-me").fadeOut(100);
    setTimeout(() => {
        $(".fade-me").fadeIn(300);
        if (window.innerWidth > 1350) {
            $(".tech-preview__main").attr("src", dataObj.technology[tech].images.portrait);
        } else {
            $(".tech-preview__main").attr("src", dataObj.technology[tech].images.landscape);
        }
        $("h1").text(dataObj.technology[tech].name);
        $(".tech-description__main").text(dataObj.technology[tech].description);
    }, 300)
}

function animateNextTech() {
    $(".animate-me").addClass("animate-next");
    setTimeout(() => {
        $(".animate-me").removeClass("animate-next");
    }, 600)
}

function animatePreviousTech() {
    $(".animate-me").addClass("animate-previous");
    setTimeout(() => {
        $(".animate-me").removeClass("animate-previous");
    }, 600)
}