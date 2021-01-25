import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div>
          {director.name}
          <ul>
            {director.movies.map(movie =>(
              <li>{movie}</li>
            ))}
          </ul>
          <br/>
          <br/>
        </div>
      ))}
    </div>
  );
}

export default Directors
