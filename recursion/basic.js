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

//FibonacciWithSimpleLoop
function FibonacciWithSimpleLoop(n){
    let first=0, second=1;
    process.stdout.write(first+" "+second+" ")
    for(let i=1; i<n-1;i++){
        let third=first+second
        first=second
        second=third;
        process.stdout.write(third+" ")
    }
}
// FibonacciWithSimpleLoop(10)

function FibonacciWithRecursion(n,first,second){
    if(n==0) return
    let third=first+second
    process.stdout.write(third+" ")
    FibonacciWithRecursion(n-1,second,third)
}
let n=10;
process.stdout.write(0+" "+1+" ")
FibonacciWithRecursion(n-2,0,1)