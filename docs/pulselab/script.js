var mid = new Date("June 30, 2024 00:00:00").getTime();
var final = new Date("May 14, 2024 00:00:00").getTime();
var x = setInterval(() => {
  var now = new Date().getTime();
  var distance = mid - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("d").innerHTML = days;
  document.getElementById("h").innerHTML = hours;
  document.getElementById("m").innerHTML = minutes;
  document.getElementById("s").innerHTML = seconds;
}, 1000);

var notes = document.querySelector(".note");
var imagesofnote = ["coming soon.jpg"];

var sugs = document.querySelector(".sugg");
var imagesofsuggs = ["no suggstion.jpg"];

var i = 0;

function PrevButtonOfNote() {
  if (i <= 0) i = imagesofnote.length;
  i--;
  document.getElementById("page").innerHTML = `page ${i + 1}`;
  return notes.setAttribute("src", "meterials/ip/" + imagesofnote[i]);
}

function NxtButtonOfNote() {
  if (i >= imagesofnote.length - 1) i = -1;
  i++;
  document.getElementById("page").innerHTML = `page ${i + 1}`;
  return notes.setAttribute("src", "meterials/ip/" + imagesofnote[i]);
}

function PrevButtonOfSuggs() {
  if (i <= 0) i = imagesofsuggs.length;
  i--;
  document.getElementById("page").innerHTML = `page ${i + 1}`;
  return sugs.setAttribute("src", "meterials/ip/" + imagesofsuggs[i]);
}

function NxtButtonOfSuggs() {
  if (i >= imagesofsuggs.length - 1) i = -1;
  i++;
  document.getElementById("page").innerHTML = `page ${i + 1}`;
  return sugs.setAttribute("src", "meterials/ip/" + imagesofsuggs[i]);
}
