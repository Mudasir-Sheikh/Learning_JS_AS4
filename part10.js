// //Question 01
// let multiDimensional_Array = [[]];


// //Question 02
// let multi_array=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for (array of multi_array){
//     console.log(array);
// }


// //Question 03
// for (let i=0; i<=10; i++){
//     console.log(i);
// }


// // //Question 04
// let table = prompt("Enter a Number to Show its Multiplication Table:");
// let times = prompt("Enter How much times you want Multiplication?");
// document.write("<h2>Multipilication Table of "+table +"</h2>");
// document.write("<h2>Table Length/Times: "+times +"</h2><br>");

// for (let i=1;i<=times;i++){
//     document.write(`${table} x ${i} = ${table*i}<br>`);
// }
// document.write("<br>")
    


// //Question 05
// let friuts  = ["apple","banana","mango","orange","strawberry"];
// for (let i=0; i<friuts.length; i++){
//     console.log(`Element at Index ${i} is ${friuts[i]}`);
// }



// //Question 06
// document.write("Counting: ");
// for (let i=1; i<=15;i++){
//     document.write(i+", ");
// }

// document.write("<br>")
// document.write("Reverse Counting: ");
// for (let i=15; i>=1;i--){
//     document.write(i+", ");
// }

// document.write("<br>")
// document.write("Even Counting: ");
// for (let i=0; i<=20;i+=2){
//     document.write(i+", ");
// }

// document.write("<br>")
// document.write("Odd Counting: ");
// for (let i=1; i<=20;i+=2){
//     document.write(i+", ");
// }

// document.write("<br>")
// document.write("Series: ");
// for (let i=2; i<=20;i+=2){
//     document.write(i+"k, ");
// }



// //Question 07
// let bakery = ['apple','apple pie','cookie','chips','patties','brownies','cakes' ];
// let bakery_UserInput = prompt("Welcome to ABC Bakery . Which Item you want?");
// bakery_userInput = bakery_UserInput.toLowerCase();
// let found = false;
// for (item of bakery){
//     if (bakery_userInput == item){
//         console.log(`${bakery_UserInput} is Avaible on the Index`)
//         found = true;
//         break;
//     }
// }
// if (!found){
//     console.log("Item not Found")
// }






//Question 08 + 09 (Combined)
let numberArray = [-33,-22,-11,0,11,22,33,44,55,66,77,88,99];
let largest = 0;
let smallest = 0;
for (let i=0; i<=numberArray.length; i++){
    if(numberArray[i]> largest){
        largest = numberArray[i];
    }
    if (numberArray[i]<smallest){
        smallest = numberArray[i];
    }
}
console.log(`Largest Number in Array is ${largest} and Smallest Number is ${smallest}`);



//Question 10
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
