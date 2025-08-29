//136. single number 
// 1. not really optmised use map

var singleNumber = function(nums) {
    let map=new Map()
    //sorted in frequency
    for(let i=0; i<=nums.length-1; i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else {
            map.set(nums[i],1)
        }
    }
    for(let [key, value] of map){
        if(value===1){
            return key
        }
    }
};


//2: Approach XOR approch
var singleNumber = function(nums) {
  
    let result
    for(let i=0; i<=nums.length; i++){
       result=result^nums[i]
    }return result
};



