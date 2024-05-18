// function reverseString(string) {
//     let string1 = string.split("").reverse().join("");
//     console.log(string1)
// }

// reverseString("sreekanth");


// REVERSE A LETTER STRING
function reverseString(str) {
    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");
    console.log(splitString);
  }
  reverseString("hello");
  

  //REVERSE A STRING LIKE forwards and Back words

  function isPalindrome(str) { 

    let reverseItem  = str.split("").reverse().join(""); 
     console.log(reverseItem)
  }
  isPalindrome("Vamsi");


 let result = isPalindrome("sreekanth");
 console.log(result);


 //FACTORIAL NUMBER IN JAVASCRIPT
 let factorialValue =document.getElementById("sree");

  function good(number) { 
    if (number === 0 || number === 1) { 
      return 1; 
    } else { 
      return number * good(number - 1); 
    } 
  } 
  let result2 = good(4);
  console.log(result2);
  
  factorialValue.innerHTML = result2;
//2)

function factorial(value){

if( value === 0 || value === 1 ){
  return 1;
  
} else {
 return value * factorial(value-1);
}
}
let result5 = factorial(5);
console.log(result5)

//JSON Method

let myInfo = {

    fName : "sree ",
    lName: "Peddarapu" ,
    favBikes :  "BMW1200"
}

let result8 = JSON.stringify(myInfo)
console.log(result8);

let allElements = JSON.parse(result8)
console.log(allElements)

// Ternary Method

let number1 =30;
let number2 =40;

let lowValue = number1 < number2;

if(lowValue){
  console.log(`The number1 is less than${number1}`);
}else{
  console.log(`The number2 is not less than ${number2}`);
}

let result12 = number1 > number2 ? `${number1}is greater than` : `${number1} is not greater than`;
console.log(result12);

//FUNCTION DECLARATION
function adding()  {
  let number1 = 6;
  let number2 = 20;
  let multiplication = number1 * number2 ;
  
  console.log(multiplication);
}

adding();

//function Expression;
let multiply = function(){
  let number1 = 6;
  let number2 = 12;
  let multiplication = number1 * number2 ;
  
  console.log(multiplication);
}
multiply();

//  ARROW FUNCTION

let multiplication = () => {
  let number1 = 6;
  let number2 = 5;
  let multiplication = number1 * number2 ;
  
  console.log(multiplication);
}
multiplication();


let elements = [1, 2, 3, 2, 5, 6, 8, 6, 3, 5, 1, 2, 8];

function filterConcept(elements) {
    return elements.filter((item, index) => index === 10);
}

console.log(filterConcept(elements));


// let elements = [1, 2, 3, 2, 5, 6, 10, 15, 8, 6, 11, 15, 3, 5, 1, 2, 8];

// let filtered = elements.filter(element => element %= 2);

// let uniqueFiltered = [...new Set(filtered)];

// console.log(uniqueFiltered); 

// https://fakestoreapi.com/products
// let items = document.getElementById("product");
// let items2 = document.getElementById("sree")

// items.onclick = async () => {
//   try {
//   let items3 = await fetch("https://fakestoreapi.com/products", {method: 'GET',});

//   let result = await items3.json();
//   let result1 = result;
//   console.log(result1);

// } catch (error) {
//   console.log(error);
// }
// }
