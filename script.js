let input = document.querySelector(".range-box input");
let slider = document.querySelector(".range-box .slider-number");
let showPassword = document.querySelector(".password-box input");
let btn = document.querySelector("button");
let icon=document.querySelector(".password-box i")

let sliderVal;
input.addEventListener("input", ()=>{
    slider.innerText = input.value;
    sliderVal=slider.innerText;
    generatePassword(sliderVal);
})

btn.addEventListener("click",()=>{
    generatePassword(sliderVal);
})

icon.addEventListener("click",()=>{
    navigator.clipboard.writeText(password);
    icon.classList.replace("uil-copy", "uil-file-check-alt");
})

function generatePassword(sliderVal) {
    let str2="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_=+<>?{}';:./?";
    let length=str2.length;
    let password = "";
   
    for(let i = 0; i < sliderVal; i++) {
        let ranIndex=Math.floor(Math.random() * length);
        let ranChar=str2.charAt(ranIndex);
        password += ranChar;
    }
   
    // Select the input field and set its value to the generated password
    showPassword.value = password;
    icon.classList.replace("uil-file-check-alt", "uil-copy");
    // return password;
   }