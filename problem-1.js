


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


const result = calculateTax(34000, 1753);
console.log(result);
