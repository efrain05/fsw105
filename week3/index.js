var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender:"male"
    },
    {
       name: "Madeline",
       age:80,
       gender:"female"
    },
    {
      name: "Cheryl",
      age:22,
      gender: "female"
    },
    {
        name: "Sam",
        age:  30,
        gender:"male"

    },
    {
        name:"Suzy",
        age:4,
        gender: "female"
    }

]


    for(var i = 0; i <  peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
           if( peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
               console.log("old enough")
           }else if ( peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
               console.log("not old enough")
           }
    }




    for(i = 0; i <  peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max")
        }else if ( peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max")
        }
 }



    for(i = 0; i <  peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if( peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HIM in.")
        }else if ( peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +  " is old enough. SHE'S good to see Mad Max Fury Road.")
        }
 }



// 0-100 loop

for(var i=0; i < 101; i++){
if([i] % 2 === 0 ){
 console.log([i] + " even")
}else{
    if([i] % 3 === 0){
        console.log([i] + " odd")
    }
}
}

// Extra Credit

var onAndOff = [
    [2,5,435,4,3],
    [1,1,1,1,3],
    [9,3,4,3]
]

for(var i = 0; i < onAndOff.length; i++){
    if([i] % 3 === 0){
        console.log("on")
    }else{
        if([i] % 2 === 0 ) {
            console.log("off")
        }
    }
}