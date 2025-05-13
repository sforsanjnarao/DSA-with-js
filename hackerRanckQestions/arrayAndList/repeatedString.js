function repeatedString(s,n){
    let count=0
    for(let i=0; i<s.length; i++){
        if(s[i]==='a') count++ 
    }
    let repeat=Math.floor(n/s.length);
    let totalA=repeat*count
    

    let remder=n%s.length;
    for(let i=0;i<remder;i++){
        if(s[i]==='a') totalA++
    }
    console.log(totalA)
    return totalA
}
repeatedString('ab',11)