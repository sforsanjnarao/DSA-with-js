//1. Sales by Match
function SalesByMatch(n, ar) {
    ar.sort((a,b)=>a-b)
    let count=0;
    let i =0;
    while(i<n){
        if(ar[i]==ar[i+1]){
            i=i+2;
            count++
        }
        else{
            i++
        }
    } 
    console.log(count)
    return count
}
SalesByMatch(7,[1,2,5,2,1,3,5])

//2. Simple subArray sum
//3. SubArray division
//4.Migatory Birds