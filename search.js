products=[
    {name:'iphone 10', price:90000},
    {name:'samsung A60', price:45000},
    {name:'asus watch', price:30000},
    {name:'asus laptop', price:30000},
    {name:'asus monitor', price:30000},
    {name:'asus camera', price:30000},
    {name:'asus smart watch', price:30000},
    {name:'redmi smart watch', price:19000},
    {name:'vivo watch', price:20000},
    {name:'techno smart watch', price:15000},
    {name:'sony watch', price:40000},

         ]
    function searchProducts(products,searchText){

        for(const product of products){
            if(product.name.indexOf(searchText)){
                //if(product.name.includes(searchText)) //indexOf,includes both are same function
                console.log(product.name);

            }
        }


    }
    searchProducts(products,'asus');