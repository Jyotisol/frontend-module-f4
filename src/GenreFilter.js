import React from 'react';

function GenreFilter({ genres, onGenreSelect }) {
  return (
    <div>
      <h2>Genres</h2>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => onGenreSelect(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
