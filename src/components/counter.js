import React from 'react';

class CounterComponent extends React.Component {
    state = {
            number: this.props.default
          };
        
          plus = () => {
            this.setState({ number: this.state.number + 1 });
          }
        
          minus = () => {
            this.setState({ number: this.state.number - 1 });
          }
        
          render () {
            return (
            <div>
              <button onClick={this.plus}>+</button>
              {this.state.number}
              <button onClick={this.minus}>-</button>
            </div>
            )
          }
}

export default CounterComponent;