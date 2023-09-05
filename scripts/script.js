// const loginForm             = document.querySelector("#login");
// const createAccountForm     = document.querySelector("#createAccount");
// const submitBtn     = document.querySelector(".form__button");
// const userUserName          = document.querySelector("#register");




function setFormMessage(formElement, type, message) {

    const messageElement = formElement.querySelector(".form__message");
    
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}


function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}



function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}







document.addEventListener("DOMContentLoaded", () => {
    const loginForm             = document.querySelector("#login");
    const userUserName          = document.querySelector("#register");

    loginForm.addEventListener("submit", (e)=> {
        e.preventDefault();

        // Perform your AJAX/Fetch login
        try {
            throw Error("Invalid username/password combination 🔑🗝🔑")
        } catch (error) {
            setFormMessage(loginForm, "error", error);
        }
       
    });


    userUserName.addEventListener("blur", (e)=> {
        e.preventDefault()
        if (userUserName.id == "register" && userUserName.value.length > 0 && userUserName.value.length < 10){
            setInputError(userUserName, "Username must be at least 10 characters in length ❌");
        }
    });
    
    userUserName.addEventListener("input", ()=> {
        clearInputError(userUserName);
    });
    

});