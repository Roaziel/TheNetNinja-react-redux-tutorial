import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {
        name: 'Ryu',
        age: 30,
        belt: 'Black',
        id: 1
      },
      {
        name: 'Yoshi',
        age: 20,
        belt: 'green',
        id: 2
      },
      {
        name: 'Crystal',
        age: 25,
        belt: 'pink',
        id: 3
      }
    ]
  }

  addNinja = ninja => {
    // ninja.id = Math.random();
    ninja.id = this.state.ninjas.length + 1;
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  };

  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => ninja.id !== id);
    this.setState({
      ninjas: ninjas
    });
  };

  render() {
    return (
      <div className="App">
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
