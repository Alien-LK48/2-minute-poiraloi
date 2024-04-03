var final= new Date("May 14, 2024 00:00:00").getTime();
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

var finalsuggus = document.querySelector('.finalsugg');
var imagesofsuggs = ['coming soon.jpg'];
var i = 0;
/*final */
function prevsf(){
	if(i <= 0) i = imagesofsuggs.length;	
	i--;
	document.getElementById('page').innerHTML=`page ${i+1}`;
	return finalsuggus.setAttribute('src', "meterials/2161/"+imagesofsuggs[i]);	 
}
function nxtsf(){
	if(i >= imagesofsuggs.length-1) i = -1;
	i++;
	document.getElementById('page').innerHTML=`page ${i+1}`;
	return finalsuggus.setAttribute('src', "meterials/2161/"+imagesofsuggs[i]);		 
}