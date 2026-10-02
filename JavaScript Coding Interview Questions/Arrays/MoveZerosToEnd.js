function moveZeros(arr){
    let result = [];
    let zeroCount = 0;

    for (let num of arr){
        if (num === 0){
            zeroCount++;
        } else {
            result.push(num)
        }
        
    }
    console.log(zeroCount);

    for (let i=0;i<zeroCount;i++){
        result.push(0);
    }
    return result;
}
console.log(moveZeros([1,2,0,3,4,0,5,6,0]));
