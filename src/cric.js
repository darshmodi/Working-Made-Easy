import React from 'react';
import $ from "jquery";
import "./Style2.css";
export default class Cric extends React.Component{
    render(){
        $.get("https://cricapi.com/api/matches?apikey=x8jFRNd270WbDTV0vb7qNrvudFb2", function(matchdata) {
	console.log(matchdata);
	var i=1;
	matchdata.matches.forEach(function(md) {
		if(md.matchStarted === true){
		//$(".t1").append(  "\n " + md.team +"-----------");
		$.get("https://cricapi.com/api/cricketScore?apikey=x8jFRNd270WbDTV0vb7qNrvudFb2&unique_id=" + md.unique_id , function(md1){
			if(md1.score !== undefined){
				if(md.winner_team !== undefined)
				{
					$(".Cric").append( i + ". &nbsp  SCORE=" + md1.score +  "  &nbsp &nbsp &nbsp &nbsp  Match Over    &nbsp &nbsp &nbsp &nbsp     winner-Team=" + md.winner_team +"<br>");
				}
				else
				{
					$(".Cric").append( i +". &nbsp  SCORE=" + md1.score +  " &nbsp &nbsp &nbsp &nbsp  Match is Live currently <br>");
				}
				i=i+1;
			}
		
	});
	}
	})
});
        return(
            <div>
			<h2>Scores of some recent matches and Live scores of current matches are as under</h2>
            <div class="Cric">

            </div>
			</div>
        );
    }
}