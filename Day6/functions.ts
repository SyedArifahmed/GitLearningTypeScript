//Functions

// This are used for reusibility of code

// Named fucntion : A function that is seclared with a name

// Syntax

// function functionname(parameter):  ReturnType{
//     block of code
// }


//Example 1:named funcion with no parameters and no return type

function display() {

    console.log("Welcome to typeScript : -  With parameter")
}

display(); // calling function

// The different b/w function and method is --- method should have object >> should be called only inside class

//Example 2 : named function with parameters and return type

function addNumbers(x: any, y: any): number {

    return x + y;
}

let res: number = addNumbers(2, 3);

console.log(res)

//Example 3 : named function with Rest parameters
//Rest parameters dont restrict the number of values that you can pass to a funtion

// function addanumbers(...nums: number[]): number {

//     let i;
//     let sum: number = 0;

//     for (i = 0; i < nums.length; i++) {

//         sum = sum + nums[i];
//     }
//     console.log("sum of numbers", sum)

//     let arif: number = addanumbers(2, 1, 7, 8);

//     console.log(addanumbers)
// }


// Exmaple 5 : named function with optional parameters

function displayDetails(id: number, name: String, mailID?: String): void {

    console.log("ID", id)
    console.log("Name", name)

    console.log("mail", mailID) // Without mail ID the code works... that is called has optional parameters

}

displayDetails(44, "Arif")


// if we use optional parameters means. its optional to give or not //  if we dont give means. it will through undifined error


// Example 6 : named function with default parameters

function calculatorDiscount(price: number, rate:number=0.50): void {

    let discount:number = price * rate;

    console.log("Discount Amount:", discount)

}

calculatorDiscount(100,70);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







