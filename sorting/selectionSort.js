function selectionSort(arr){
    let n=arr.length;
    for(let i=0; i<n-1;i++){
        let minIndex=i
        for(let j=i+1; j<n; j++){
            if(arr[minIndex]>arr[j]){
                minIndex=j
            } 
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
    }
    console.log(arr)
}
selectionSort([4,2,9,20,1,19])