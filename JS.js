$(document).ready(function() {

  getLoc();

});

function getLoc(){

  var loc=document.getElementById("location");
  var windSpeed=document.getElementById("wind");
   var tempiture=document.getElementById("temp");

  function itWorked(pos){

    var lat  = pos.coords.latitude;
    var long = pos.coords.longitude;

    if($('#switchF').is(':checked')){
      var tempFormat="units=imperial";
    console.log("F is checked");

    }

     if($('#switchC').is(':checked')){
       var tempFormat="units=metric";
    console.log("C is checked");
}
      $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&"+tempFormat+"&appid=7b38e425d37c7062ffd8519b8e6a8703", function(allWeather){

    var temp=allWeather.main.temp;
    var wind=allWeather.wind.speed;
      var city=allWeather.name;
      var regex=/-.\d/g;
      var regex2=/.\d\.\d/g;
      var regex1=/\d/g;

    var str="Temp: "+temp;

    windSpeed.innerHTML="Wind Speed: " +wind;
    tempiture.innerHTML=str;
    loc.innerHTML="City: "+city;

      switch (true) {

          case str.includes("-") :
  var temp1 = str.match(regex).join("");
         // temp1+=str.match(regex2).join("");
         console.log("ran -") ;
          break;

           case str.includes(".") :
  var temp1 = str.match(regex2).join("");
         // temp1+=str.match(regex2).join("");
         console.log("ran .");
          break;

        default:
  var temp1 = str.match(regex1).join("");
           console.log("ran numbers");

      }

var tempeture=temp1;

console.log(temp1);


      if($('#switchF').is(':checked')){


//changed background based on tempeture
switch (true) {
  // if temp is under 32 show ice
    case tempeture<32:
 document.body.style.backgroundImage = "url('https://www.walldevil.com/wallpapers/a81/frost-ice-glass.jpg')";
        break;
// if weather is under 70 and over 32 show spring
    case tempeture<=70:
 document.body.style.backgroundImage = "url('https://az616578.vo.msecnd.net/files/2017/03/24/6362599380945458251092389747_spring8.jpg')";
    break;
// if weather is under 100 and over 70 show clouds
      case tempeture<=100:
 document.body.style.backgroundImage = "url('https://youtechassociates.com/wp-content/uploads/2016/03/amazing-sunny-day-wallpaper-1.jpg')";
        break;
//if temp is over 100 show fire.
    case tempeture>100:
 document.body.style.backgroundImage = "url('http://pbs.twimg.com/media/C1AsKCIXEAA-pZG.jpg')";

}
      }


       if($('#switchC').is(':checked')){

//changed background based on tempeture
switch (true) {
  // if temp is under 0 show ice
    case tempeture<0:
 document.body.style.backgroundImage = "url('https://www.walldevil.com/wallpapers/a81/frost-ice-glass.jpg')";
        break;
// if weather is under 21 and over 0 show spring
    case tempeture<=21:
 document.body.style.backgroundImage = "url('https://az616578.vo.msecnd.net/files/2017/03/24/6362599380945458251092389747_spring8.jpg')";
    break;
// if weather is under 37 and over 21 show clouds
      case tempeture<=37:
 document.body.style.backgroundImage = "url('https://youtechassociates.com/wp-content/uploads/2016/03/amazing-sunny-day-wallpaper-1.jpg')";
        break;
//if temp is over 37 show fire.
    case tempeture>37:
 document.body.style.backgroundImage = "url('http://pbs.twimg.com/media/C1AsKCIXEAA-pZG.jpg')";

}
      }

  });


  }

  loc.innerHTML="<p>Finding your city...</p>";
 windSpeed.innerHTML="<p>Finding your local WindSpeed...</p>";
  tempiture.innerHTML="<p>Finding your local Temp...</p>";
  navigator.geolocation.getCurrentPosition(itWorked);

  }
