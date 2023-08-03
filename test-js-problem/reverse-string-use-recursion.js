const setString="Md Rakib Mia";
// normal function 
function reverseString(str){
    if(str.length === 0) return "";
    //  recursion use for reverse 
    return  str[str.length-1] + reverseString(str.slice(0,str.length-1));
}

// arrow function
const reverseResult2=(str)=>{
    if(str.length === 0) return "";
    //  recursion use for reverse 
    return  str[str.length-1] + reverseString(str.slice(0,str.length-1));
} 
 
const reverseResult=reverseString(setString);
// before reverse 
console.log("Before Reverse=",setString);
// after reverse 
console.log("After  Reverse=",reverseResult);
// use arrow function 
console.log("use arrow function=",reverseResult2(setString));