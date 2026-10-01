function frequentChar(str){

    let count = {};
    let maxChar = "";
    let maxCount = 0;

    for (let char of str){
        count[char] = (count[char] || 0) + 1;
        if (count[char] > maxCount) {
            maxCount = count[char];
            maxChar = char;
        }
    }
    return maxChar;
}
console.log(frequentChar("Tamanappa"));