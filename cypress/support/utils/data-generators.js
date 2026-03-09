


export const generateInvalidEmail = () => {

    const randomStr = (len, chars = 'abcdefghijklmnopqrstuvwxyz0123456789') =>
        Array(len).fill().map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
    const usuario = randomStr(6 + Math.floor(Math.random() * 5));
    const dominio = randomStr(4 + Math.floor(Math.random() * 4), 'abcdefghijklmnopqrstuvwxyz');
    const extensao = extensoes[Math.floor(Math.random() * extensoes.length)];

    return `${usuario}@${dominio}${extensao}`;
}



export const generateEmail = () => {

    const randomStr = (len, chars = 'abcdefghijklmnopqrstuvwxyz0123456789') =>
        Array(len).fill().map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
    const usuario = randomStr(6 + Math.floor(Math.random() * 5));
    const dominio = randomStr(4 + Math.floor(Math.random() * 4), 'abcdefghijklmnopqrstuvwxyz');
    const extensoes = ['. com', ' '];
    const extensao = extensoes[Math.floor(Math.random() * extensoes.length)];

    return `${usuario}${dominio}${extensao}`;
}
