function toggleDarkMode() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }
}


function loadTheme() {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

    }
}


function sendMessage() {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message");


    if (name === "" || email === "") {

        message.textContent =
            "Please enter your name and email.";

        message.style.color = "red";

        return;
    }


    message.textContent =
        "Thank you! I will get back to you soon.";

    message.style.color = "green";
}


loadTheme();