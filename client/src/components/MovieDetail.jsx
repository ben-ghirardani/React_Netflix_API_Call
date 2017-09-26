import React from 'react';

const MovieDetail = ({movie}) => {
console.log(movie)
    if(!movie){
        return null;
    }

    return (
        <div>
        <h3>{ movie.show_title }</h3>
        <p>{ movie.summary }</p>
        {/* <img src={ movie.poster } alt={ movie.summary } height="150" width="100"/> */}
        <a href={movie.poster}>{movie.show_title} </a>
        </div>
    );
}

export default MovieDetail;