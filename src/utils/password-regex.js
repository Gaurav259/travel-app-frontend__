export const validatePassword = (password) => {
    const regex =  /^(?=.*\d)(?=.*[@#$*!&%])(?=.*[a-z])(?=.*[A-Z]).{8,19}$/;
    return regex.test(password);
}