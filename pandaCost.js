function pandaCost (shingaraQuantity,samuchaQuantity,jilapiQuantity){
    const perShingara =7;
    const perSamucha = 10;
    const perJilapi = 15;
    if(typeof shingaraQuantity != "number" || typeof  samuchaQuantity != "number" || typeof jilapiQuantity != "number" ||shingaraQuantity<0 || samuchaQuantity<0|| jilapiQuantity<0) {
        return 'Please Enter a valid value';
    }
  
    else{
        const totalShingaraPrice = perShingara * shingaraQuantity;
        const totalSamuchaPrice = perSamucha * samuchaQuantity;
        const totalJilapiPrice = perJilapi * jilapiQuantity;

        const totalCost = totalShingaraPrice + totalSamuchaPrice + totalJilapiPrice;
        return totalCost ;
    }

}
//no negative value
const pandaBill = pandaCost (-1,1,1);
console.log(pandaBill);

//no string value
const pandaBill1 = pandaCost ("hey",1,1);
console.log(pandaBill1);

//you have to purchase at least one item from each.
const pandaBill2 = pandaCost (0,0,0);
console.log(pandaBill2);

//correct one
const pandaBill3 = pandaCost (1,1,1);
console.log(pandaBill3);