var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var aftrekbaar = 273.15;   

//Bind api met vars die we gebruiken ^

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=a60f437f70b299833a5a1520b0237fe8')
.then(response => response.json())
.then(data => {
  var test2 = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var origineel = test2 - aftrekbaar;    
  var tempValue = Math.round (origineel * 1) / 1 

//Rekent de tempValue van Kelvin naar Celsius ^

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

//Haalt data uit api en print de informatie op de pagina ^

})

.catch(err => alert("!"));
})
