// Callback Problem

function divideByHalf(sum){
    console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum){
    console.log(sum * 2);
}

function operationOnSum(num1,num2,operation){
    var sum = num1 + num2;
    operation(sum);
}

operationOnSum(3, 3, divideByHalf); // Outputs 3

operationOnSum(5, 5, multiplyBy2); // Outputs 20

// The operationOnSum function takes 3 arguments, the first number, the second number, 
// and the operation that is to be performed on their sum (callback).

// Both divideByHalf and multiplyBy2 functions are used as callback functions.

// These callback functions will be executed only after the function operationOnSum is executed.

// Therefore, a callback is a function that will be executed after another function gets executed.
