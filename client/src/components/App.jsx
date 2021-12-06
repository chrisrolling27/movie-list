import React from 'react';
import MovieList from './MovieList.jsx';

var moviesGiven = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];


class App extends React.Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!

    this.state = {
      counter: 42,
      movies : moviesGiven,
  };
    //this.handleClick = this.handleClick.bind(this);
  }

  render() {

   return <div> App here {this.state.counter}
   <MovieList movies={this.state.movies}/>

   </div>

  }

}



export default App;