import React, { Children, Component } from 'react';

class Timer extends Component {
  state = {
    totalTime: 0,
    minutes: '00',
    seconds: '00',
    inputNumber: '',
  };

  handleChange = ({ target }) => {
    this.setState({ inputNumber: target.value });
  };

  handleStopTimer = () => {
    clearInterval(this.timer);
    this.setState({ minutes: '00', seconds: '00' });
  };

  render() {
    const { minutes, seconds, inputNumber } = this.state;

    return (
      <div>
        <div>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>

        <input
          type='text'
          placeholder='ex: 5m ou 5m 10s'
          value={inputNumber}
          onChange={this.handleChange}
        />

        <button onClick={this.handleTimer}>Iniciar</button>
        <button onClick={this.handleStopTimer}>Stop</button>
      </div>
    );
  }
}

export default Timer;
