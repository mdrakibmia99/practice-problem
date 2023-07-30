const setString="Md Rakib Mia";
// normal function 
function reverseString(str){
    if(str.length === 0) return "";
    //  recursion use for reverse 
    return  str[str.length-1] + reverseString(str.slice(0,str.length-1));
}


 
const reverseResult=reverseString(setString);
// before reverse 
console.log("Before Reverse=",setString);
console.log("After  Reverse=",reverseResult);
