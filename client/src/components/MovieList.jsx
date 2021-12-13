import React from 'react';
import MovieListEntries from './MovieListEntries.jsx';

class MovieList extends React.Component {

  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
  }

  render() {

    var filtered = this.props.movies.filter(movie => movie.title.toLowerCase().includes(this.props.query.toLowerCase()));


    return <div className="mlisters">

      {filtered.map((movie, i) =>
        <MovieListEntries movie={movie}
          key={i} />)}

    </div>
  }

}

export default MovieList;