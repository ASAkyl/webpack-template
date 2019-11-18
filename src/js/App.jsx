import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const message = 'Hello World';

    return (
      <>
        {message}
      </>
    );
  }
}

export default App;
