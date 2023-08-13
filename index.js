


/*gives customers a free sample if the ride is less than or equal to 400 feet:
AssertionError: expected undefined to equal 'This one is on me!'*/


function scuberGreetingForFeet(distance){
  
if (distance <= 400) {
  return("This one is on me!");

} else if (distance <= 2000){
  return("That will be twenty bucks.");

} else if (distance > 2000 && distance <= 2500) {
  return("I will gladly take your thirty bucks.");

} else {
  return ("No can do.");

}

}

function ternaryCheckCity(city){
 
const cityCheck = city === "NYC" ? "Ok, sounds good." : "No go.";

return(cityCheck);
    
}


/*const Tip = 'generousTip';

let Charm1, Charm2;

function switchOnCharm){FromTip(

  switch (Tip) {
      case 'generousTip':
        //(generousTip === true);
          Charm1 = "Thank you so much.";
          return(Charm1);
          break;
      case 'notSoGenerous':
        //(notSoGenerousTip === true);
          Charm2 = "Thank you.";
          return(Charm2);
          break;
      default:
          console.log("Bye.");
          break;*/


     
     function switchOnCharmFromTip(tip){
          switch (tip) {
            case "generous":
              return "Thank you so much.";
              
            case "not as generous":
              return "Thank you.";
            
            default:
              return "Bye.";
            


   }

  }