//bruth force
function beautiFultriplets(arr,d){
    let count=0
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]-arr[i]==d){
                for(let k=j+1; k<arr.length; k++){
                    if(arr[k]-arr[j]==d) count++
                }
            }
        }
    } return count
}

//optmise with sets
function beautifulTriplets(d, arr) {
    let count=0
     let set=new Set(arr)
     for(let num of arr){
        if(set.has(num+d) && set.has(num+2*d)) count++
     }return count

}