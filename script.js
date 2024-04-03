// Function to encrypt a single word using a Caesar cipher
function encryptWord(word, shift) {
    let encryptedWord = '';
    for (let i = 0; i < word.length; i++) {
        let charCode = word.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            encryptedWord += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else {
            encryptedWord += word[i];
        }
    }
    return encryptedWord;
}

// Function to decrypt a single word encrypted with a Caesar cipher
function decryptWord(encryptedWord, shift) {
    let decryptedWord = '';
    for (let i = 0; i < encryptedWord.length; i++) {
        let charCode = encryptedWord.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            decryptedWord += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else {
            decryptedWord += encryptedWord[i];
        }
    }
    return decryptedWord;
}

// Function to encrypt plaintext sentence by encrypting each word
function encryptSentence(plaintext, shift) {
    return plaintext.split(' ').map(word => encryptWord(word, shift)).join(' ');
}

// Function to decrypt ciphertext by decrypting each word
function decryptSentence(ciphertext, shift) {
    return ciphertext.split(' ').map(word => decryptWord(word, shift)).join(' ');
}

// Function to handle encryption process
function encryptMessage() {
    const plaintext = document.getElementById('plaintext').value;
    const shift = 3; // Shift by 3 positions
    const encrypted = encryptSentence(plaintext, shift);
    document.getElementById('encrypted').textContent = 'Encrypted: ' + encrypted;
    document.getElementById('decrypted').textContent = 'Decrypted: ' + decryptSentence(encrypted, shift);
}
