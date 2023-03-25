import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    const { handleFunction, text, className } = this.props;

    return (
      <button
        className={className}
        onClick={handleFunction}
      >
        {text}
      </button>
    );
  }
}

export default Buttons;
