
var mid= new Date("Mar 30, 2024 00:00:00").getTime();
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

var midnotes = document.querySelector('.midnote');
var imgsofmidnotes=['pdf.png','bg.png'];

var midsug=document.querySelector('.midsugg');
var imgsofmidsuggs = ['bg.png', 'pdf.png'];

var finalnotes = document.querySelector('.finalnote');
var imagesofnote = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg'];

var finalsuggus = document.querySelector('.finalsugg');
var imagesofsuggs = ['no suggstion.jpg'];


var i = 0;

/*final */
function prevnf(){
	if(i <= 0) i = imagesofnote.length;	
	i--;
	return finalnotes.setAttribute('src', "meterials/ce/"+imagesofnote[i]);			 
}

function nxtnf(){
	if(i >= imagesofnote.length-1) i = -1;
	i++;
	return finalnotes.setAttribute('src', "meterials/ce/"+imagesofnote[i]); 
}

function prevsf(){
	if(i <= 0) i = imagesofsuggs.length;	
	i--;
	return finalsuggus.setAttribute('src', "meterials/ce/"+imagesofsuggs[i]);		 
}

function nxtsf(){
	if(i >= imagesofsuggs.length-1) i = -1;
	i++;
	return finalsuggus.setAttribute('src', "meterials/ce/"+imagesofsuggs[i]);		 
}

/*mid  */

function prevnm(){
	if(i <= 0) i = imgsofmidnotes.length;	
	i--;
	return midnotes.setAttribute('src', "meterials/ce/"+imgsofmidnotes[i]);			 
}

function nxtnm(){
	if(i >= imgsofmidnotes.length-1) i = -1;
	i++;
	return midnotes.setAttribute('src', "meterials/ce/"+imgsofmidnotes[i]); 
}

function prevsm(){
	if(i <= 0) i = imgsofmidsuggs.length;	
	i--;
	return midsug.setAttribute('src', "meterials/ce/"+imgsofmidsuggs[i]);		 
}

function nxtsm(){
	if(i >= imgsofmidsuggs.length-1) i = -1;
	i++;
	return midsug.setAttribute('src', "meterials/ce/"+imgsofmidsuggs[i]);		 
}