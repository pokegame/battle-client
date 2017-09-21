import * as React from 'react';

const HitPointBar = ({maxHp, currentHp}) => {
  const percentage = ( currentHp / maxHp ) * 100;
  const style = {
    width: `${percentage}%`
  };

  return (
    <div className="hp-bar-fill" style={style} />
  );
};

export default HitPointBar;
