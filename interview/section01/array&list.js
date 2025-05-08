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
// SalesByMatch(7,[1,2,5,2,1,3,5])

//2. Simple subArray sum
function simpleArraySum(ar) {
    let sum=0;
    for(let i=0; i<ar.length; i++ ){
        sum=sum+ar[i]
    } console.log(sum)
    return sum
}
// simpleArraySum([1,2,5,2,1,3,5])



//3. SubArray division
function subArrayBrute(s, d, m) {
    if(s.length<m) return 0
    let count=0

     for(let i=0 ;i<s.length-m+1; i++){
        let sum=0;
        for(let j=0; j<m; j++){
            sum+=s[i+j]
        }
        if(sum===d){
            count++
        }
     }
     console.log(count)
    return count;
}
subArrayBrute([1,2,5,2,1,3,5],3,2)
//4.Migatory Birds



//minmum sum
function minimumDistances(a) {
    let map=new Map;
    let minDis=Infinity
    for (let i=0; i<a.length; i++){
           if(map.has(a[i])){ //we are checking if that value exist 
            let prevIndex=map.get(a[i]) //this get the key of that prevIndex
            const distance=i-prevIndex
            if(minDis>distance) minDis=distance
           }    
        map.set(a[i],i)
    }
    if(minDis==Infinity) return -1
    else return minDis
}

//counting Sort 1
function countingSort(arr) {
    let count= new Array(100).fill(0)
    for(let i=0;i<arr.length; i++){
       count[arr[i]]+=1
    } return count

}

//counting Sort 2
function countingSort(arr) {
    let count=new Array(100).fill(0)
    for(let i=0; i<arr.length; i++){
        count[arr[i]]+=1
    }
    let array=[]
    for(let i=0; i<count.length; i++){
        while(count[i]>0){
            array.push(i)
            count[i]-=1
        }
    }return  array   
}

//Lonely Integer
function lonelyinteger(a) {
    let map=new Map()
    for(let i=0; i<a.length; i++){
        map.set(a[i],(map.get(a[i])||0)+1)
    }
    for(let i=0; i<a.length; i++){
        if(map.get(a[i])==1){
            return a[i]
        }
    }
}