// Closest Numbers – Find the Nearest Pairs

// Description:
// Given a list of integers, 
//find all pairs of numbers whose absolute difference is the smallest among all possible pairs. 
//Return these pairs in ascending order as a flat array.

function closestNumbers(arr) {
    arr.sort((a,b)=>a-b)
    let minDiff=Infinity
    let result=[]
    for(let i=0; i<arr.length; i++){
        let difference=Math.abs(arr[i]-arr[i+1])
        if(difference<minDiff){
        minDiff= difference
        result=[arr[i],arr[i+1]]
        } else if(difference==minDiff){
            result.push(arr[i],arr[i+1])
        }
    }return result
}