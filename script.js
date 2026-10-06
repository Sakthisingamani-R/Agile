let selectedEvent = "";

function scrollToEvents() {
    document.getElementById("events").scrollIntoView({ behavior: "smooth" });
}

function registerEvent(eventName) {
    selectedEvent = eventName;
    document.getElementById("selectedEvent").innerText =
        "You are registering for: " + eventName;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function submitRegistration() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please enter your name and email.");
        return;
    }

    alert(
        "Registration successful!\n\n" +
        "Event: " + selectedEvent +
        "\nName: " + name +
        "\nEmail: " + email
    );

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    closePopup();
}
