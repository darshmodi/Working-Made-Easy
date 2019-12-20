import React from 'react';
import $ from "jquery";
import "./Style2.css";
export default class News extends React.Component{
    render(){
        $.getJSON("https://newsapi.org/v2/top-headlines?country=in&apiKey=47cada12fc8544688a834e6e794c8457",
        function(data){
            $(".t1").append(data.articles[0].title);
            $(".i1").html("<img src=" + data.articles[0].urlToImage + " >");
            $(".d1").append(data.articles[0].description);
            $(".c1").append(data.articles[0].content);
            $(".t2").append(data.articles[1].title);
            $(".i2").html("<img src=" + data.articles[1].urlToImage + " >");
            $(".d2").append(data.articles[1].description);
            $(".c2").append(data.articles[1].content);
            $(".t3").append(data.articles[2].title);
            $(".i3").html("<img src=" + data.articles[2].urlToImage + " >");
            $(".d3").append(data.articles[2].description);
            $(".c3").append(data.articles[2].content);
            $(".t4").append(data.articles[3].title);
            $(".i4").html("<img src=" + data.articles[3].urlToImage + " >");
            $(".d4").append(data.articles[3].description);
            $(".c4").append(data.articles[3].content);
        });
        return(
            
            <div class="News-container">
           <div class="news1"  >
               <h3 class="t1">Title : </h3>
               <div class="i1"></div>
               <h4 class="d1">Description : </h4>
               <h4 class="c1">Content : </h4>
           </div>
           {/* <hr> */}
           <div class="news2"  >
            <h3 class="t2">Title : </h3>
            <div class="i2"></div>
            <h4 class="d2">Description : </h4>
            <h4 class="c2">Content : </h4>
            </div>
            {/* <hr> */}
            <div class="news3"  >
                <h3 class="t3">Title : </h3>
                <div class="i3"></div>
                <h4 class="d3">Description : </h4>
                <h4 class="c3">Content : </h4>
                </div>
                {/* <hr> */}
                <div class="news4"  >
                    <h3 class="t4">Title : </h3>
                    <div class="i4"></div>
                    <h4 class="d4">Description : </h4>
                    <h4 class="c4">Content : </h4>
             </div>
            </div>
        );
    }
}