const person = require('./person');

// person.speak('blah');

person.speak((err, message) => {
  // If there is an error
  if(err) {
    // Do something
    throw err;
  }


  console.log(message);
});









/*
  Exercise
  ----
  1. Move the variables to inline parameters in the get function
  2. Check if there is an error, and log out the error (if any) using the console.error(err);
  3. Display the HTML to the console
 */
// const Wreck = require('wreck');
//
// // const uri = 'https://www.google.com';
// // const options = {};
// // const callback = (err, response, payload) => {
// //   console.log(err);
// //   console.log(response);
// //   console.log(Buffer.from(payload).toString());
// // };
//
// Wreck.get('https://www.google.com', (err, response, payload) => {
//   if(err) {
//     console.error(err);
//     throw err;
//   }
//
//   const html = Buffer.from(payload).toString();
//   console.log(html);
// });