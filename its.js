const drp=document.querySelectorAll('select');
let currtime=document.querySelector('.clock');
let btn=document.querySelector('.set'); 
let rs=document.querySelector('.reset');
let [s,m,h]=[0,0,0];
let alarmtime;
let timer=null;
const sonic=new Audio('sonic.mp3')
for(i=0;i<=12;i++) {
    let t=`<option value="${i}">${i}</option>`;
    drp[0].firstElementChild.insertAdjacentHTML('afterend',t);

}
for(i=0;i<60;i++) {
    let t=`<option value="${i}">${i}</option>`;
    drp[1].firstElementChild.insertAdjacentHTML('afterend',t);

}
for(i=0;i<60;i++) {
    let t=`<option value="${i}">${i}</option>`;
    drp[2].firstElementChild.insertAdjacentHTML('afterend',t);

}
 function start() {
    s++;
    if(s==60) {
        s=0;
        m++;
        if(m==60) {
            m=0;
            h++;
        }
 
   }

   currtime.textContent=`${(h>9)?h:'0'+h}:${(m>9)?m:'0'+m}:${(s>9)?s:'0'+s}`;
   if(alarmtime==`${h}:${m}:${s}`) {
     sonic.play();
     clearInterval(timer);
     
   }

 } 
 function settime() {
    let time=`${drp[0].value}:${drp[1].value}:${drp[2].value}` 
    if(time.includes('Hour')||time.includes('Minute')||time.includes('Second')) {
        alert("Please select correct time format!")
    }
    else  {alarmtime=time;   
             timer=setInterval(start,1000); }
    
    
}
function toZero() {
    [s,m,h]=[0,0,0];
    currtime.textContent='00:00:00';
    clearInterval(timer);
}
btn.addEventListener('click',settime);
rs.addEventListener('click',toZero);








