// DECLARING VARIABLES 
// Declare variables that will store references for 

// <input type="button" id="submit-button">,
let btn = document.getElementById('submit-button');

// <input type="text" id="fullname">,
let fn = document.getElementById('fullname');

// <input type="text" id="email">
let em = document.getElementById('email');

// <textarea id="message"></textarea>
let msg = document.getElementById('message');

// Declare variable that will store regular expression for email
let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// READY TO START CODING
// Start with your function here (come up with the meaningful name)
   function handleClick() {
      // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
      // Declare object that will store the form-data.
      let data = {};
      // Declare array that will store the errors.
      let errors = [];
   
   // FULL NAME
      // Check if fullname is not empty.
      // If so:
      if (fn.value) {
         // Pass the collected value to your object "data".
         data.fullName = fn.value;
      // Otherwise:
      } else {
         // Create a corresponding error-message and add it to your array "errors".
         errors.push('Full name is missing');
      // End your conditional here.
      }  
      
   // EMAIL
      // Check if email is not empty.
      if (em.value) {
         // Check if email is valid.
         // If so:
         if (em.value.match(emailformat)) {
            // Pass the collected value to your object "data".
            data.email = em.value;
         // Otherwise:
         } else {
            // Create a corresponding error-message and add it to your array "errors".
            errors.push('Email is invalid!');
         // End your nested conditional here.
         }
      // Otherwise:
      } else {
         // Create a corresponding error-message and add it to your array "errors".
         errors.push('Email is missing');
      // End your outer conditional here.
      }

   // MESSAGE
      // Check if message is not empty.
      // If so:
      if (msg.value) {
         // Pass the collected value to your object "data".
         data.message = msg.value;
      // Otherwise:   
      } else {
         // Create a corresponding error-message and add it to your array "errors".
         errors.push('Message is missing');
      // End your conditional here.
      }

   // FEEDBACK/ERRORS
      // Check if there is anything in array errors
      // If so:
      if (errors.length === 0){
         // Print it in JavaScript console.
         console.log(data);
         document.getElementById("form").reset();
      // Otherwise:
      } else {
         // Print the data in JavaScript console.
         console.log(errors);
         // Clear text-fields
      // End your conditional here.
      }
   // Close your function here
   }

// Register your form to "click" event.
btn.addEventListener('click', handleClick);