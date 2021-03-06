// username set to empty string
let userName = 'Ismeny';

//ternary expression that decides what to do if the user enters a name or not
userName ? console.log(`Hello ${userName}!`) : console.log ('Hello!');

// question user wants to ask  
let userQuestion = 'Should I work out today?'; 

console.log(`The user asked: ${userQuestion}`);

// generates a random number between 0-7
const randomNumber = Math.floor(Math.random() * 8);

//eightball set to empty string 
let eightBall = '';

// switch statement that checks the random number and returns an answer based on  0-7
switch (randomNumber) {
    case 0:
    eightBall = 'It is certain';
    break;
    case 1:
    eightBall = 'It is decidely so';
    break;
    case 2:
    eightBall= 'Reply hazy try again';
    break;
    case 3: 
    eightBall ='Cannot predict now';
    break;
    case 4:
    eightBall= 'Do not count on it';
    break;
    case 5:
    eightBall= 'My source says no';
    break;
    case 6: 
    eightBall= 'Outlook not so good';
    break;
    case 7: 
    eightBall= 'Signs point to yes';
    break;
}
// magic eight ball response 
console.log('The magic eight ball says: ' + eightBall);

