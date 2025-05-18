document.getElementById("registrationForm")
    .addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phoneEmail = document.getElementById("phoneEmail").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const errorTextTag = document.getElementById("errorText");

        if (password !== confirmPassword) {
            errorTextTag.textContent = "Mazgimisiz nima balo?";
            errorTextTag.style.display = "block";
            document.getElementById("confirmPassword").style.borderColor = "red";
            document.getElementById("password").style.borderColor = "red";
            return;
        } else {
            errorTextTag.style.display = "none";
            document.getElementById("confirmPassword").style.borderColor = "#ddd";
            document.getElementById("password").style.borderColor = "#ddd";
        }
        //

        const body = {
            "name": name,
            "username": phoneEmail,
            "password": password
        }

        const lang = document.getElementById("current-lang").textContent;
    });


function checkEmailOrPhone(value) {
    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regular expression for validating phone numbers
    // Adjust based on your requirements (e.g., country-specific formats)
    const phoneRegex = /^998\d{9}$/; // 998 91 572 1213

    if (emailRegex.test(value)) {
        return "Email";
    } else if (phoneRegex.test(value)) {
        return "Phone";
    } else {
        return "Invalid";
    }
}