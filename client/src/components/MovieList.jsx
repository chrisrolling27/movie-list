import React from 'react';
import MovieListEntries from './MovieListEntries.jsx';



class MovieList extends React.Component {

  constructor(props) {
    super(props);


    //this.handleClick = this.handleClick.bind(this);
  }

  render() {

   return <div>
     MovieList here  {this.props.movies.length}
     <MovieListEntries />
     </div>

  }

}




export default MovieList;