function login() {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;

    let hasError = false;
    if (username === null || username === 'undefined' || username.length === 0) {
        document.getElementById("usernameErrorSpan").style.display = 'block';
        hasError = true;
    }

    if (password === null || password === 'undefined' || password.length === 0) {
        passwordInput.nextElementSibling.style.display = 'block';
        hasError = true;
    }

    if (hasError) {
        return;
    }
    document.getElementById("usernameErrorSpan").style.display = 'none';
    passwordInput.nextElementSibling.style.display = 'none';

    const body = {
        "username": username,
        "password": password
    }

    const lang = document.getElementById("current-lang").textContent;
}