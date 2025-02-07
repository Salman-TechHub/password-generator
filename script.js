let inputSlider = document.querySelector("#inputSlider");
let sliderValue = document.querySelector("#sliderValue");
let passBox = document.querySelector("#passBox");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let genBtn = document.querySelector("#genBtn");
let copyIcon = document.querySelector("#copyIcon");

// showing input slider value 
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";
// function to generate Password

function generatePassword() {
    let genPassword = "";
    let allChar = "";


    allChar += lowercase.checked ? lowerChars : "";
    allChar += uppercase.checked ? upperChars : "";
    allChar += numbers.checked ? allNumbers : "";
    allChar += symbols.checked ? allSymbols : "";

    if (allChar == "" || allChar.length == 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChar.charAt(Math.floor(Math.random() * allChar.length));
        i++;
    }
    return genPassword;
}

copyIcon.addEventListener("click", () => {
    if (passBox.value != "" || passBox.value.length >= 1) {

        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerText = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
})