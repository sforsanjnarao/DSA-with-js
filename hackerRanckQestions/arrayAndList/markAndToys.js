// Mark and Toys – Maximize the Fun

// Description:
// Mark has a fixed amount of money and a list of toy prices. 
// Your task is to help him buy the maximum number of toys without exceeding his budget. 
// Return the maximum count of toys he can purchase.
function maximumToys(prices, k) {
    prices.sort((a,b)=>a-b)
    let count=0; 
    let total=0
    for(let i=0; i<prices.length; i++){
        if(total+prices[i]<=k){
            total+=prices[i]
            count++
        }else{
            break;
        }
    }return count
}
