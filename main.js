var typed= new Typed(".text", {
    strings:["Aspiring Full-Stack Developer" , "Adaptable Computer Engineering Student"],
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 1000,
    loop: true,
});

function showPopup(event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Create a new div element for the popup
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.textContent = "Coming soon";

    // Append the popup to the body
    document.body.appendChild(popup);

    // Set a timeout to remove the popup after 1 second
    setTimeout(function () {
        document.body.removeChild(popup);
    }, 1000);
}

