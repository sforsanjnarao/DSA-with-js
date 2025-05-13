//using Map
function equalizeArray(arr) {
    const map=new Map()
    
    for(let i=0; i<arr.length; i++){
        map.set(arr[i],(map.get(arr[i])||0)+1)
    }
    let max=0
    for(let [key,value] of map){
        if (value > max) max=value
            
    }return arr.length-max

}