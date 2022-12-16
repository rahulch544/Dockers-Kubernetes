JS:Regarding Hoisting in javascript:Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top.

1. what is o/p of following program.var var_name;var_name =3;
console.log(var_name);  o/p: 3
2.what is o/p of following program.var_name =3;
console.log(var_name);  o/p: 3 { it is because of hoisting even though variable declaration done at bottom they will move up during run time)


2. —typeof of primitive types :

typeof "John Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined"
typeof null // Returns "object" (kind of a bug in JavaScript).  —question
3.  Difference between “ == “ and “ === “ operators.
Both are comparison operators. The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types.


4.
1.var x = 3;
var y = "3";
var z=x + y;  (converts x into string type) ( this process is called String coercion)

console.log(z); // o/p = “33”

2.

var x = 3;
var y = “4”;
var z=x - y;  // 3- parseInt(“4”)
console.log(z); // o/p = -1;

5.Using OR operator if both values on either side  truth only then which value is returned ? (Ans” second)OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.var x = 220;
var y = "Hello";
var z = undefined;
        
console.log(x | | y )   // Returns 220 since the first value is truthy
        
console.log(x | | z)   // Returns 220 since the first value is truthy
        
console.log(x && y)   // Returns "Hello" since both the values are truthy

6. Is javascript a statically typed or a dynamically typed language?
JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to statically typed language, where the type of a variable is checked during compile-time.because of this reason variables in JS are not associated with any type. A variable can hold the value of any data type.Eg: var a = 23;
var a = "Hello World!";
 is always valid

7.Explain Higher Order Functions in javascript.
Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
Eg:function higherOrder2() {
  return function() {
    return "Do something";
  }
}
        
var x = higherOrder2();
x()   // Returns "Do something"


8. How to call function of other object?Ans: using call method. or apply methodcall method: This method invokes a method (function) by specifying the owner object,call() method allows an object to use the method (function) of another object. Apply method same as call method but it takes arguments in array format.eg:var person = {
  age: 23,
  getAge: function(){
    return this.age;
  }
}
        
var person2 = {age:  54};
person.getAge.call(person2);
        
// Returns 54  

8. Explain Closures in JavaScript.Closures is an ability of a function to remember the variables and functions that are declared in its outer scope.
9. What are callbacks?
A callback is a function that will be executed after another function gets executed.eg:
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

10. What are arrow functions?They provide us with a new and shorter syntax for declaring functions.

Arrow functions can only be used as a function expression.

Eg:// Traditional Function Expression
var add = function(a,b){
  return a + b;
}

// Arrow Function Expression
var arrowAdd = (a,b) => a + b; or var arrowAdd = (a,b) => {return a + b};
The biggest difference between the traditional function expression and the arrow function, is the handling of the this keyword.

By general definition, the this keyword always refers to the object that is calling the function.The this keyword inside an arrow function, does not refer to the object calling it. It rather inherits its value from the parent scope which is the window object in this case.
eg:
var obj1 = {
  valueOfThis: function(){
    return this;
  }
}
var obj2 = {
  valueOfThis: ()=>{
    return this;
  }
}

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object

11.Key differences between rest parameter and spread operator?
* Rest parameter is used to take a variable number of arguments and turns into an array while the spread operator takes an array or an object and spreads it
* Rest parameter is used in function declaration whereas the spread operator is used in function calls.



12.coding poroblemq1.

function func2(){
  for(var i = 0; i < 3; i++){
    setTimeout(()=> console.log(i),2000);
}

}

func2();
 o/p: 3 3 3Variable i is declared as var, so no block scope, and console function is called after 2 seconds by which time i will be 2;
q2.
(function(){
  setTimeout(()=> console.log(1),2000);
  console.log(2);
  setTimeout(()=> console.log(3),0);
  console.log(4);
})();

o/p;: 2,4,3,1Even though the second timeout function has a waiting time of zero seconds, the javascript engine always evaluates the setTimeout function using the Web API and therefore, the complete function executes before the setTimeout function can execute.


