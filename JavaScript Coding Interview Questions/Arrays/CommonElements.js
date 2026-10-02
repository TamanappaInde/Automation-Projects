function commonElements(arr1, arr2){
    let result = [];

    for (let num of arr1){
        if (arr2.includes(num) &&  !result.includes(num)){
            result.push(num);
        }
    }
    return result;
}
console.log(commonElements([1,2,3,4,5], [2,3,4,7,8,9]));