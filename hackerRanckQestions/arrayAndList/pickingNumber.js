//optmize using map
function pickingNumbers(a) {
    let map=new Map()
    for(let i=0; i<a.length; i++){
        map.set(a[i],(map.get(a[i])||0)+1)
    }
    let max=0
    for(let [key, value] of map){
        let curr=value+(map.get(key+1)||0)
        if(curr>max) max=curr
    }return max

}