function chocolateFeast(n,c,m){
    let eaten=Math.floor(n/c)
    let wrapper=eaten;
    while(wrapper>=m){
        let chocolate=Math.floor(wrapper/m)
        eaten+=chocolate
        let rem=wrapper%m
        wrapper=chocolate+rem
        
    } 
    return eaten
}
console.log(chocolateFeast(15,3,2))