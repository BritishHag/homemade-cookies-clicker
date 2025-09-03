const number = document.getElementById('button')
const display = document.getElementById('display')
const name = document.getElementById('name')

let score = 0;
let plusValue = 1;
let secretnameActivation

number.addEventListener('click', function() {
    score += plusValue;
    display.textContent = score;
})
name.addEventListener(
    
)
;