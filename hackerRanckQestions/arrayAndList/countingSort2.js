
//Counting Sort 2 – Sorted Frequencies

//Description:
//You’re given a list of integers in the range 0 to 99. Use counting sort to sort the list in ascending order, 
//but instead of printing frequency counts (like in Counting Sort 1), output the full sorted list.
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