import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
        <div className='CircleSelector'>
    <button onClick={this.setState.selected}class="one">
    Select Circle 1
  </button>
  
  <button  onClick={this.selected}class="two">
  Select Cirlce 2
  </button>
    
  <button  onClick={this.selected}class="three">
  Select circle 3
  </button>
  <button  onClick={this.selected}class="four">
      Select Circle 4
  </button>
  
  
  </div>
  <div className="Circles">
    <div className="1">
    1
    </div>
    <div className="2">
    2
    </div>
    <div className="3">
    3
    </div>
    <div className="4">
    4
    </div>



    </div>
        </main>
      </div>
    );
  }
}

export default App;