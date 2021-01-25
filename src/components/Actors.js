import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div>
          {actor.name}
          <ul>
            {actor.movies.map(movie =>(
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

export default Actors;
