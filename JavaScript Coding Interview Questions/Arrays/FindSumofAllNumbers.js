function sumofNumbers(arr){
    let sum = 0;

    for (num of arr){
        sum += num;
    }
    return sum;
}
console.log(sumofNumbers([1,2,3,4,5,6,7,8,9,10]));
