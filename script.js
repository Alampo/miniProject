// Object to store details

let getUserDetailsDatabase = { }

function getUserDetails() {
// UserName 
        let username = prompt('Enter your username')


        if (username == null){
            return
        }
        function validateUsername(username) {
            if (username.length < 10 && username.length > 0) {
                return true;
            } else {
                return false;
            }
        }

        while(validateUsername(username) == false){
            username = prompt("Username must be less than 10 and greater than 0");
        }
        
        getUserDetailsDatabase["userName"] = username;

// Email Address
        let email = prompt("Enter your email address");
        

        if (email == null){
            return
        }
        function validateEmail(email) {
            const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
            // checks if its an email
            emailCheckResult = emailCheck.test(email);
            if (emailCheckResult == true) {
                return true
            } else {
                return false
            }
        }

        while(validateEmail(email) == false){
            email = prompt("Please Enter a valid Email Address");
        }

        getUserDetailsDatabase["eMail"] = email;

// Phone Number
        let phoneNumber = prompt("Enter your phone number");
        

        if (phoneNumber == null){
            return
        }
        function validatePhoneNumber(phoneNumber) {
            if (phoneNumber.length == 11) {
                return true;
            } else {
                return false;
            }
        }

       while(validatePhoneNumber(phoneNumber) == false){
        phoneNumber = prompt("Phone Number must be 11 digits, try again!");
       }

       getUserDetailsDatabase["PhoneNumber"] = phoneNumber;

// Password  
        let password = prompt("Enter your Password");


        if (password == null){
            return
        }
        function validatePassword(password) {
            if (password.length < 6) {
                return false;
            } else {
                return true;
            }
        }

        while (validatePassword(password) == false){
            password = prompt("Password must not be less than 6 characters");
        }

        getUserDetailsDatabase["Password"] = password;
        

// Confirm Password
        let confirmPassword = prompt("Confirm your Password");
        

        if (confirmPassword == null){
            return
        }
        function validateConfirmPassword(confirmPassword) {
            if (confirmPassword != password) {
                return false;
            } else {
                return true;
            }
        }

        while (validateConfirmPassword(confirmPassword) == false){
            confirmPassword = prompt("Confirm Password does not match password, try again!");
        }

        console.log(getUserDetailsDatabase);


}

function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${getUserDetailsDatabase.userName}\nPhone Number: ${getUserDetailsDatabase.PhoneNumber}\nEmail: ${getUserDetailsDatabase.eMail}`)
}


