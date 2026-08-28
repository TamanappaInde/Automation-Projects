const studentName = "Rahul";
const marks = 34;

function getResults(marks){
    if (marks > 40){
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log(studentName);
console.log(getResults(marks));

