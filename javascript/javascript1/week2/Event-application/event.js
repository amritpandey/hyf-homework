 /*Event application*/

  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        
     function getEventWeekday(eventDay){
        const d = new Date();
        d.setDate(d.getDate() + eventDay);
        let day = weekdays[d.getDay()];
        
        return day;
    }
        
    console.log(getEventWeekday(13)); 