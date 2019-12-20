import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList";
import App from "./App";
import "./style1.css";
import WeatherApi from "./WeatherApi";
import Run from "./Game1";
import News from "./News.js";
import "./Style2.css";
import Cric from "./cric.js";
import About from "./About1.js"

// var element1=0;

class Fun extends React.Component{
    constructor(props){
        super(props);
            this.state={
            key1: 0
          };   
       // this.Mainfun = this.Mainfun.bind(this);
   
    }
    
    fun0 =() =>{
        this.setState({key1: 0});
        // element1=2;
    }
    fun1=() =>{
            this.setState({key1: 1});
            // element1=1;
            
            
    }

    fun2 =() =>{
        this.setState({key1: 2});
        // element1=2;
    }
    fun3 =() =>{
        this.setState({key1: 3});
        // element1=2;
    }
    fun4 =() =>{
        this.setState({key1: 4});
        // element1=2;
    }
    fun5 =() =>{
        this.setState({key1: 5});
        // element1=2;
    }
    fun6 =() =>{
        this.setState({key1: 6});
        // element1=2;
    }
    
    maainfun=() =>{
        // if(this.state.key1===1)
        return <h1>Fun1</h1>
        // else if(this.state.key1===2)
        // return <h1>Fun 2</h1>
    }
    // function Mainfun() {
    //     if(this.state.key1===1)
    //     return <h1>Fun1</h1>
    //     else if(this.state.key1===2)
    //     return<h1>Fun2</h1>
    // }
    // Mainfun:() => ()
    // Mainfun(){
    //     if(this.state.key1===1)
    //     return <h1>sun1</h1>
    //     else if(this.state.key1===2)
    //     return <h1>fun2</h1>
    // } 
    render(){
        var element12= <Mainfun Index={this.state.key1} />;
        // element1=this.state.key1;
        return(
            <div>
            <div className="menu">
            <button onClick={this.fun0} >About</button>
            <button onClick={this.fun1} >ToDo</button>
            <button onClick={this.fun3}>Weather Conditions</button>
            <button onClick={this.fun5}>Trending News</button>
            <button onClick={this.fun6}>Live Cricket</button>
            <button onClick={this.fun2}>Calculator</button>
            <button onClick={this.fun4}>Matchsticks Game</button>
            {/* <button onClick={this.fun7}>Link 6</button> */}
            {/* <div><h1>{element1}</h1></div> */}
            {/* <div><h1>{this.state.key1}</h1></div> */}
            </div>
             <div class='main'> <div id="middle">{element12}</div> </div>

            </div>
            
        )
    }
}

class Mainfun extends Fun{
    
    render(){
        if(this.props.Index===0)
        return <About />
        if(this.props.Index===1)
        return <TodoList />
        if(this.props.Index===2)
        return<App />
        if(this.props.Index===3)
        return <WeatherApi />
        if(this.props.Index===4)
        return <Run />
        if(this.props.Index===5)
        return <News />
        if(this.props.Index===6)
        return <Cric />
    return <h1>{this.props.Index}</h1>
    }
}
class Allc extends React.Component{
    render() {
        return (
          <React.Fragment>
              
            <Fun />
            <Mainfun />
            {/* <Mainfun /> */}
          </React.Fragment>
        );
      }
}

ReactDOM.render(<Allc />, document.getElementById('root'));