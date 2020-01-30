import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Buttons from './Buttons.js';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

     if(button === "="){
         this.calculate()
     }

     else if(button === "AC"){
         this.reset()
     }

     else {
         this.setState({
             result: this.state.result + button
         })
     }
 };

    calculate = () => {
    try {
        this.setState({
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

reset = () => {
    this.setState({
        result: ""
    })
};

backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};
    render() {
        return (
            <div>
                <div className="body">
                    <Header result={this.state.result}/>
                    <Buttons onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
<App  />,
document.getElementById('root')
);

export default App;
