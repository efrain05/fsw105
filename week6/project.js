

var readlineSync = require('readline-sync');


//Asking player for their name
const playerName = readlineSync.question('Can you please provide us with your name?');

const introWelcomeMessage = `Welcome ${playerName} to Escape Room Game Simulation!`;
console.log(introWelcomeMessage)

let isAlive = true;
let foundKey = false;

while(isAlive == true)
{
 const menuID = readlineSync.keyIn('Press 1 to put ahnd in hole \n Press 2 to find the key \n Press 3 to open the door', {limit: `$<1-3>`});
 if(menuID == 1){
 console.log(`Oh no, Sorry ${playerName},the game is over!`);
 isAlive = false;
}
else if(menuID == 2 && foundKey == true){
    console.log(`Hey ${playerName}, it appears you already have found the key. please choose option-3.`);
   }
   else if (menuID == 2 && foundKey == false ){
      console.log(`Hey ${playerName}, you have found the key! Please go to option-3.`);
      foundKey = true;
   }
   else if (menuID == 3 && foundKey == false){
       console.log(`Hey ${playerName}, you have not found the key yet! Please go to option-2.`);
   }
   else if (menuID == 3 && foundKey == true){
    console.log(`Hey ${playerName}, you have found the key and opened the door succesfully! Game Over!`);
    isAlive = false;
}
}