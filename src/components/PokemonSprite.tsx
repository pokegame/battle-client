import * as React from 'react';

export const PokemonSpriteFront = ({species, className}) => (
  <img className={className} src={`http://www.pokestadium.com/sprites/xy/${species.trim().toLowerCase()}.gif`} />
);

export const PokemonSpriteBack = ({species, className}) => (
  <img className={className} src={`http://www.pokestadium.com/sprites/xy/back/${species.trim().toLowerCase()}.gif`} />
);
