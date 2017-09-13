import * as React from 'react';
import dimensions from '../data/dimensions';

const PokemonSprite = ({species, facing}) => {
  if (facing !== 'front' && facing !== 'back') {
    throw new Error('Facing must be front or back.');
  }

  const props = {
    style: {
      width: dimensions[species][facing].w,
      height: dimensions[species][facing].h,
    },
    src: facing === 'front' ?
      `http://www.pokestadium.com/sprites/xy/${species.trim().toLowerCase()}.gif` :
      `http://www.pokestadium.com/sprites/xy/back/${species.trim().toLowerCase()}.gif`
  };

  return (
    <img {...props} />
  );
};

export default PokemonSprite;
