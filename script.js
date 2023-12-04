
const proverbs = {
  city: ['Berlin', 'München', 'Frankfurt', 'Köln', 'Hamborg','Düseldorf','Stuttgart'],
  job: ['Arzt/in', 'Ingenieur/in', 'Informatiker/in', 'Manager/in', 'Lehrer/in'],
  animal: ['Kaze', 'Löwe', 'Hund'],
  pro: ['"Altes Brot ist nicht hart, kein Brot, das ist hart"',
         '"Aus den Augen, aus dem Sinn."',
          '"Aus Schaden wird man klug."']
};



function genrandom(num){
  return Math.ceil(Math.random()*num)
}





function generateMessage(){
let personalProverb = ['Du musst in '];
  for (x in proverbs){
    let y= genrandom(proverbs[x].length-1);
    switch(x){
      case ('city'): 
        personalProverb.push(`${proverbs[x][y]} leben,`);
        break;
        case ('job'): 
        personalProverb.push(`als ${proverbs[x][y]} arbeiten,`);
        break;
        case ('animal'): 
        personalProverb.push(`einen ${proverbs[x][y]} haben,`);
        break;
        case ('pro'): 
        personalProverb.push(`und sich an disem Sprichwort erinnern: ${proverbs[x][y]}`);
        break;
        default:
          personalProverb.push('.')
    }

  
  }
  console.log(personalProverb.join(" "));
}

generateMessage()





