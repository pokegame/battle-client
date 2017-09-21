import * as React from 'react';
import './TextBox.css';

const TextBox = ({ options }) => {
  const optionsClassName = [
    'battle-text-top-left',
    'battle-text-top-right',
    'battle-text-bottom-left',
    'battle-text-bottom-right'
  ];

  const choices = options.map((choice, index) => (
    <h4 className={optionsClassName[index]} onClick={choice.onClick}>{choice.text}</h4>
  ));

  if (choices.length === 0) {
    return (
      <div>
        <div className="battle-text">
          Waiting the opponent's decision...
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="battle-text text-box-left">
        @TODO
      </div>
      <div className="text-box-right">
        <div>
          {choices}
        </div>
      </div>
    </div>
  );
};

export default TextBox;
