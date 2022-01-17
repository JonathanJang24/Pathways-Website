window.addEventListener("scroll", function () {

    let test = document.querySelectorAll("div .isize:not(img)");

    let end = window.innerHeight;
    let mid = end / 2;
    let elH = test[0].offsetHeight / 2;

    let tempEl;
    let tempY;
    let tempScale;
    for (let i = 0; i < test.length; i++) {
        tempEl = (test[i]);
        tempY = tempEl.getBoundingClientRect().y;

        if (tempY >= 0 && tempY <= end) {

            tempY = tempY + elH;

            if (tempY > mid) {
                tempScale = 30 * (mid / tempY);
            }
            else {
                tempScale = 30 * (tempY / mid);
            }
            tempEl.style.transform = "scale(" + (100 + Math.round(tempScale)) + "%)";
        }
        else {
            tempEl.style.transform = "scale(100%)";
        }
    }
}
);


