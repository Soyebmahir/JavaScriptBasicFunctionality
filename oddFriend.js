function oddFriend (array){
    var oddFriendList= '';

    for(let i=0; i< array.length;i++){
        

       if(array[i].length %2 == 0){

            
            continue;

       }
       else{

        oddFriendList =array[i];
     
        return  oddFriendList;
        
       }
      
    }
   
}

const friends =oddFriend(['mahito','Shohaigga','soyeb','soyeb','soyeb','mahito']);
console.log(friends);
