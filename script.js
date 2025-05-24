// Funktion zur Passwortgenerierung
  function generatePassword(length = 12) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }

  // Event Listener hinzufügen
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".generate-button button");
    const input = document.querySelector(".output input");

    button.addEventListener("click", function () {
      const newPassword = generatePassword();
      input.value = newPassword;
    });
  });
