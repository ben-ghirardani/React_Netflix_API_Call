import React from 'react';
import MovieSelector from '../components/MovieSelector';
import MovieDetail from '../components/MovieDetail'

class MovieContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            movies: [],
            selectedMovie: null
        }
    }

    componentDidMount() {
        const url = "https://netflixroulette.net/api/api.php?actor=Nicolas%20Cage"
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            if(xhr.status === 200){
                const data = JSON.parse(xhr.responseText);
                this.setState({ 
                    movies: data
                 })
            }
        }
        xhr.send();
    }

    handleSelectedMovie(movie){
        this.setState( { selectedMovie: movie });
    }


    render(){
        return (
            <div>
                <h2>Movie Container</h2>
                <MovieSelector movies={ this.state.movies } handleSelectedMovie={this.handleSelectedMovie.bind(this)} />
                 <MovieDetail movie={ this.state.selectedMovie }/> 
            </div>         
        );
    }

}

export default MovieContainer;