//with sorting
function miniMaxSum(arr) {
    arr.sort((a,b)=>a-b)
    let sumMin =0, sumMax=0
     for(let i=0; i<4; i++){
        sumMin+=arr[i]
        sumMax+=arr[arr.length-1-i]
     }
      
     console.log( sumMin, sumMax)

}

//without sorting
function miniMaxSum(arr) {
    let totalSum=0
     for(let i=0; i<arr.length; i++){
         totalSum+=arr[i]
     }
     let min=Math.min(...arr)
     let max=Math.max(...arr)
      
     console.log(totalSum-max , totalSum-min)

}