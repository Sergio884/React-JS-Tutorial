import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value : this.props.value
    };

    increment = () => {
        this.setState({value : this.state.value + 1})
    };

    decrement = () => {
        this.setState({value : this.state.value - 1})
    };

    render() {
        console.log('props',this.props);
        return <React.Fragment>
                    <span className={this.getClasses()}>{this.formatCount()}</span>
                    <button onClick={this.increment} className="btn btn-primary btn-sm">+</button>
                    <button onClick={this.decrement} className="btn btn-danger btn-sm">-</button>  
                    <br />                                      
              </React.Fragment>;    
    }

    getClasses(){
        let classes = "btn m-2 btn-";
        classes += this.state.value === 0 ? "danger" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }
}
export default Counter;
