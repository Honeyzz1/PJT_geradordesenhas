function gerarSenha() {
    const passwordLength = 12;
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
    let password = "";

    const array = new Uint32Array(passwordLength);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < passwordLength; i++) {
        password += chars[array[i] % chars.length];
    }

    document.getElementById("senha").value = password;
}
