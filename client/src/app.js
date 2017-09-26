import React from 'react';
import ReactDOM from 'react-dom';
import MovieContainer from './containers/MovieContainer'

window.addEventListener('load', function () {
  ReactDOM.render(
    <MovieContainer/>,
    document.getElementById('app')
  );
});