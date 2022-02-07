function anaToVori (ana){
    let vori=0 ;
    
    if(  typeof ana != 'number' || ana <= 0 ){ 
        return "Input a valid value, please" ;
         
    }
    else{
        
        vori = ana / 16 ;
        return vori;
    }
}

//cant be a negative value.
const totalVori1  = anaToVori (-48);
console.log(totalVori1);

//cant be a string.
const totalVori2  = anaToVori ("Hi");
console.log(totalVori2);

// always input a positive value.
const totalVori3  = anaToVori (48);
console.log(totalVori3);