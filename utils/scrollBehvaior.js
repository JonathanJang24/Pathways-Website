window.addEventListener("scroll", function () {

    let test = document.querySelector("#leadership");
    if (window.scrollY >= 700) {
        console.log("passed");
        test.style.width = Math.round(window.scrollY / 1) + 'px';
    }
    else {
        test.classList.remove("other")
    }
}
);

