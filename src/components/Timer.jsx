import React, { Children, Component } from 'react';

class Timer extends Component {
  state = {
    totalTime: 0,
    minutes: '00',
    seconds: '00',
    inputNumber: '',
    finished: false,
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

      if (totalTime === 0) {
        clearInterval(this.timer);
        this.setState({ finished: true });
      }
    }, 1000);
  };

  handleStopTimer = () => {
    clearInterval(this.timer);
    this.setState({ minutes: '00', seconds: '00' });
  };

  handleFineshed = () => {
    this.setState({ finished: false });
  };

  render() {
    const { minutes, seconds, inputNumber, finished } = this.state;

    return (
      <div className='flex flex-col justify-center items-center mt-10 gap-5'>
        <div>
          <span className='countdown font-mono text-6xl'>
            {minutes.toString().padStart(2, '0')}
          </span>
          <span className='countdown font-mono text-6xl'>:</span>
          <span className='countdown font-mono text-6xl'>
            {seconds.toString().padStart(2, '0')}
          </span>
        </div>

        <input
          className='input input-bordered rounded-md input-accent w-full max-w-xs'
          type='text'
          placeholder='ex: 5m ou 5m 10s'
          value={inputNumber}
          onChange={this.handleChange}
        />

        <div className='flex justify-around  w-full max-w-xs'>
          <button
            onClick={this.handleTimer}
            className='btn btn-primary w-24'
          >
            Start
          </button>
          <button
            onClick={this.handleStopTimer}
            className='btn btn-accent w-24'
          >
            Stop
          </button>
        </div>

        {finished && (
          <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='text-2xl'>Time is Over!</h1>
            <button
              onClick={this.handleFineshed}
              className='btn btn-success w-24'
            >
              Ok
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Timer;
