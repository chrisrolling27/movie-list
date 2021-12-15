import React from 'react';
import axios from 'axios';

class MovieListEntries extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      watched: false,
      title: props.movie.title,
      id: props.movie.id
    }

    this.watchClick = this.watchClick.bind(this);
  }


  watchClick(event) {
    event.preventDefault();
    console.log('watch clicked');
    axios.put('/movies', {id: this.props.id})
    .then(//setstate!
      console.log('beep'))
  }


  render() {
    return (
      <div onClick={(event) => this.watchClick(event)}  >

        <ul>  {this.state.title}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; {this.state.watched ? 'Seen it!' : 'Not Yet...'} </ul>

      </div>
    )
  }

}






export default MovieListEntries;