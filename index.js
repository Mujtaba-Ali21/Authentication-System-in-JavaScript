// Variables

const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const userEmail = document.getElementById("email")
const userPassword = document.getElementById("password")


function submitFunc() {

    const userData = [{
        FirstName: firstName.value,
        LastName: lastName.value,
        Email: userEmail.value,
        Password: userPassword.value
    }]

    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

    if (firstName.value === "") {
        console.error("First Name is Required!");
    } if (userPassword.value === "") {
        console.error("Password is Required!");
    } if (lastName.value === "") {
        console.error("Last Name is Required!");
    } if (userEmail.value === "") {
        console.error("Email is Required!");
    } else if (!emailRegex.test(userEmail.value)) {
        console.error("Invalid Email");
    } else if (userPassword.value.length <= 8) {
        console.error("Password Must Contain Atleast 8 Characters");
    } else {
        console.log(userData);
    }

}