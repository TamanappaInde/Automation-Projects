function removeSpaces(str){
    let result = "";

    for (let char of str){
        if (char !== " "){
            result += char;
        }
    }
    return result;
}
console.log(removeSpaces("Tamanappa Inde Sastur"));