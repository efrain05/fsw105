const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name?:');

readlineSync.question('Hello ' + name + ' Welcome to the Jungle where only the strong survive! Press enter to begin') 

const badGuys = ['Lion ', 'Gorillas ','Anaconda ']
const treasure = ['Water Pack ', 'Coin ', 'Jet Pack '];
var prize = ['You have won a gold medal!'];
let userHealth = 50;
const options = ['Walk', 'Exit', 'Print'];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random()* (5 - 3 + 4) + 6);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 20;
    const badGuysPower = Math.floor(Math.random() * (5 - 1 + 4) + 4)

    const index = readlineSync.keyInSelect(options, "What would you like to do next?");

    if(options[index] == "Exit"){
        return userHealth = 0;
    }else if (options[index] == "Print"){
        console.log(name + userHealth + pickUp);
    }else if (options[index] === "Walk"){
        let key =Math.random();
        if (key <= .3){
            console.log("Walking...");
        }else if ( key >= .3) {
            console.log(badGuys + "showed up.");
            while(badGuysHealth > 0 && userHealth > 0){
                const user = readlineSync.question('What do you want to do? enter "r" to run or "a" to attack:');

                switch (user){
                    case 'r': 
                    const run = Math.random();
                    if(run < .5){
                        console.log('Before you can run away ' + badGuy + 'attacks you with: ' +  badGuysPower);
                
                    }else{
                        console.log('You Ran Away!!');
                        break;
                    } 
                    case 'a':
                        badGuysHealth -= attackPower;
                        console.log(' You attacked ' + badGuy + 'with: ' + attackPower + ' attack power ');
                        userHealth -= badGuysPower;
                        console.log(' Enemy just attack you with: ' + badGuysPower + ' attack power ');

                        if(badGuysHealth <= 0){
                            console.log('you defeated ' + badGuy + '\n' + badGuy + ' left: ' + pickUp);
                            let loot = Math.random();
                            if (loot <= .3){
                                prize.push(pickUp);
                            }

                            
                        }else if(userHealth <= 0){
                            console.log(badGuy + 'Well better luck next time. The Jungle had defeated you ');
                        }
                }
                }
            }
        }
    }

    while(userHealth > 0){
        userRestore = function(){
            userActive =true;
            userHealth =50;
        };
        userRestore();
        game();
    }