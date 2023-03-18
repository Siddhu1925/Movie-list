import React from 'react';

const GenreFilter = ({ genres, handleFilter }) => {
  return (
    <div className="genre-filter">
      <h2>Filter by Genre</h2>
      <div className="genre-buttons">
        {genres.map(genre => (
          <button key={genre} onClick={() => handleFilter(genre)}>{genre}</button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
