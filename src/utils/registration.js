import { generatePseudoToken, getCurrentUnixTime, hashPassword } from './validation';

export const validateField = (field, value, setError, setHelperText) => {
    if (!value) {
        setError(true);
        setHelperText(`${field} is required.`);
        return false;
    } else {
        setError(false);
        setHelperText("");
        return true;
    }
};

export const createUserData = (name, email, password) => {
    const timeNow = getCurrentUnixTime();
    const hashedPassword = hashPassword(password);
    return {
        name,
        email,
        password: hashedPassword,
        registerDate: timeNow,
        lastLoginDate: timeNow,
    };
};

export const createUserLoginData = (email, password, rememberMe) => {
    const timeNow = getCurrentUnixTime();
    const hashedPassword = hashPassword(password);
    const token = generatePseudoToken();

    const userData = {
        email,
        password: hashedPassword,
        lastLoginDate: timeNow,
    };

    if (rememberMe) {
        userData.token = token;
    }

    return userData;
};