//prinHelloWorld using recurison
function prinHelloWorld(n){
if(n==0)return
console.log('helloe world')
prinHelloWorld(n-1)
}
// prinHelloWorld(5)


function revNumber(n){
    if(n==0) return
    console.log(n)
    revNumber(n-1)
}
// revNumber(5)


function printNum(n){
    if(n==0) return
    printNum(n-1)
    console.log(n)
}
// printNum(6)


//this sum is the example of back tracking
function sum(n){
    if(n==1) return 1
    return n+sum(n-1)
}
// console.log(sum(5))



//factorial
function factorial(n){
    if(n==1) return n;
    return n*factorial(n-1)
}
// console.log(factorial(6))