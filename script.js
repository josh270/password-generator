//Generate password button javascript
function generatePassword() {
  const length = parseInt(document.getElementById("password-length").value);

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let charset = lowercaseChars;

  if (document.getElementById("uppercase-checkbox").checked) {
    charset += uppercaseChars;
  }

  if (document.getElementById("numbers-checkbox").checked) {
    charset += numberChars;
  }

  if (document.getElementById("symbols-checkbox").checked) {
    charset += symbolChars;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

function copyToClipboard() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");

 
  const copyButton = document.getElementById("copy-btn");
  copyButton.innerText = "Copied!";
  setTimeout(() => {
    copyButton.innerText = "Copy to Clipboard";
  }, 2000); //
}

  
function updatePassword() {
  const passwordField = document.getElementById("password");
  const newPassword = generatePassword();
  passwordField.value = newPassword;
}

const maxPasswordHistory = 5;

function updatePasswordHistory(password) {
  const passwordList = document.getElementById("password-list");
  const li = document.createElement("li");
  li.innerText = password;
  passwordList.prepend(li);

  while (passwordList.children.length > maxPasswordHistory) {
    passwordList.removeChild(passwordList.lastChild); // Remove the oldest entry
  }

}

const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", () => {
  updatePassword();
  updatePasswordHistory(document.getElementById("password").value);
});

const copyButton = document.getElementById("copy-btn");
copyButton.addEventListener("click", copyToClipboard);

