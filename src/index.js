import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      message: "hi!"
    };
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
