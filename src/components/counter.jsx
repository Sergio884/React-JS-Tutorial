import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value : this.props.counter.value
    };

    render() {
        return <React.Fragment>
                    <span className={this.getClasses()}>{this.formatCount()}</span>                    
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary btn-sm">+</button>
                    <button disabled={this.isZero()} onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm">-</button>                                            
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>  
                    <br />                                      
              </React.Fragment>;    
    }

    getClasses(){
        let classes = "btn btn-";
        classes += this.props.counter.value === 0 ? "danger m-1" : "primary m-3";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    isZero(){
        const {value} = this.props.counter;
        return value === 0 ? true : false;
    }
}
export default Counter;
