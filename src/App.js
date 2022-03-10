import logo from './logo.svg';
import './App.css';
import React from "react";
import { create, all } from 'mathjs'
const math = create(all, {})

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      operation: "",
      lastInputIsOperator: true,
      lastInputIsEqual: false,
      newNumber: "0"
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event){
    switch(event.target.id){
        
      case "ac":
        this.setState({
          operation: "",
          lastInputIsOperator: true,
          newNumber: "0"
        })
      break;

      case "equal":
        let result = math.evaluate(this.state.operation)
        result = parseFloat(result.toFixed(7));
        this.setState({
          operation: this.state.operation + " = " + result,
          newNumber: result,
          lastInputIsOperator: true,
          lastInputIsEqual: true,
        })
      break;

      case "multiply":
        if(this.state.lastInputIsEqual == true){
          this.setState({
            operation: this.state.newNumber + "*",
            newNumber: "X",
            lastInputIsOperator: true,
            lastInputIsEqual: false
          })
        }
        else if(this.state.lastInputIsOperator == false){
          this.setState({
            newNumber: "X",
            operation: this.state.operation + "*",
            lastInputIsOperator: true
          })
        }
      break;
      
      case "divide":
        if(this.state.lastInputIsEqual == true){
          this.setState({
            operation: this.state.newNumber + "/",
            newNumber: "/",
            lastInputIsOperator: true,
            lastInputIsEqual: false
          })
        }
        else if(this.state.lastInputIsOperator == false){
          this.setState({
            newNumber: "/",
            operation: this.state.operation + "/",
            lastInputIsOperator: true
          })
        }
      break;
      
      case "minus":
        if(this.state.lastInputIsEqual == true){
          this.setState({
            operation: this.state.newNumber + "-",
            newNumber: "-",
            lastInputIsEqual: false,
            lastInputIsOperator: true
          })
        }
        else if(this.state.lastInputIsOperator == false){
          this.setState({
            newNumber: "-",
            operation: this.state.operation + "-",
            lastInputIsOperator: true
          })
        }
      break;
      
      case "plus":
        if(this.state.lastInputIsEqual == true){
          this.setState({
            operation: this.state.newNumber + "+",
            newNumber: "+",
            lastInputIsEqual: false,
            lastInputIsOperator: true,
          })
        }
        if(this.state.lastInputIsOperator == false){
          this.setState({
            newNumber: "+",
            operation: this.state.operation + "+",
            lastInputIsOperator: true
          })
        }
      break;
      case "decimal":
        if (this.state.lastInputIsOperator === true){
          this.setState({
            newNumber: "0.",
            operation: this.state.operation + "0.",
            lastInputIsOperator: false
          })
        }
        else{
          this.setState({
            newNumber: this.state.newNumber + ".",
            operation: this.state.operation + ".",
          })
        }
      break;
      default:
        if (this.state.lastInputIsOperator === true){
          this.setState({
            newNumber: event.target.id,
            operation: this.state.operation + event.target.id,
            lastInputIsOperator: false
          })
        }
        else{
          this.setState({
            newNumber: this.state.newNumber + event.target.id,
            operation: this.state.operation + event.target.id,
          })
        }
        break;
    }
  }
  render(){

    return(
      <div id="calc-container">
        <div id="display"> 
          <span id="oldNumber">{this.state.operation}</span>
          <span id="newNumber">{this.state.newNumber}</span>
        </div> 
        <div id="button-grid">
          <button id="ac" onClick={this.handleClick}>AC</button>
          <button id="divide" className="btn-operator" onClick={this.handleClick}>/</button>
          <button id="multiply" className="btn-operator" onClick={this.handleClick}>x</button>
          <button id="7" className="btn-number" onClick={this.handleClick}>7</button>
          <button id="8" className="btn-number" onClick={this.handleClick}>8</button>
          <button id="9" className="btn-number" onClick={this.handleClick}>9</button>
          <button id="minus" className="btn-operator" onClick={this.handleClick}>-</button>
          <button id="4" className="btn-number" onClick={this.handleClick}>4</button>
          <button id="5" className="btn-number" onClick={this.handleClick}>5</button>
          <button id="6" className="btn-number" onClick={this.handleClick}>6</button>
          <button id="plus" className="btn-operator" onClick={this.handleClick}>+</button>
          <button id="1" className="btn-number" onClick={this.handleClick}>1</button>
          <button id="2" className="btn-number" onClick={this.handleClick}>2</button>
          <button id="3" className="btn-number" onClick={this.handleClick}>3</button>
          <button id="equal" onClick={this.handleClick}>=</button>
          <button id="0" className="btn-number zero" onClick={this.handleClick}>0</button>
          <button id="decimal" className="btn-number" onClick={this.handleClick}>.</button>
        </div>
      </div>
    )
  }
}

export default App;
