var mid= new Date("Aug 16, 2024 00:00:00").getTime();
var final= new Date("May 14, 2024 00:00:00").getTime();
var x = setInterval(() => {
        var now=new Date().getTime();
        var distance= mid-now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('d').innerHTML=days;
        document.getElementById('h').innerHTML=hours;
        document.getElementById('m').innerHTML=minutes;
        document.getElementById('s').innerHTML=seconds;
        let hide= document.getElementById('mid');
        if (distance <= 0){
            clearInterval(x);
            hide.classList.toggle('hidden')
        }

}, 1000);

var y = setInterval(() => {
        var now=new Date().getTime();
        var distance= final-now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('df').innerHTML=days;
        document.getElementById('hf').innerHTML=hours;
        document.getElementById('mf').innerHTML=minutes;
        document.getElementById('sf').innerHTML=seconds;
        let hide= document.getElementById('final');
        if (distance <= 0){
            clearInterval(x);
            hide.classList.toggle('hidden')
        }

}, 1000);
