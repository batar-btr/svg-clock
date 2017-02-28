var lines = document.getElementById('www');
function clock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    
    
    function obnul(){
        document.getElementById('secondString').style.transition = "0s all";
        document.getElementById('secondString').style.transform = "rotate("+0+"deg)";
        document.getElementById('z18').style.transition = "0s all";
        document.getElementById('z18').style.transform = "rotate("+0+"deg)"
        document.getElementById('z10').style.transition = "0s all";
        document.getElementById('z10').style.transform = "rotate("+360+"deg)"
        
    }
    
    if(second==0){
        document.getElementById('secondString').style.transform = "rotate("+360+"deg)";
        document.getElementById('z18').style.transform = "rotate("+360+"deg)";
        document.getElementById('z10').style.transform = "rotate("+"-288"+"deg)";
        var reset = lines.children;
        for(var z = 1;z<reset.length;z++){
            reset[z].style.fill = "grey";
        }
        setTimeout(obnul,300);
        
    }else{
        
        for(var j = 1;j<second;j++){
            lines.children[j].style.fill = "#1e8bf7";
        }
        
        document.getElementById('secondString').style.transition = "0.2s all cubic-bezier(.53, 1.47, .62, 1.47)";
        document.getElementById('secondString').style.transform = "rotate("+second*6+"deg)";
        
        document.getElementById('z18').style.transition = "0.2s all cubic-bezier(.53, 1.47, .62, 1.47)";
        document.getElementById('z18').style.transform = "rotate("+second*6+"deg)";
        
        document.getElementById('z10').style.transition = "0.2s all cubic-bezier(.53, 1.47, .62, 1.47)";
        document.getElementById('z10').style.transform = "rotate("+(360-second*6*1.8)+"deg)";
    }
    
    var change = www.children[second];
    change.style.fill = "#1e8bf7";
    
    
    document.getElementById('hourString').style.transform = "rotate("+(hour*30+Math.floor(minute/2))+"deg)";
    document.getElementById('minuteString').style.transform = "rotate("+minute*6+"deg)";
//-------------------------------------------------------------------------------------------------------------------------------    
//    if(hour<=9) hour="0"+hour;
//    if(minute<=9) minute="0"+minute;
//    if(second<=9) second="0"+second;
    
//    var completedate = hour + " : " + minute + " : " + second;
    
//    if(second==0) {
//        document.body.querySelector('.radiowrap').innerHTML=" ";
//    }
//    
//    var rad = document.createElement('div');
//    rad.className = "radio";
//    rad.style.transform = "rotate("+second*6+"deg)";
//    if(second%5==0){
//        rad.style.height = "40px"
//    }
//    var b = document.body.querySelector('.radiowrap');
//    b.appendChild(rad);
//  

   
    
}
setInterval(clock,1000);

