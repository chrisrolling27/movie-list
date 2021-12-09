import React from 'react';
import MovieListEntries from './MovieListEntries.jsx';

class MovieList extends React.Component {

  constructor(props) {
    super(props);

    //this.handleClick = this.handleClick.bind(this);
  }

  render() {
    //const movies = this.props.movies.filter()
    var filtered = this.props.movies.filter(movie => movie.title.includes(this.props.query));

    return  <div className="mlisters">
      Number of movies: {this.props.movies.length}

      {filtered.map((movie, i) =>
        <MovieListEntries movie={movie}
          key={i} />)}

    </div>
    }

}




export default MovieList;