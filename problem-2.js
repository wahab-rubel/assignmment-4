


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

console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));





// function sendNotification(email) {
//   if (email.indexOf('@') === -1) {
//     return "Invalid Email";
//   }
//   const parts = email.split('@');
//   const username = parts[0];
//   const domain = parts[1];
//   const notification = `${username} sent you an email from ${domain}`;

//   return notification;
// }

// const email = "zihad@gmail.com";
// const notification = sendNotification(email);
// console.log(notification); 