window.addEventListener("scroll", function () {

    let test = document.querySelector("#leadership");
    if (window.scrollY >= 700) {
        console.log("passed");
        test.style.width = Math.round(window.scrollY / 2) + 'px';
    }
}
);


