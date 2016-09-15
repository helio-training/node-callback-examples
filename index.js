/*
  Exercise
  ----
  1. Move the variables to inline parameters in the get function
  2. Check if there is an error, and log out the error (if any) using the console.error(err);
  3. Display the HTML to the console
 */
const Wreck = require('wreck');


const uri = 'https://www.google.com';
const options = {};
const callback = (err, response, payload) => {
  console.log(err);
  console.log(response);
  console.log(payload.toString());
};

Wreck.get(uri, options, callback);

setTimeout(() => {

})