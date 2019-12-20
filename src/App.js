import React from "react";
import "./App.css";
//import ReactDOM from "react-dom";
import Calculator from "./Calculator"
import Output from "./Output";
// eslint-disable-next-line
import react, {Component} from "react";

class App extends Component{
    state={
        result: ''
    }

    buttonPressed=buttonName=>{
        if(buttonName==='B')
        this.setState({ 
            result: this.state.result.slice(0,-1)
        });
        else if(buttonName==='y')
        this.setState({ 
            result: this.state.result + ''
        });
        else if(buttonName ==='='){
            this.calculate();
        }
        else if(buttonName==='C')
        this.setState({ 
            result: ''
        });
        else
        this.setState({
            result: this.state.result + buttonName,
        });
    };

    calculate=() =>{
        this.setState({
            // eslint-disable-next-line
            result: eval(this.state.result)
        });
    }

    render(){
        return(
            <div className="App">
                <Output result={this.state.result}/>
                <Calculator buttonPressed={this.buttonPressed}/>
            </div>
        )
    }

}

export default App;