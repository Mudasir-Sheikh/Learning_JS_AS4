// //Question 01
// let firstname = prompt("Enter your firstname");
// let lastname =  prompt("enter your last name")
// let fullName = firstname + " " + lastname;
// console.log(fullName);


// //Question 02
// let favouriteModel = prompt("Enter Your favourite Mobile Model");
// console.log("The Length String: ",favouriteModel.length);



// //Question 03
// let pakistan = "Pakistani"
// console.log(pakistan.indexOf('n'));



// //Question 04
// let word = "Hello World";
// console.log("last occurence of l is :",word.lastIndexOf('l'));


// //Question 05
// console.log("Char at Index 3: ",pakistan.charAt(3));



// //Question 06
// let concatingStrings = firstname.concat(" " + lastname);
// console.log(concatingStrings);


// //Question 07
// let city = "Hyderabad";
// let replace = city.replace("Hyder","Islam");
// console.log("After Replacement: ",replace);


// //Question 08
// var message = "Ali and Sami are best friends. They play cricket and footbal togther."
// let replaceAnd = message.replace(/and/g, "&");  //replaces all occurences of "and"
// console.log(replaceAnd);



// //Question 09
// var NumberString = "123";
// console.log("value:",NumberString);
// console.log("type:",typeof(NumberString));

// NumberString = parseInt(NumberString);
// console.log("value:",NumberString);
// console.log("type:",typeof(NumberString))



// //Question 10
// let ConvertToUpper = prompt("Enter to Uppercase;");
// console.log("To Uppercase: ",ConvertToUpper.toUpperCase());



// //Question 11
// let userinput = prompt("Enter the Word for Title case");
// console.log("TitleCase: ",userinput[0].toUpperCase() + userinput.slice(1));


// //Question 12
// let number = 35.36;
// console.log(number.toString().replace(".",""));



// //Question 13

let passwordInput = prompt("Enter the Password");
if(passwordInput.length < 6){
    console.log("Password must contain atleast 6 letters long")
}
else if(!isNaN(parseInt(passwordInput[0]))){
    console.log("Password Should not start with Number")
}
else if (passwordInput.match(/[A-Z]/) == null){
    console.log("Password must contain Capital letter");
}
else if(passwordInput.match(/[a-z]/) == null){
    console.log("Password must contain Small letter");
}

else{
    console.log("Password Saved");
}







// //Question 14
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




// //Question 15






// //Question 16
// var university = "University Of Karachi";
// UniArr = university.split('');
// console.log(UniArr);



// //Question 17
// var input = prompt("Enter the Word");
// console.log("user Input:",input);
// console.log("Last character:",input.charAt(input.length-1));




// //Question 18
// var string = "The quick brown fox jumps over the lazy dog.";
// let lowerStr = string.toLowerCase();
// let count = 0;
// let wordOccur = "the"; 
// let words = lowerStr.split(" ");

// // Loop through each word and count occurrences of "the"
// for (let i = 0; i < words.length; i++) {
//     if (words[i] === wordOccur) {
//         count += 1;
//     }
// }

// console.log("The occurrence of the word 'the' is", count);

