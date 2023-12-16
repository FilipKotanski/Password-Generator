// Array of special characters to be included in password

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

function getPasswordOptions() {

  // Prompt for password length

  var length = prompt("Enter the length of the password (between 8 and 128 characters):");

  

  // Validate password for containing only digits and for length

  if(!/^\d+$/.test(length) || length < 8 || length > 128){

  alert("Please enter a valid password length between 8 and 128 characters.");
  
  return false;

  }
     
  // Prompt for character types

  var hasLowercase = confirm("Include lowercase characters?");

  var hasUppercase = confirm("Include uppercase characters?");

  var hasNumeric = confirm("Include numeric characters?");
  
  var hasSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected

  if(!(hasLowercase || hasUppercase || hasNumeric || hasSpecial)){

      alert("Please select at least one character type.");

      return false;

  }

   return {

            passwordlength: length,
            hasLowercase: hasLowercase,
            hasUppercase: hasUppercase,
            hasNumeric: hasNumeric,
            hasSpecial: hasSpecial,

   };
}

// Function for getting a random element from an array

function getRandom(selectedChars) {

    var randomIndex = Math.floor(Math.random() * selectedChars.length);

    return selectedChars[randomIndex];

}

// Function to generate password with user input

function generatePassword(selectedOptions) {

    // Combine selected character sets, not password generation!!!

    var selectedChars = [];

    if (selectedOptions.hasLowercase){

      selectedChars = selectedChars.concat(lowerCasedCharacters);

    } 

    if (selectedOptions.hasUppercase){

      selectedChars = selectedChars.concat(upperCasedCharacters);

    }

    if (selectedOptions.hasNumeric){

      selectedChars = selectedChars.concat(numericCharacters);

    }

    if (selectedOptions.hasSpecial){

      selectedChars = selectedChars.concat(specialCharacters);

    } 

    var password = "";

            for (var i = 0; i <selectedOptions.passwordlength; i++){

                password += getRandom(selectedChars);

            }

    return password;

}

// Get references to the #generate element

var generateBtn = document.querySelector('#generate');

// Write password to the #password input

function writePassword() {
  
  
  selectedOptions = getPasswordOptions();

  if(selectedOptions){

    var password = generatePassword(selectedOptions);
    var passwordText = document.querySelector('#password');

    passwordText.value = password;

  }

}

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);

