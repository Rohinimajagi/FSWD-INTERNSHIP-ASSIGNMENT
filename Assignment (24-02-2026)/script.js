function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result = '';
    let resultClass = 'success';

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers.';
        resultClass = 'error';
    } else {
        switch (operation) {
            case 'sum':
                result = `Sum: ${num1 + num2}`;
                break;
            case 'product':
                result = `Product: ${num1 * num2}`;
                break;
            case 'difference':
                result = `Difference: ${num1 - num2}`;
                break;
            case 'remainder':
                result = `Remainder: ${num1 % num2}`;
                break;
            case 'quotient':
                if (num2 === 0) {
                    result = 'Cannot divide by zero';
                    resultClass = 'error';
                } else {
                    result = `Quotient: ${num1 / num2}`;
                }
                break;
            case 'power':
                result = `Power: ${Math.pow(num1, num2)}`;
                break;
            case 'sqrt':
                if (num1 < 0 || num2 < 0) {
                    result = 'Square root is not defined for negative numbers';
                    resultClass = 'error';
                } else {
                    result = `Square Root of ${num1}: ${Math.sqrt(num1)} <br> Square Root of ${num2}: ${Math.sqrt(num2)}`;
                }
                break;
            case 'square':
                result = `Square of ${num1}: ${Math.pow(num1, 2)} <br> Square of ${num2}: ${Math.pow(num2, 2)}`;
                break;
            default:
                result = 'Please select an operation.';
                resultClass = 'error';
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
    resultDiv.classList.remove('show', 'error', 'success');
    resultDiv.classList.add(resultClass, 'show');
}

    