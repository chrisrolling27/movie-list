import React from 'react';
import MovieList from './MovieList.jsx';


var moviesGiven = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];


class App extends React.Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      counter: 42,
      movies: [],
      searchtext: '',
      query: '',
    };
    //this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState({movies: moviesGiven})
  }

  onChange(event) {
    this.setState({ searchtext: event.target.value });

  }

  onClick(event) {
    this.setState({ query: this.state.searchtext });
    event.preventDefault();
  }

  render() {

    return (

      <div>
        <form>
          <input type="text" value={this.state.searchtext} onChange={this.onChange} placeholder={"Search..."} />
          <button onClick={(event) => this.onClick(event)} >Go...</button>
        </form>
        <div>  . </div>


        <MovieList movies={this.state.movies} query={this.state.query}/>
      </div>
    );
  }
}



export default App;