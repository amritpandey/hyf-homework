/* weather wear */

    let preferClothes;
     function getWeatherWear(temp){
       
        if(temp<=0){
         preferClothes = "heavy jackets and inner trousers";   
        }else if(temp<15){
            preferClothes = "Normal jackets and pants";
        }else{
            preferClothes = "shorts and a t-shirt";
        }
        return preferClothes;
    }

    const clothesToWear = getWeatherWear(0);
    console.log(clothesToWear); 