
const myDate = new Date();

const weekDays = " Nous sommes en semaine";

const weekEnd = " Nous sommes en week-end";


const currentDay = myDate.getDay();
const currentHour = myDate.getHours();

const isTesting = new Boolean(true);

// Si la condition est false alors cela correspond au variable ChosenDate et ChosenHour
if(isTesting){
// Si la condition est true alors cela correspond au variable currentDay et currentHour
//if(!isTesting){
    let ChosenDate = prompt("Quelle est la date d'aujourd'hui ?");
    let ChosenHour = prompt("Quelle heur est-il ?");

    if(ChosenDate > 0 && ChosenDate < 6){
        console.log(weekDays);
    } else if(ChosenDate == 5 && ChosenHour == 17){
        console.log(weekEnd);
    } else if(ChosenDate == 1 && ChosenHour < 9){
        console.log(weekEnd);
    } else{
        console.log(weekEnd);
    }
    
}else{
    if(currentDay > 0 && currentDay < 6){
        console.log(weekDays);
    } else if(currentDay == 5 && currentHour == 17){
        console.log(weekEnd);
    } else if(currentDay == 1 && currentHour < 9){
        console.log(weekEnd);
    } else{
        console.log(weekEnd);
    }
}




