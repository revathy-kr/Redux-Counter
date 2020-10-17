import React, { Component } from 'react';

class Counter extends Component<ICounterProps, {}> {
  render() {
    const { counter, increment, decrement, reset } = this.props;

    return (
      <div className="App" >
        <div>{counter} </div>
        < div >
          <button onClick={() => increment()}> INCREMENT BY 1 </button>
        </div>
        < div >
          <button onClick={() => decrement()}> DECREMENT BY 1 </button>
        </div>
        < button onClick={() => reset()} > RESET </button>
      </div>
    );
  }
}

export default Counter;

export interface ICounterProps {
  counter: number,
  increment: () => void,
  decrement: () => void,
  reset: () => void
}

