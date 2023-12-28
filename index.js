function scuberGreetingForFeet(minNumber){
 
  if (minNumber <= 400) {
    return 'This one is on me!';
  }else if (minNumber <= 2000) {
  return 'That will be twenty bucks.';
  }else if ((minNumber >= 2000) && (minNumber <= 2500)) {
    return 'I will gladly take your thirty bucks.';
  }else {
    return 'No can do.'
  }
}

function ternaryCheckCity(destination){
  if (destination == 'NYC') {
    return "Ok, sounds good."
  } else{
    return "No go."
  }
}

function switchOnCharmFromTip(Tip){
  switch (Tip) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you."
    break;
    default:
      return "Bye."
      break;
  }
  
}