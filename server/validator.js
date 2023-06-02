function validateInputs(userName, email, firstName, lastName) {
  // Check if userName is provided and at least 5 characters long
  if (!userName) {
    return {
      status: false,
      message: "Username is required",
    };
  }
  if (userName.length < 5) {
    return {
      status: false,
      message: "Username should be at least 5 characters long",
    };
  }

  // Check if email is provided and valid
  if (!email) {
    return {
      status: false,
      message: "Email is required",
    };
  }
  if (!isValidEmail(email)) {
    return {
      status: false,
      message: "Invalid email format",
    };
  }

  // Check if firstName is provided
  if (!firstName) {
    return {
      status: false,
      message: "First name is required",
    };
  }

  // Check if lastName is provided
  if (!lastName) {
    return {
      status: false,
      message: "Last name is required",
    };
  }

  // If all inputs pass validation, return null to indicate no error
  return null;
}
function isValidEmail(email) {
  // Email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regex pattern
  return emailRegex.test(email);
}
module.exports = validateInputs;
