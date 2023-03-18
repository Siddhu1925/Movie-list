import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import GenreFilter from './GenreFilter';

const movies = [
  { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 },
  { title: 'The Godfather', genre: 'Crime', year: 1972 },
  { title: 'The Godfather: Part II', genre: 'Crime', year: 1974 },
  { title: 'The Dark Knight', genre: 'Action', year: 2008 },
  { title: '12 Angry Men', genre: 'Drama', year: 1957 },
  { title: "Schindler's List", genre: 'Drama', year: 1993 },
  { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966 },
  { title: 'Forrest Gump', genre: 'Drama', year: 1994 },
  { title: 'Inception', genre: 'Science Fiction', year: 2010 },
  { title: 'The Matrix', genre: 'Science Fiction', year: 1999 },
  { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991 },
  { title: 'Saving Private Ryan', genre: 'War', year: 1998 },
  { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993 },
  { title: 'Terminator 2: Judgment Day', genre: 'Science Fiction', year: 1991 },
  { title: 'The Lion King', genre: 'Animation', year: 1994 },
];

function App() {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    console.log(`Selected Genre: ${genre}`);
  };

  const genres = [...new Set(movies.map((movie) => movie.genre))];
  genres.unshift('All');

  const filteredMovies = selectedGenre === 'All' ? movies : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Top 15 Movies Of All Time</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <GenreFilter genres={genres} onGenreSelect={handleGenreSelect} />
          </div>
          <div className="col-md-9">
            <MovieList movies={filteredMovies} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
