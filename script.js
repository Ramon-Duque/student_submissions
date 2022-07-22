
const submissions = [
    {name: "Jane", 
     score: 95, 
     date: "2020-01-24", 
     passed: true},
    {name: "Joe", 
     score: 77, 
     date: "2018-05-14", 
     passed: true},
    {name: "Jack", 
     score: 59, 
     date: "2019-07-05", 
     passed: false},
    {name: "Jill", 
     score: 88, 
     date: "2020-04-22", 
     passed: true}
   
];

const addSubmission = (array, newName, newScore, newDate) => {

    if  (newScore >= 60){
        (passed = true);
    }
    else  {
        (passed = false)
    }

   array.push({name: newName, score: newScore, date: newDate, passed: passed})
   
};

addSubmission(submissions, "Ramon", 59, "2019-4-17")

console.info(submissions);

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 2)



const deleteSubmissionByName = (array, name) => {
    const indexName = array.findIndex(submission => submission.name === name);
    array.splice(indexName, 1);


}

deleteSubmissionByName(submissions, "Ramon");



const editSubmission =  (array, index, score) => {


array[index].score = score;
if  (score >= 60){
    (passed = true);
}
else  {
    (passed = false)
}
array[index].passed = passed;


}

editSubmission (submissions, 0, 50);

const findSubmissionByName =  (array, name) => {
    const findName = array.find(person => person.name === name);
    console.log(findName);

}

findSubmissionByName (submissions,"Jill" ); 


function findLowestScore (array) {
    let lowest = array[0];
    array.forEach((element) =>{
    if (element.score < lowest.score){
        lowest = element;
    }
    });
    return lowest;
}

console.log(findLowestScore(submissions))


function findAverageScore(array){
    let sum = 0;
    for (const element of array){
        sum += element.score;
    }
    return sum / array.length;
}

console.log(findAverageScore(submissions));


const filterPassing = (array) => {
    return array.filter((element) =>{
        return element.passed;
    });
};

console.log(filterPassing(submissions));


const filter90AndAbove = (array) =>{
    return array.filter((element) =>{
        return element.score >= 90;
    });
}

console.log(filter90AndAbove(submissions));