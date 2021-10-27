const darkMode = () => {
    $("body").css("background-color", "black")
    $("li a, li, h2, p, .login a").css("color", "white")
    $(".headerBajo, .difusionRedes").css("border", "2px solid white")
    $(".login img").css("background-color", "white")
    localStorage.setItem("theme", "dark")
}

const ligthMode = () => {
    $("body").css("background-color", "white")
    $("li a, li, h2, p, .login a").css("color", "black")
    $(".headerTop p, .bannerContainer p, .difusionRedes h2, .arrepentir a").css("color", "white")
    $(".headerBajo").css("border-bottom", "none")
    localStorage.setItem("theme", "light")
}


$("#dmode").on("click", () => {
    if (localStorage.getItem("theme") === "dark") {
        ligthMode()
    } else {
        darkMode()
    }   
})


//Animaciones con jQuery

$(".banner h1").animate({
    opacity: 1,
    fontSize: "3em"
}, 1000)

$(".banner a").slideUp(1000).slideDown(1000)