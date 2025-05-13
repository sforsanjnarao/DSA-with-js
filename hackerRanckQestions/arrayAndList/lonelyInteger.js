function lonelyinteger(a){
    let map=new Map()
    for(let i=0; i<a.length; i++){
        map.set(a[i],(map.get(a[i])||0)+1)
    }
    for(let i=0; i<a.length; i++){
        if(map.has(a[i])==1) return a[i]
    }
}