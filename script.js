function showMessage(response) {
    if (response === "Nej") {
        const NejButton = document.getElementById("No-button");
        const container = document.querySelector(".container");
        const maxWidth = window.innerWidth - NejButton.offsetWidth;
        const maxHeight = window.innerHeight - NejButton.offsetHeight;

        // Set button position to absolute
        NejButton.style.position = "absolute";

        // Change image source to "gun.gif"
        document.getElementsByClassName("image")[0].src = "images/gun.gif";

        // Generate random coordinates within the visible container
        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        // Apply new coordinates to the button
        NejButton.style.left = randomX + "px";
        NejButton.style.top = randomY + "px";

        // Update text content and hide name message
        document.getElementById("question").textContent =
            "Nej är inte ett alternativ, du måste välja ja?";
        document.getElementById("name").style.display = "none";

        // Optional: You can also add a timeout to reset the position after a few seconds
    }

    if (response === "JA!!!!") {
        // Remove name message and Nej button
        document.getElementById("name").remove();
        document.getElementById("No-button").remove();

        // Update text content, show message, and change image source to "dance.gif"
        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "Yayyyy❤️❤️❤️❤️";
        yesMessage.style.display = "block";
        yesMessage.style.fontStyle = "normal";
        document.getElementsByClassName("image")[0].src = "images/dance.gif";

        // Remove yes button
        document.getElementById("YesButton").remove();
    }
}