import * as React from 'react';
import App from '../components/App';

export interface Props {
  socket: SocketIOClient.Socket;
}

export interface State {
  userId?: string;
}

export default class AppContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      userId: undefined
    };
  }

  componentDidMount() {
    this.props.socket.emit('whoami', (userId) => {
      this.setState({
        userId
      });
    });
  }

  render() {
    return (
      this.state.userId !== undefined ? (
        <App socket={this.props.socket} userId={this.state.userId} />
      ) : (
        <div />
      )
    );
  }
}
