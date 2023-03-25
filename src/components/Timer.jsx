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

  handleTimer = () => {
    const { inputNumber } = this.state;
    let minutes = 0;
    let seconds = 0;

    if (inputNumber.includes('m') && inputNumber.includes('s')) {
      [minutes, seconds] = inputNumber
        .split('m')
        .map((item) => item.replace('s', ''));
    } else if (inputNumber.includes('m')) {
      minutes = inputNumber.replace('m', '');
    } else if (inputNumber.includes('s')) {
      seconds = inputNumber.replace('s', '');
    }

    this.setState({
      totalTime: Number(minutes) * 60 + Number(seconds),
      inputNumber: '',
    });

    this.setState({ minutes: Number(minutes), seconds: Number(seconds) });

    this.timer = setInterval(() => {
      const { totalTime } = this.state;

      if (totalTime >= 0) {
        this.setState({ totalTime: totalTime - 1 });

        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;

        this.setState({ minutes, seconds });
      }
    }, 1000);
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
          <span>{minutes.toString().padStart(2, '0')}</span>
          <span>:</span>
          <span>{seconds.toString().padStart(2, '0')}</span>
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
