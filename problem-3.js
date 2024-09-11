

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
console.log(checkDigitsInName('Raj123'))
console.log(checkDigitsInName('n9ayeem'))
console.log(checkDigitsInName('e1mu3'))
console.log(checkDigitsInName('Suman'))
console.log(checkDigitsInName('Name2024'))
console.log(checkDigitsInName('!@#'))
const result = checkDigitsInName(["Raj"]);
console.log(result);
