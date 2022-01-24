window.addEventListener("scroll", function () {

    let el = document.querySelector("#leadership");

    let end = window.innerHeight;
    let mid = end / 2;
    let elY = el.getBoundingClientRect().y;
    let tempScale;
    let tempC;

    if (elY >= 0 && elY <= end) {
        if (elY >= mid) {
            tempScale = 30 * (mid / elY);
            tempC = (end - elY) / mid;
        }

        else {
            tempC = (elY) / mid;
            tempScale = 30 * (elY / mid);
        }
        console.log(tempC)
        el.style = "background:rgb(" + Math.round(100 - (100 * tempC)) + "," + Math.round(160 - (160 * tempC)) + ",190)";
        el.style.transform = "scale(" + (100 + Math.round(tempScale)) + "%)";
    }
    else {
        el.style.transform = "scale(100%)";
        el.style = "background:rgb(80,120,190)";
    }


}
);


