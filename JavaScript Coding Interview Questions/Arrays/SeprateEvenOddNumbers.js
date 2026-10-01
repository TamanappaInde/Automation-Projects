function evenOddNumbers(arr){
    let even = [];
    let odd = [];

    for (let num of arr){
        if (num % 2 === 0){
            even.push(num);
        } else {
            odd.push(num);
        }
    }
    return {
        even: even,
        odd: odd
    }
}
console.log(evenOddNumbers([10,4,5,7,8,9,12]));
