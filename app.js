function startCount(){

    const intervalo= setInterval(()=>{
        console.log("entro");
        let segundos=parseInt(document.getElementById("segundos").innerHTML,10);
    let minutos=parseInt(document.getElementById("minutes").innerHTML,10);
    let horas=parseInt(document.getElementById("hours").innerHTML,10);
    let dias=parseInt(document.getElementById("days").innerHTML,10);
    
    if(segundos==0){
        if(dias!=0 || horas!=0 || minutos!=0){

            document.getElementById("segundos").innerHTML=59;

            if(minutos==0){
                if(dias!=0 || horas!=0){
    
                    
                    document.getElementById("con-min").style.animation="rota 1s ease-in infinite";
                                setTimeout(()=>{
                                    document.getElementById("minutes").innerHTML=59;

                                },1000);
                    if(horas==0){
                        if(dias!=0){
        
                            
                            document.getElementById("con-ho").style.animation="rota 1s ease-in infinite";
                                setTimeout(()=>{
                                    document.getElementById("hours").innerHTML=24;

                                },1000);
                            if(dias==0){}
                            else{
                                document.getElementById("con-day").style.animation="rota 1s ease-in infinite";
                                setTimeout(()=>{
                                    document.getElementById("days").innerHTML=formato(dias-1);

                                },1000);
                                
                            }
                        }
                        else{
        
                            
                        }
                    }
                    else{
                        document.getElementById("con-ho").style.animation="rota 1s ease-in infinite";
                        setTimeout(()=>{
                            document.getElementById("hours").innerHTML=formato(horas-1);

                         },1000);
                       
                    }
                }
                else{
                    
                }
                
            }
            else{
                document.getElementById("con-min").style.animation="rota 1s ease-in infinite";
                setTimeout(()=>{
                    document.getElementById("minutes").innerHTML=formato(minutos-1);

                },1000);
            }
        }
        else{
            
            
        }
        
       
    }
    else{
        document.getElementById("con-seg").style.animation="rota 1s ease-in infinite";
        document.getElementById("segundos").innerHTML=formato(segundos-1);
        

        //limpiar los giros 
        document.getElementById("con-min").style.animation="none";
        document.getElementById("con-ho").style.animation="none";
        document.getElementById("con-day").style.animation="none";
    }
   

    if(dias==0&&horas==0&&minutos==0&&segundos==0){
        clearInterval(intervalo);
    }
    },1000)
}


function formato(x){
    if(x<10){
        x= '0'+x;
    }
    return x
}


