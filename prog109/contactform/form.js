function validateForm(){
  var validUsername = false;
  var validUserPassword = false;
  var validFirstName = false;
  var validLastName = false;
  var validPhone = false;
  var validAddress = false;
  var validCity = false;
  var validZipcode = false;
  var validEmail = false;
  
  var email = document.getElementById("email").value;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  var country = document.getElementById("country").value;
  
  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
  
  var errorMessages ="";  // All the error messages are going to stay in this variable
  /*********** VALIDATES USERNAME ******** */
  //Required field
  //This syntax is using name-of-form.name-of-field.value
  // You can also use document.getElementById("id-of-field").value

  /*********** VALIDATES USERNAME ******** */
  if (myContact.username.value.length > 12 ||
      myContact.username.value===null ||
      myContact.username.value==="")
    errorMessages += "<p>The username is required and must be less than 12 characters.</p>";
  else 
   validUsername = true; 
  
  
  /*********** VALIDATES PASSWORD ******** */
  if (myContact.password.value===null ||
      myContact.password.value=== "" ||
      myContact.password.value.length > 7)
    errorMessages += "<p>The password is required and must be less than 7 characters.</p>";
  else
    validUserPassword = true; 
  
  
  /*********** VALIDATES FIRSTNAME ******** */
  if (myContact.lastname.value===null ||
      myContact.lastname.value=== "" ||
      myContact.lastname.value.length > 20 ||
      !myContact.lastname.value.match(letters))
    errorMessages += "<p>The firstname is required and must be less than 20 characters. It cannot contain any numbers.</p>";
  else
    validFirstName = true; 
  
  
  /*********** VALIDATES LASTNAME ******** */
  if (myContact.firstname.value===null ||
      myContact.firstname.value=== "" ||
      myContact.firstname.value.length > 50 ||
      !myContact.firstname.value.match(letters))
    errorMessages += "<p>The lastname is required and must be less than 50 characters. It cannot contain any numbers.</p>";
  else
    validLastName = true; 
  
  
  /*********** VALIDATES EMAIL ******** */
  if (myContact.email.value===null ||
      myContact.email.value=== "" || 
      atpos< 1 || 
      dotpos<atpos+2 || 
      dotpos+2>=userEmail.length)
    errorMessages += "<p>Invalid email.</p>";
    else
      validEmail = true;
  
  
  /*********** VALIDATES PHONE ******** */
  if (myContact.phone.value===null ||
      myContact.phone.value=== "" ||
      myContact.phone.value.length > 15 ||
      !myContact.phone.value.match(numbers))
    errorMessages += "<p>The phone number is required and must be less than 15 characters. It cannot contain any letters.</p>";
  else
    validPhone = true; 
  
  
  /*********** VALIDATES ADDRESS ******** */
  if (myContact.address.value===null ||
      myContact.address.value==="")
    errorMessages += "<p>The address is required.</p>";
  else 
    validAddress = true; 
  
  
  /*********** VALIDATES CITY ******** */
  if (myContact.city.value===null ||
      myContact.city.value==="")
    errorMessages += "<p>The city is required.</p>";
  else 
    validCity = true; 
  
  
  /*********** VALIDATES ZIP CODE ******** */
  if (country === "USA")
    errorMessages += "<p>The zipcode is required.</p>";
  else 
    validZipcode = true; 
  
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
  // Make sure you return all the boolean variables that are checking each field
  return (validUsername && validUserPassword && validFirstName && validLastName && validEmail && validPhone && validAddress && validCity && validZipcode) ;
}
