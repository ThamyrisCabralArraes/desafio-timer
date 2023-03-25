import React, { Component } from 'react';

class Timer extends Component {
  state = {
    totalTime: 15 * 60,
    minutes: 0,
    seconds: 0,
    inputNumber: '',
  };

  handleChange = ({ target }) => {
    this.setState({ inputNumber: target.value });
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
          placeholder='ex: 5m 10s'
          value={inputNumber}
          onChange={this.handleChange}
        />

        <button>Iniciar</button>
      </div>
    );
  }
}

export default Timer;
