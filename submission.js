

function calculateTax(income, expenses) {
  if(income >= 0 && expenses >= 0  && income >= expenses){
   const profit = income - expenses;
   const tax = profit * 0.2;
   return tax;
  }
  else{
   return "Invalid Input"
  }
 }


 function sendNotification(email){
  if(email.indexOf('@') === -1) {
    return "Invalid Email"
  }
  const parts = email.split('@');
  const userName = parts[0];
  const domain = parts[1];
  const notification = `${userName} sent you an email from ${domain}`;

  return notification;
}


function checkDigitsInName(name) {
  if(typeof name !== 'string'){
   return "Invalid Input";
  }
 
  for(let i = 0; i < 10; i++) {
   if(name.includes(i.toString())){
     return true;
   }
  }
  return false;
 }


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


function  waitingTime(waitingTimes  , serialNumber) {
  if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
   return "invalid Input"
  }
   if(serialNumber <= waitingTimes.length){
     return 0;
   }
   const averageTime = Math.round(waitingTimes.reduce((sum, time) => sum + time, 0) / waitingTimes.length);
 
   const Peoplewaiting = serialNumber - waitingTimes.length -1;
   const waitingTime = Peoplewaiting * averageTime;
   return waitingTime;
 }

