import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.poster} alt={`${movie.title} Poster`} className="movie-poster" />
            <h3>{movie.title}</h3>
            <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
            <p><strong>Director:</strong> {movie.director}</p>
        </div>
    );
};

export default MovieCard;
