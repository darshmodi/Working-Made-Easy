// import React,{Component} from "react";
import React from "react";
// import "./Jq.js"
// import "./Scriptimport "./style1.css"
// .js"
// import "./Script.js"
import $ from "jquery"

export default class WeatherApi extends React.Component{
    render(){

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Surat&units=imperial&APPID=0d6fb5554ab83b62c05556abcf2d54e6",
        function(data){
            console.log(data);
            var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var temp=data.main.temp;
            var vis=data.visibility;
            var humid=data.main.humidity;
            var weather=data.weather[0].main;
            var desc=data.weather[0].description;
            var wind=data.wind.speed;
            $('.icon').attr('src',icon);
            $(".temp").append(temp);
            $(".weather").append(weather);
            $(".desc").append(desc);
            $(".humid").append(humid);
            $(".vis").append(vis);
            $(".wind").append(wind);
        });

        return(
            <div>
            <div className="Weather1">
            <img className="icon" src="icon12.png" alt=""></img>
            <p className="weather">Weather : </p>
            <p className="desc">Description : </p>
            <p className="temp">Temperature : </p>
            <p className="humid">Humidity  : </p>
            <p className="vis">Visibility :  </p>
            <p className="wind">Wind Speed : </p>
        </div>
        <br></br>
   <p className="unit"> (All units are in imperial)</p>
   </div>
        );
    }
} 
