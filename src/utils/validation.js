const bcrypt = require('bcryptjs');

export function validatePassword(password) {
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!isLongEnough) {
        return "Password must be at least 6 characters long.";
    }
    if (!hasNumber) {
        return "Password must contain at least one number.";
    }
    if (!hasLetter) {
        return "Password must contain at least one letter.";
    }
    if (!hasSymbol) {
        return "Password must contain at least one symbol.";
    }
    return "";
};

export function validateEmail (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }
    return "";
  };

export function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
}

// unix time now
export function getCurrentUnixTime() {
    return Math.floor(Date.now() / 1000);
}

// token
export function generatePseudoToken() {
    const timestamp = getCurrentUnixTime();
    // random bytes generator
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    // convert bytes to HEX
    const randomBytes = Array.from(array, byte => ('0' + byte.toString(16)).slice(-2)).join('');
    // create token
    const pseudoToken = `${timestamp}${randomBytes}`;
    return pseudoToken;
}