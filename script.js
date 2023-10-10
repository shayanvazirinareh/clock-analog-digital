let Hours=document.querySelector('.hour');
let Minutes=document.querySelector('.minute');
let Seconds=document.querySelector('.second');
let digital=document.querySelector('.inputdigital');
setInterval(function(){
let clock= new Date();
let h=clock.getHours();
let hdeg=(h/12)*360;
Hours.style.transform=`rotate(${hdeg}deg)`
let m=clock.getMinutes();
let mdeg=(m/60)*360;
Minutes.style.transform=`rotate(${mdeg}deg)`
let s=clock.getSeconds();
let sdeg=(s/60)*360;
Seconds.style.transform=`rotate(${sdeg}deg)`
},1000);
time=()=>{
    let clock= new Date();
    let h=clock.getHours();
    let m=clock.getMinutes();
    let s=clock.getSeconds();
    h=(h<10)? '0'+h:h;
    m=(m<10)? '0'+m:m;
    s=(s<10)? '0'+s:s;
    digital.innerHTML=h+":"+m+":"+s;
}
setInterval(time,1000)
