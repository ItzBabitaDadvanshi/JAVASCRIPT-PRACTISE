// primitive data type
    //1. define data type
    //2. undefine data type
    // 3. Null data type
    
    // define 
    // it is also known as define data type 
    // it is use when we declare variable and assign value 
    var a=10;
    console.log(a)

    // undefine
    // it is also known as undefine data type 
    // is use when we declare variable but do not assign any value to them.
    var p;
    console.log(p)

    // Null
    var a=null;
    console.log(a)
    //  example
    var a=110;
    console.log(a)

// operators
//1. Arithmatic Operators
//2. Logical Operators
//3. Relational Operators
//4. Assignement 
//5. Ternary operator

// 1. Arithmatic Operators
var num1=100;
var num2=200;
var res=num1+num2
console.log(`Result of Addition: ${res}`)

// 2. subtract
var res=num1-num2
console.log(`Result of Subtract: ${res}`)

//3. multiply
var res=num1*num2
console.log(`Result of Multiply: ${res}`)

// Divition
var res=num1%num2
console.log(`Result of Division: ${res}`)

// modulus ( it gives the reminder of result)
var res=num1/num2
console.log(`Result of Modulus: ${res}`)

// power 
var n1=2
var n2=5
var res=n1**n2
console.log(`Result of Power: ${res}`)


// logical opeartors(it retrun the value true or false)
// 1.And 2. or 3. not(!)
var n1=2
var n2=5
var res= (n1==2) && (n2==5)
console.log(`Result of And : ${res}`)

// or 
var res= (n1==2) || (n2==5) (n1>=2)||(n2<=5)
console.log(`Result of or : ${res}`)

// not
var res= !(n1==2)
console.log(`Result of not : ${res}`)


// 3. Relational opeartor
console.log("---------------Relational opdeartors------------")
var A=200;
var B=300;
var C=A>B;
console.log("greator:",C)

//  <less
var C=A<B;
console.log("less:",C)
// >=
var C=A>=B;
console.log("greator equal:",C)
// <=
var C=A<=B;
console.log("less then equal:",C)

// ==
var C=A==B;
console.log("equal:",C)




