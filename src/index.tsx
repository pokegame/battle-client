import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as io from 'socket.io-client';
import * as Cookies from 'js-cookie';
import AppContainer from './containers/AppContainer';
import './index.css';

const battleServerEndpoint = process.env.REACT_APP_BATTLE_SERVER || 'http://battle.pokegame.dev';

const socket = io(battleServerEndpoint, {
  'query': 'auth_token=' + encodeURIComponent((Cookies.get('token') || ''))
});

ReactDOM.render(
  <AppContainer socket={socket} />,
  document.getElementById('root') as HTMLElement
);
