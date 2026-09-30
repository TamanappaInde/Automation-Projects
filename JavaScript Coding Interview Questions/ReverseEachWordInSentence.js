function reverseWords(str){
    let words = str.split(" ");
    let result = [];
    for (let word of words){
        let reversed = "";
        for (let i = word.length-1; i>=0;i--){
            reversed += word[i];
        }
        result.push(reversed)
    }
    return result.join(" ");
}
console.log(reverseWords("Tamanappa Inde QA Engineer"))