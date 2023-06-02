function isValidEmail(email) {
  // Email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regex pattern
  return emailRegex.test(email);
}
function validateInputs(userName, email, firstName, lastName) {
  // Check if userName is provided and at least 5 characters long
  if (!userName) {
    throw new Error("Username is required");
  }
  if (userName.length < 5) {
    throw new Error("Username should be at least 5 characters long");
  }

  // Check if email is provided and valid
  if (!email) {
    throw new Error("Email is required");
  }
  if (!isValidEmail(email)) {
    throw new Error("Invalid email format");
  }

  // Check if firstName is provided
  if (!firstName) {
    throw new Error("First name is required");
  }

  // Check if lastName is provided
  if (!lastName) {
    throw new Error("Last name is required");
  }

  // If all inputs pass validation
  return null;
}
module.exports = validateInputs;
