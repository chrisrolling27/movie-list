import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 'hizz' };
    //this.handleClick = this.handleClick.bind(this);
  }

  render() {
   return <div> Hello {this.state.counter}  </div>
  }
}



export default App;