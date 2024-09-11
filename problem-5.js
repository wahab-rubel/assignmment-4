


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

console.log(waitingTime('wahab'));
console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));