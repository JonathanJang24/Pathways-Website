
function hasInput(input) {
    if (input === "") {
        return false;
    }
    return true;
}

const form = document.querySelector(".support-form")

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let fName = document.querySelector("#first-name").value;
    let lName = document.querySelector("#last-name").value;
    let subject = document.querySelector("#subject").value;
    let body = document.querySelector("#body").value;

    console.log(hasInput(fName));
    console.log(hasInput(lName));
    console.log(hasInput(subject));
    console.log(hasInput(body));

    // email checker
    let email = document.querySelector("#input-email").value;

    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    email = email.trim();
    if (!emailRegex.test(email)) {
        console.log("not email");
    }
    else {
        console.log("is email");
    }


})
