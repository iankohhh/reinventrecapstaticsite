function validateForm() {
    var firstName = document.forms["registrationForm"]["first_name"].value;
    var lastName = document.forms["registrationForm"]["last_name"].value;
    var email = document.forms["registrationForm"]["email"].value;

    if (firstName === "" || lastName === "" || email === "") {
        alert("Please fill in all required fields");
        return false;
    }
    return true;
}

