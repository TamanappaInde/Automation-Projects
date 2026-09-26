function findMissingnumber(arr){
    let n = arr.length + 1;

    let expectedSum = (n * (n+1))/2;

    let actualSum = 0;
    for (let num of arr){
        actualSum += num;
    }
    return expectedSum - actualSum;
}
console.log(findMissingnumber([1,2,3,5,6,7,8,9]));