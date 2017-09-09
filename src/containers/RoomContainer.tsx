import * as React from 'react';
import BattleScene from '../components/BattleScene';
import * as Protocol from '../constants';

export interface Props {
  socket: SocketIOClient.Socket;
  roomId: string;
}

export interface State {
  rooms: {
    [roomId: string]: {
      battleState?: {};
      choices?: {};
    }
  };
}

export default class RoomContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      rooms: {}
    };
  }

  join(roomId: string) {
    this.props.socket.emit('join', roomId);
  }

  handleMessage(data: any) {
    const roomId = data.room;
    const action = data.payload.type;

    const updates = 
      action === Protocol.INITIAL_BATTLE_STATE ||
      action === Protocol.UPDATE_BATTLE_STATE ? { battleState: data.payload.battleState } :
      action === Protocol.REQUEST_DECISION ? { choices: data.payload.choices } :
      undefined
    ;

    if (updates === undefined) {
      return;
    }

    this.setState({
      rooms: {
        ...this.state.rooms,
        [roomId]: {
          ...this.state.rooms[roomId],
          ...updates
        }
      }
    });
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.roomId in this.state.rooms) {
      return;
    }

    this.join(nextProps.roomId);
  }

  componentDidMount() {
    this.props.socket.on('message', this.handleMessage.bind(this));
    this.join(this.props.roomId);
  }

  render() {
    const activeRoom = this.props.roomId;
    const room = this.state.rooms[activeRoom];

    return (
      <div className="App">
        Container component ({activeRoom}):

        {room && room.battleState && (
          <BattleScene battleState={room.battleState} />
        )}
      </div>
    );
  }
}