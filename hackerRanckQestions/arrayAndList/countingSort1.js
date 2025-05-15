function countingSort(arr) {
    let count= new Array(100).fill(0)
    for(let i=0;i<arr.length; i++){
       count[arr[i]]+=1
    } return count

}