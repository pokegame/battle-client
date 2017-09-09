import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as io from 'socket.io-client';
import App from './App';
import './index.css';

const serverEndpoint = process.env.REACT_APP_SERVER_ENDPOINT || '/';
const socket = io(serverEndpoint);

ReactDOM.render(
  <App socket={socket} />,
  document.getElementById('root') as HTMLElement
);
