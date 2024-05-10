"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Rebecca Mehling
      Date: 004/30/2023   

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 

      e.preventDefault(); //prevent the browser from responding to the submit event. 

   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   let regex1 = /[A-Z]/; //Create the regex1 variable containing a regular expression literal with a character class that matches any uppercase letter A through Z.
   let regex2 = /\d/; //Create the regex2 variable containing a regular expression literal that matches any single digit.
   let regex3 = /[!$#%]/; //Create the regex3 variable containing a regular expression with a character class containing the symbols !$#%.

   if (pwd.length < 8) {
      feedback.textContent = "Your password must be at least 8 characters" //If the length of pwd is less than 8, set the text content of the feedback object to “Your password must be at least 8 characters.”
   } else if (!regex1.test(pwd)) {
      feedback.textContent = "Your password must include an uppercase letter" //Else if the test() method with the regex1 regular expression applied to the pwd variable returns a false value, set the text content of the feedback object to "Your password must include an uppercase letter."
   } else if (!regex2.test(pwd)) {
      feedback.textContent = "Your password must include a number" // Else if the test() method with the regex2 regular expression applied to pwd returns false, set the text of feedback to "Your password must include a number."
   } else if (!regex3.test(pwd)) {
      feedback.textContent = "Your password must include one of the following !$#%" //Else if the test() method with the regex3 regular expression applied to pwd returns false, set the text of feedback to "Your password must include one of the following: !$#%".
   } else {
      signupForm.submit(); //Otherwise, apply the submit() method to the signupForm object to submit the form for processing.
   }  
}
);