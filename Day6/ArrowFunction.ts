

// 3. Arrow Functions (Lambda Functions)
// Arrow functions provide a shorter syntax for writing functions.
// Syntax
// let functionName = (parameters): returnType => expression;
// Example
// let square = (num: number): number => num * num;
// console.log(square(6)); // Output: 36
// Key Points
// • Uses => (fat arrow) instead of function keyword.
// • Single-line functions don’t need {} or return keyword.
// • Multi-line functions require {} and return.
// Multi-line Example
// let greet = (name: string): string => {
//  return `Hello, ${name}!`;
// };
//  console.log(greet("Pavan")); // Output: Hello, Pavan!

/////////////////////////////////

//Arrow funcion

/* Lambda refers to anonymous functin in programming

lambda functions are a concise mechanism to represent anonymous functins.

There are 3 parts of lambda function.

1.parameters  - - A function may optionally have parmeters

2.The fat arrow notation/lambda notation ( =>) -  it is also called as the "goes to operator"
3.Statements - represent the functins instruction set

syntax :

let vaiable = (parameters) =>
{
// block of code
}
variable();

*/


// Exmaple 1 : -  Arrow function with no parameters and No return type

let greet = ():void =>
{

    console.log("This is Arrow functins")
}

greet();


// Example 2 : -  Arrow function with parameter with return value

let addnumbers = (a:number , b:number):number =>
{

    return a+b;
}
console.log(addnumbers(10,30))

////////////

let multiD  = (a:number , b:number):number => a/b;
let multiM  = (a:number , b:number):number => a*b;

console.log(multiD(10,2))
console.log(multiM(10,2))

////////////////////////////////////////////////////

// Arrow optional functinos


let admin =(id:number , name1:String , emailid:string):void =>{


    console.log(id)
    console.log(name1)
    console.log(emailid)
}

console.log(admin(20 , "syedarif" , "syedarifahmed@mail.com" ))