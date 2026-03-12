


export const generateValidEmail = () => {
    const randomStr = (len, chars = 'abcdefghijklmnopqrstuvwxyz0123456789') =>
        Array(len).fill().map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
    const username = randomStr(6 + Math.floor(Math.random() * 5));
    const domain = randomStr(4 + Math.floor(Math.random() * 4), 'abcdefghijklmnopqrstuvwxyz');
    const extensions = ['.com', '.net', '.org'];
    const extension = extensions[Math.floor(Math.random() * extensions.length)];

    return `${username}@${domain}${extension}`;
}

export const generateInvalidEmail = () => {
    const randomStr = (len, chars = 'abcdefghijklmnopqrstuvwxyz0123456789') =>
        Array(len).fill().map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
    const username = randomStr(6 + Math.floor(Math.random() * 5));
    const domain = randomStr(4 + Math.floor(Math.random() * 4), 'abcdefghijklmnopqrstuvwxyz');
    const extensions = ['.com', ' '];
    const extension = extensions[Math.floor(Math.random() * extensions.length)];

    return `${username}${domain}${extension}`;
}

export const generatePassword = (length = 8) => {
    const passwordLength = Math.min(length, 8);
    
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    const allChars = letters + numbers + specialChars;
    
    let password = '';
    
    password += letters[Math.floor(Math.random() * letters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
     
    for (let i = password.length; i < passwordLength; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    return password.split('').sort(() => 0.5 - Math.random()).join('');
};