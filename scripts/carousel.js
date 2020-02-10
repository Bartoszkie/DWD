new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    draggable: true,
    dots: "#dots",
    arrows: {
        prev: ".glider-prev",
        next: ".glider-next"
    }
});

let resized = false;
document.querySelector("#resize").addEventListener("click", () => {
    if (resized) {
        const overflow = document.querySelector(".glider");
        overflow.style.overflowY = "hidden";
        const activeElement = document.querySelector(".active");
        activeElement.classList.remove("fullScreen");
        resized = false;
    } else {
        const overflow = document.querySelector(".glider");
        overflow.style.overflowY = "unset";
        const activeElement = document.querySelector(".active");
        activeElement.classList.add("fullScreen");
        resized = true;
    }
})