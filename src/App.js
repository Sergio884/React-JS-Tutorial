import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    counters: [
        {id : 1, value : 3},
        {id : 2, value : 0},
        {id : 3, value : 2},
        {id : 4, value : 0}
    ]
  }
  
  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({counters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
    c.value = 0;
    return c;
    });
    this.setState({counters});
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  };

  decrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
  };

  render() { 
    return (
      <React.Fragment>
        <Navbar />
          <main className="container">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onDelete={this.handleDelete} 
              onIncrement={this.handleIncrement} />
          </main>
      </React.Fragment>
    );
  }
}
 
export default App;