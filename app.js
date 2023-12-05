// Decliare variable 
const submitBtn = document.getElementById('submit-button');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const condation = document.getElementById('condation');
const result = document.getElementById('result');


// Logic start

submitBtn.addEventListener('click', () => {

    if (number1.value == "" || number2.value == "") {
        alert("Please enter number");
    } else {
        result.classList.remove('hidden');
        result.classList.add('flex');
        if (condation.value == "+") {
            result.innerHTML = parseFloat(parseInt(number1.value) + parseInt(number2.value));
        } else if (condation.value == "-") {
            result.innerHTML = parseFloat(parseInt(number1.value) - parseInt(number2.value));
        } else if (condation.value == "*") {
            result.innerHTML = parseFloat(parseInt(number1.value) * parseInt(number2.value));
        } else {
            result.innerHTML = parseFloat(parseInt(number1.value) / parseInt(number2.value));
        }
    }
});

