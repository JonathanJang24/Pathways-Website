let temp;

[...document.querySelectorAll(".grid-el")].forEach(function (item) {

    item.addEventListener("click", function () {
        cg_el = "." + item.classList[0] + "-m";
        let modal = document.querySelector(cg_el);
        temp = modal;
        modal.style.display = "block";
        console.log(cg_el)
    });

});

const exit = document.querySelector(".close");

[...document.querySelectorAll(".close")].forEach(function (exit) {

    exit.addEventListener("click", function () {
        temp.style.display = "none";
    })

})



window.onclick = function (event) {
    if (event.target == temp) {
        temp.style.display = "none";
    }
}