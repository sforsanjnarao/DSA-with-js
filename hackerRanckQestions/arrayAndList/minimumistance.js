//repeat
//with map in one loop
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