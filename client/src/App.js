import React, {Component} from 'react';
import io from 'socket.io-client';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buffer: ["hello", "ABC"],
      value: ''
    };
    this.socket = io();
  }

  componentDidMount() {
    let self = this;
    this.socket.emit('authenticate', {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiSm9obiIsImxhc3RfbmFtZSI6IkRvZSIsImVtYWlsIjoiam9obkBkb2UuY29tIiwiaWQiOjEyMywiaWF0IjoxNTE2NzAwOTU3LCJleHAiOjE1MTY3MTg5NTd9.oR4p07pfxHU7bL-utfGsEf_y05gH2MDebyzaJjBMAbc'})

      .on('authenticated', function() {
        console.log('authenticated');
      });

    this.socket.on('msg', function(msg) {
      console.log(msg);

      switch (msg.cmd) {
        case "look":
          let exits = "The exits are: ";
          for (let exit of msg.exits) {
            exits += exit.dir + ', ';
          }
          self.setState({
            buffer: [...self.state.buffer, msg.desc, exits]
          });
          break;
        case 'go':
          self.setState({
            buffer: [...self.state.buffer, msg.desc]
          });
          break;
        default:
          break;
      }

    });
  }

  onChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      let command = e.target.value;
      this.setState({
        value: ''
      });
      console.log(command);
      this.socket.emit('cmd', command);
    }
  };

  render() {
    return (
      <div className="app">
        <div className="left-container">
        </div>
        <div className="main-container">
          <div className="text-area">
            {
              this.state.buffer.map((line, idx) => {
                return <div className="line" key={idx}>{line}</div>;
              })
            }
          </div>
          <div className="input-area">
            <input type="text" value={this.state.value} onChange={this.onChange} onKeyPress={this.onKeyPress} />
          </div>
        </div>
        <div className="right-container">

        </div>
      </div>
    );
  }
}

export default App;
