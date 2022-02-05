const reloj=()=>{
    let fecha= new Date;

    let s=fecha.getSeconds();
    
    document.getElementById("segundos").innerHTML=s;

    document.getElementById("con-seg").classList.toggle("rotar");
    
    

}

setInterval(reloj, 1000);