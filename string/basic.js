//print each character of a string in a new line
function printString(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}
// printString("hello");


//print in reverse order  in a new line
function revPrintString(str) {
    for (let i=str.length-1; i>=0; i--){
        console.log(str.charAt(i))
    }
}
// revPrintString("hello");


//print in reverse order  in a same line
function revPrintStringInSameLine(str){
    let result=""
    for(let i=str.length-1; i>=0; i--){
        result+=str.charAt(i)
    }
    console.log(result)
}
revPrintStringInSameLine("hello")

function isPalindrome(str){
    let rev=''
    for(let i=str.length-1; i>=0; i--){
        rev+=str.charAt(i)
    }
    if(rev==str) return console.log("it's Palindrome")
        else return console.log("it's not a palindrome")
}

isPalindrome('sanjana')


function isPalindromeWithTwoPointer(){
    
}