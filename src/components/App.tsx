import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RoomContainer from '../containers/RoomContainer';

const App = ({ socket, userId }) => {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <h2>Pokémon Battle</h2>
        </div>

        <Route
          exact={true}
          path="/rooms/:id"
          render={({ match, location }) => <RoomContainer socket={socket} userId={userId} roomId={match.params.id} />}
        />
      </div>
    </Router>
  );
};

export default App;
