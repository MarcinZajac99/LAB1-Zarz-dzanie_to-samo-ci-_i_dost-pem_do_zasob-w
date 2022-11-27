//pobieranie za pomoca id zmiennych do obiektow html
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

//dopisanie wywolania akcji do przycisku
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
//ustawienie prawidlowych danych
    if (username === "user1" && password === "12345") {
//informacja o udanym zalogowaniu sie
        alert("You have successfully logged in.");
        location.reload();
//informacja o podaniu niewlasciwych danych
    } else {
        alert("Wrong username or password.");
    }
})
