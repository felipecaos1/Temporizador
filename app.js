const reloj=()=>{
    let fecha= new Date;

    let s=fecha.getSeconds();
    
    document.getElementById("segundos").innerHTML=s;

    document.getElementById("con-seg").classList.toggle("rotar");
    
    

}
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
    
                    document.getElementById("minutes").innerHTML=59;
                    if(horas==0){
                        if(dias!=0){
        
                            document.getElementById("hours").innerHTML=24;
                            if(dias==0){}
                            else{
                                document.getElementById("days").innerHTML=formato(dias-1);
                            }
                        }
                        else{
        
                            
                        }
                    }
                    else{
                        
                        document.getElementById("hours").innerHTML=formato(horas-1);
                    }
                }
                else{
                    
                }
                
            }
            else{
                document.getElementById("minutes").innerHTML=formato(minutos-1);
            }
        }
        else{
            
            
        }
        
       
    }
    else{
        document.getElementById("segundos").innerHTML=formato(segundos-1);
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

