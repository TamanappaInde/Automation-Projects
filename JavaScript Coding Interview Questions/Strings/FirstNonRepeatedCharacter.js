function firstNonRepeatedChar(str){
    let count = {};
    for (let char of str){
        count[char] = (count[char] || 0) +1;

    }

    for (char of str){
        if (count[char] === 1){
            return char;
        }
    }
    return null;
}
console.log(firstNonRepeatedChar("Tamanappa"))