
var mid= new Date("June 30, 2024 00:00:00").getTime();
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
}, 1000);

var midnotes = document.querySelector('.midnote');
var imgsofmidnotes=['pdf.png','bg.png'];

var midsug=document.querySelector('.midsugg');
var imgsofmidsuggs = ['bg.png', 'pdf.png'];

var finalnotes = document.querySelector('.finalnote');
var imagesofnote = ['coming soon.jpg'];

var finalsuggus = document.querySelector('.finalsugg');
var imagesofsuggs = ['no suggstion.jpg'];


var i = 0;

/*final */
function prevnf(){
	if(i <= 0) i = imagesofnote.length;	
	i--;
    document.getElementById('page').innerHTML=`page ${i+1}`;
	return finalnotes.setAttribute('src', "meterials/ip/"+imagesofnote[i]);			 
}

function nxtnf(){
	if(i >= imagesofnote.length-1) i = -1;
	i++;
    document.getElementById('page').innerHTML=`page ${i+1}`;
	return finalnotes.setAttribute('src', "meterials/ip/"+imagesofnote[i]); 
}

function prevsf(){
	if(i <= 0) i = imagesofsuggs.length;	
	i--;
    document.getElementById('page').innerHTML=`page ${i+1}`;
	return finalsuggus.setAttribute('src', "meterials/ip/"+imagesofsuggs[i]);		 
}

function nxtsf(){
	if(i >= imagesofsuggs.length-1) i = -1;
	i++;
    document.getElementById('page').innerHTML=`page ${i+1}`;
	return finalsuggus.setAttribute('src', "meterials/ip/"+imagesofsuggs[i]);		 
}

/*mid  */

function prevnm(){
	if(i <= 0) i = imgsofmidnotes.length;	
	i--;
    document.getElementById('page').innerHTML=`page ${i+1}`;
	return midnotes.setAttribute('src', "meterials/ip/"+imgsofmidnotes[i]);			 
}

function nxtnm(){
	if(i >= imgsofmidnotes.length-1) i = -1;
	i++;
    document.getElementById('page').innerHTML=`page ${i+1}`;
	return midnotes.setAttribute('src', "meterials/ip/"+imgsofmidnotes[i]); 
}

function prevsm(){
	if(i <= 0) i = imgsofmidsuggs.length;	
	i--;
    document.getElementById('page').innerHTML=`page ${i+1}`;
	return midsug.setAttribute('src', "meterials/ip/"+imgsofmidsuggs[i]);		 
}

function nxtsm(){
	if(i >= imgsofmidsuggs.length-1) i = -1;
	i++;
    document.getElementById('page').innerHTML=`page ${i+1}`;
	return midsug.setAttribute('src', "meterials/ip/"+imgsofmidsuggs[i]);		 
}