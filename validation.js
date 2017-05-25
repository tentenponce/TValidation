var errors = [];

module.exports = {
  /*
  * mobile number validation, assumes that it is from philippines and it has +63.
  *
  * starts with 9, and length must be 10
  * example valid format: 9712345678
  */
  mobileNo: function(mobileNo) {
    errors = [];
    //validate mobile number
    if (mobileNo.length < 10) {
      errors.push({
        code: 403,
        message: "Invalid mobile number.",
        description: "Mobile number length is not enough: " + mobileNo.length
      });
    }

    //check if first number is 9
    if (mobileNo.substring(0, 1) != "9") {
      errors.push({
        code: 403,
        message: "Invalid mobile number.",
        description: "Mobile number does not start with 9: " + mobileNo
      });
    }

    return errors;
  },
  /*
  * password validation
  *
  * must contain lowercase, upercase, number, alphabet, and special characters
  * must be 8-10 in length
  * must not contain white spaces
  */
  password: function(password) {
    errors = [];

    if (password.includes(" ")) { //check for white spaces
      errors.push({
        code: 403,
        message: "Spaces are not alowed.",
        description: "Spaces are not alowed."
      });
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^\&*\)\(+=._-])([a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,})$/)) { //check password alphanumberic and special characters
      errors.push({
        code: 403,
        message: "Password must contain uppercase, lowercase, alphanumeric, special characters and atleast 8 characters.",
        description: "Entered Password: " + password
      });
    }

    if (password.length > 10) { //password length must be 10 below
      errors.push({
        code: 403,
        message: "Password must be less than or equal to 10 characters.",
        description: "Entered Password: " + password
      });
    }

    return errors;
  },
  /*
  * credits: https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_validate_email
  */
  email: function(email) {
    errors = [];

    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (atpos < 1 || dotpos < (atpos + 2) || (dotpos + 2) >= email.length) {
      errors.push({
        code: 403,
        message: "Invalid email address.",
        description: "Invalid email address."
      });
    }

    return errors;
  }
};
