//Question 01 to 10 are Repeated in Learining Js AS2 Assignment Only One Question is Extra;
// Question 11
// A Simple calculator
let operand1 = parseFloat(prompt("Enter Operand 1:"));
let operand2 = parseFloat(prompt("Enter Operand 2:"));
let operator = parseInt(prompt("Enter Operator Number to Perform Operation:\n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division\n5.Remainder"));
if (operator === 1){
    console.log("Result:" , operand1+operand2);
}
else if (operator === 2){
    console.log("Result:" , operand1-operand2);
}
else if (operator === 3){
    console.log("Result:" , operand1*operand2);
}
else if (operator === 4){
    console.log("Result:" , operand1/operand2);
}
else if (operator === 5){
    console.log("Result:" , operand1%operand2);
}
else{
    alert("Invalid Operator")
}