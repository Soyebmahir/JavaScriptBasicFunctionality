function picnicBudget(tourist){

    

    let totalcost = 0;
    let firstHundredTourist=0;
    let secondHundredTourist=0;
    let moreThanTwoHundred=0;
    let remaingHead =0;

    
    if(typeof tourist !="number"){
        return 'Please Enter valid value. '
    }

   else if(tourist <= 100){

          totalcost =tourist * 5000;
         return totalcost ;
    }
    else if ( tourist > 100 && tourist <=200){

         firstHundredTourist = 100 * 5000;
         secondHundredTourist = (tourist - 100)* 4000;
            totalcost = firstHundredTourist+secondHundredTourist;
            return totalcost;
    }
    else if(tourist> 200 ){
        firstHundredTourist = 100 * 5000;
        secondHundredTourist= 100 * 4000;
         remaingHead = tourist-200;
        moreThanTwoHundred = remaingHead * 3000;
        totalcost=firstHundredTourist+secondHundredTourist+moreThanTwoHundred;
        return totalcost;
        

    }
}
const actualTotal = picnicBudget(290);
console.log(actualTotal);