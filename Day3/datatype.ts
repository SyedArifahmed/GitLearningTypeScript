//Premitive data types
//Number
//String
//Boolean
//Null
//Undefined
//Any
//Union Type
//Void



//NON-Premitive data(Objects)

//Array
//Class
//Functions
//Interface
//Touple etc

// =====================================//

// 1.Number


//2.String

let fristname:string = "Syedd";
let secondname:string ="Arif";

// To print some meaning full string

//let greeting:string="Hello" , firstname , lastname;

let greeting = `Hello, ${fristname} ${secondname}`;
console.log(greeting);

//Boolear
//Represent true/false values

//4. NuLL  & UNDEFINED

//Special tupes for absence of value

let emptyvalue:null=null;
let notAssigned:undefined=undefined;

console.log(emptyvalue);
console.log(notAssigned);

//6.ANY TYPE
//Loses TypeScript benefits

let value:any="welcome";
let value1:any=31;
let value2:any=true;
console.log(value);
console.log(value1);
console.log(value2);

//7.UNION Type -  Combine multiple types




