//steps=8
//path="UDDDUDUU"
function countingValleys(steps, path){
    let valley=0
    let level=0
    for(let i=0;i<steps; i++){
        if(path[i]==='U') level++
        else level --

        if(level === 0 && path[i]==='U') valley++
    }
    return valley
}