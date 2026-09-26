function removeDuplicate(arr){
    let result = [];

    for (let num of arr){
        if (!result.includes(num)){
            result.push(num);
        }
    }
    return result;
}
console.log(removeDuplicate([2,3,4,5,6,6,4,5,8,9,0]));