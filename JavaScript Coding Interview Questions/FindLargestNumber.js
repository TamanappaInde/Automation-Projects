function largestNumber(arr){
    let largest = arr[0];

    for (num of arr){
        if (num > largest){
            largest = num;
        }
    }
    return largest;
}
console.log(largestNumber([45,55,65,70,80]));

