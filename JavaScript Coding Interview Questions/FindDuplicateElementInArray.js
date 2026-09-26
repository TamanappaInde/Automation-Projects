function findDuplicate(arr){
    let duplicates = [];

    for (let i=0;i<arr.length;i++){
        for (j = i+1; j<arr.length;j++){
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])){
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}
console.log(findDuplicate([10,20,30,20,40,10]));

