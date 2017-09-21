import * as React from 'react';
import './BattleScene.css';
import HitPointBar from './HitPointBar';
import PokemonSprite from './PokemonSprite';

const BattleScene = (props) => {
  const { battleState, player } = props;

  const opponentPlayer = battleState.actors.find((actor: string) => actor !== player);

  const userPokemonName = battleState.battlers[player];
  const opponentPokemonName = battleState.battlers[opponentPlayer];

  const userPokemon = battleState.pokemon[userPokemonName];
  const opponentPokemon = battleState.pokemon[opponentPokemonName];

  return (
    <div className="battle-scene">
      <div className="box-top-left">
        <h2 className="pokemon-name">{opponentPokemon.species}</h2>
        <div className="hp-bar-top">
          <HitPointBar maxHp={opponentPokemon.maxHitPoint} currentHp={opponentPokemon.hitPoint} />
        </div>
        <h4 className="level">Lvl. {opponentPokemon.level}</h4>
      </div>
      <div className="box-top-right">
        <PokemonSprite facing="front" species={opponentPokemon.species} />
      </div>
      <div className="box-bottom-left">
        <PokemonSprite facing="back" species={userPokemon.species} />
      </div>
      <div className="box-bottom-right">
        <h2 className="pokemon-name"> {userPokemon.species}</h2>
        <div className="hp-bar-bottom">
          <HitPointBar maxHp={userPokemon.maxHitPoint} currentHp={userPokemon.hitPoint} />
        </div>
        <h4 className="level">Lvl. {userPokemon.level}</h4>
        <h4 className="hp">{userPokemon.hitPoint}/{userPokemon.maxHitPoint}</h4>
      </div>
      <div className="text-box">
        {props.children}
      </div>
    </div>
  );
};

export default BattleScene;
