function greaterThan50(arr){
    let result = [];

    for (let num of arr){
        if (num > 50){
            result.push(num);
        }
    }
    return result;
}
console.log(greaterThan50([24,43,54,55,67,78,47]));