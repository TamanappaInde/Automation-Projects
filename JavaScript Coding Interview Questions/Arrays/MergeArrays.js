function mergeArray(arr1, arr2){
    let result = [];

    for (let num of arr1){
        if (!result.includes(num)){
            result.push(num);
        }
    }
    for (let num of arr2){
        if (!result.includes(num)){
            result.push(num);
        }
    }
    return result;
}
console.log(mergeArray([1,2,3,4],[3,4,5,6]));