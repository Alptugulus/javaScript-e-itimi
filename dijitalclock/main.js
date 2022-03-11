function clockTime (){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    
    /*document.getElementById("hour").innerHTML = hour ;
    document.getElementById("minute").innerHTML = minute ;
    document.getElementById("second").innerHTML = second ;*/
      
     hour = document.querySelector("#hour");  
     minute = document.querySelector("#minute").innerHTML;
     second = document.querySelector("#second").innerHTML;
    }
    setInterval(function(){clockTime(),1000});
//setInterval(clockTime , 1000);
