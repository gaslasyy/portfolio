function displayvalue(val) {
    var display = document.getElementById("display");
    display.value += val;
}

function cleardisplay() {
    document.getElementById("display").value = "";
}



function calculate(operator) {
    var display = document.getElementById("display");
    var currentValue = display.value;

    if (operator === '=') {
        try {
            var result = eval(currentValue); 
            display.value = result; 
        } catch (error) {
            display.value = 'Error'; 
        }
    }
}
