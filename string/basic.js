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
// revPrintStringInSameLine("hello")

function isPalindrome(str){
    let rev=''
    for(let i=str.length-1; i>=0; i--){
        rev+=str.charAt(i)
    }
    if(rev==str) return console.log("it's Palindrome")
        else return console.log("it's not a palindrome")
}

// isPalindrome('sanjana')


function isPalindromeWithTwoPointer(str){
    let i=0, j=str.length-1
    let isPalindrome=true;
    while(i<j){
        if(str.charAt(i)!=str.charAt(j)){
            isPalindrome=false;
            break;
        }
        i++;
        j--;

    }
    if(isPalindrome) console.log("palindrome")
        else return console.log("not a palindrome")

}




//palindromWithPrompt
function palindromWithPrompt(){
    let prompt=require('Prompt-sync')()
    let str=prompt("enter a string")
    let isPalindrome=true;

}

//toggel 
function toggel(str){
    console.log(str)
    let toggel=""
    for(let i=0; i<str.length; i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            toggel=toggel+String.fromCharCode(str.charCodeAt(i)+32)
        }
        else if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
            toggel=toggel+String.fromCharCode(str.charCodeAt(i)-32)
        }else{
            console.log('only conevr the english value')
        }
    }
    console.log(toggel)
}
// toggel('gfaGGGgbg')

//captialFirstAndLast
function captialFirstAndLast(str){
    for(let i=0; i<str.length; i++){

    }
}



//checkTwoStringAnagramOrNot
function checkTwoStringAnagramOrNot(str1,str2){
    if (str1!==str2) return console.log('Not anagram')
    
}


//frequencyofEachElement
function frequencyofEachElement(str){
    let arr=new Array(128).fill(0)
    
    for(let i=0; i<str.length; i++){
        let index=str.charCodeAt(i)
        arr[index]+=1
    }

    for(let i=0; i<arr.length;i++){
        if(arr[i]>0){
            console.log(`${String.fromCharCode(i)}->${arr[i]}`)
        }
    }
}
// frequencyofEachElement("sanjaAna")