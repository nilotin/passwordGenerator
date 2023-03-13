const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const button = document.getElementById("button")
const pass1 = document.getElementById("pass1")
const pass2 = document.getElementById("pass2")
const inputNum = document.getElementById("input-el")

inputNum.value = 0

button.addEventListener("click", function() {
    generatePassword(pass1, blank1)
    generatePassword(pass2, blank2)
    inputNum.value = 0
    tooltip1.innerHTML = "Copy to clipboard";
    tooltip2.innerHTML = "Copy to clipboard";
})

let blank1 = ""
let blank2 = ""

function generatePassword(pass, blank) {
  if (inputNum.value > 0) {
    while (blank.length < inputNum.value) {
      blank += characters[Math.floor(Math.random() * characters.length)];
    }
    pass.value = blank
  }
}

let tooltip1 = document.getElementById("myTooltip1");
document.getElementById('btn1').addEventListener('click', function () {
  let copyText = document.getElementById('pass1');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  tooltip1.innerHTML = "Copied: " + copyText.value;
})


let tooltip2 = document.getElementById("myTooltip2");
document.getElementById('btn2').addEventListener('click', function () {
  let copyText = document.getElementById('pass2');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  tooltip2.innerHTML = "Copied: " + copyText.value;
})

