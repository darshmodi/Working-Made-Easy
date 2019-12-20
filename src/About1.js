import React from "react";
import "./style1.css"
export default class About extends React.Component{
    render(){
        return(
            <div className="About12">
            <h3>We are all about making your everyday life easy by gathering all the dailylife required applications at one place. The components and their use are as under.</h3>
            <ul>
                <li><p><b>Todo : </b>Enter the tasks you should perform today and click on the task that you completed which would make it remove from the list.</p></li>
                <li><p><b>Weather Conditions : </b>This would give u a glimpse of weather conditions around u currently.</p></li>
                <li><p><b>Trending News : </b>You will get top 4 trending news here.</p></li>
                <li><p><b>Live Cricket : </b>Here you will get live scores of all ongoing cricket matches currently.</p></li>
                <li><p><b>Calculator : </b>This is a normal calculator which we require manytimes daily.</p></li>
                <li><p><b>Matchsticks Game : </b>This is a timepass game whose instructions are mentioned inside it.</p></li>
                <li><p>The right sided column contains all the required social media platforms and required applications...</p></li>
            </ul>
            </div>
        );
    }
}