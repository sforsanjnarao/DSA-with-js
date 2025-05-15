//Find the Median – Middle of the List

//Description:
//You’re given an unsorted list of integers. 
//Your task is to sort the list and return the middle element (median). 
//The input always has an odd number of elements, so the median is the element right in the center after sorting.
function findMedian(arr) {
    arr.sort((a,b)=>a-b)
    let n=Math.floor(arr.length/2)
    return arr[n]

}