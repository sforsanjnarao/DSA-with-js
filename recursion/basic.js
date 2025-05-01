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
revNumber(5)