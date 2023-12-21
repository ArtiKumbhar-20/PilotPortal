// Login form validator
export const validateLoginForm = (username, password) => {
  const errors = {};

  if (username.trim() === "") {
    errors.username = "Username is required";
  }

  if (password.trim() === "") {
    errors.password = "Password is required";
  } else if (password.length < 4) {
    errors.password = "Password length must be greater than 4 characters";
  }

  return errors;
};

// field Required [Can use for Simple text fields]
export const validateRequired = (value) => {
  if (!value || value.trim() === "") {
    return "This field is required";
  }
  return "";
};

// Email Validator
export const validateEmail = (email) => {
  if (!email || email.trim() === "") {
    return "This field is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }
  return "";
};

// Aadhar Validator
export const validateAadhar = (aadhar) => {
  const aadharRegex = /^\d{12}$/;
  if (!aadhar) {
    return "This field is required";
  } else if (!aadharRegex.test(aadhar)) {
    return "Invalid Aadhar Number format";
  }
  return "";
};

// Mobile Validator
export const validateMobile = (mobile) => {
  const mobileRegex = /^[6789]\d{9}$/;
  if (!mobile) {
    return "This field is required";
  } else if (!mobileRegex.test(mobile)) {
    return "Invalid Mobile Number format";
  }
  return "";
};

// Pincode Validator
export const validatePincode = (pincode) => {
  const pincodeRegex = /^\d{6}$/;
  if (!pincode) {
    return "This field is required";
  } else if (!pincodeRegex.test(pincode)) {
    return "Invalid Pincode format";
  }
  return "";
};

//OTP validator
export const validateOTP = (otp) => {
  const otpRegex = /^\d{6}$/;
  if (!otp) {
    return "This field is required";
  } else if (!otpRegex.test(otp)) {
    return "Invalid OTP format";
  }
  return "";
};


//Password Validator
export const validatePassword = (password) => {
  if (!password) {
    return "Password is required";
  } else if (password.length < 8) {
    return "Password is too short. It must contain at least 8 characters.";
  } else if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter.";
  } else if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter.";
  } else if (!/\W|_/.test(password)) {
    return "Password must contain at least one symbol.";
  }

  return ""; // Return an empty string if validation passes
};
