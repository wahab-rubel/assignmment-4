const person1 = {
  name: 'Rajib',
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
};

const person2 = {
  name: 'Rakib',
  testScore: 45,
  schoolGrade: 25,
  isFFamily: false,
};

const studentData = { 
  name: "Rajib", 
  testScore: 45, 
  schoolGrade: 25, 
  isFFamily: false 
};



function calculateFinalScore(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return "Invalid Input";
  }

  const { testScore, schoolGrade, isFFamily } = obj;
  let finalScore = testScore + schoolGrade;
  if (isFFamily) {
    finalScore += 20;
  }
 
  return finalScore >= 80;
}

console.log(calculateFinalScore(person1));
console.log(calculateFinalScore(person2));
console.log(calculateFinalScore('hello'));

const result = calculateFinalScore(studentData);
console.log(result);


