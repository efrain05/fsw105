var enemies=["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function whoWins(isThereKryptonite,enemyName)
{
if(isThereKryptonite)
{
    return "Superman beats " + enemyame + ", of course";
}

else{
    return "Depends on how quick Superman can get rid of the Kryptonite." + enemyName + "could possibly win this one.";
}
    }

for (var i=0;i<enemies.length;i++)
{
    var isThereKryptonite 
    if(i % 2 === 0) {
        isThereKryptonite = true;
    } else {
        isThereKryptonite = false;
    }
    console.log(whoWins (isThereKryptonite,enemies[i]));
}

function HowAttractedIsLoisLaneToMe ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return math.floor((math.random()*10)+1);
}

consol.log( HowAttractedIsLoisLaneToMe ()) ;

var clarkKent =true;
var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = math.random();
    if (phoneBoothQuickChange>= 0.5) {
        clarkKent=false;
        superman=true;
        console.log("Now I'm Superman!");}}