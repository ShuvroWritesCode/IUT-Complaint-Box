// utils/cryptoUtils.js
import CryptoJS from 'crypto-js';

const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;

// Encrypt data
export const encryptData = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), encryptionKey).toString();
  return ciphertext;
};

// Decrypt data
export const decryptData = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, encryptionKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
