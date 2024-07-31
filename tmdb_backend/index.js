const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());

TMDB_API_KEY='d266bcef45e2dfeef4079859d0d386e6&language=en-US&page=1'

app.get('/api/movies', async (req, res) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`);
        const movies = response.data.results.map(movie => ({
            title: movie.title,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            actors: movie.cast ? movie.cast.slice(0, 3).map(actor => actor.name) : [],
            director: movie.crew ? movie.crew.find(member => member.job === 'Director').name : 'Unknown'
        }));
        res.json(movies);
    } catch (error) {
        console.error('Error fetching data from TMDB:', error);
        res.status(500).json({ error: 'Failed to fetch movie data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
