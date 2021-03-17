import React from 'react';

class SpinnerComponent extends React.Component {

state = {
    animation: false
}
  
playAnimation = () => this.state.animation ? this.setState({ animation: false }) : this.setState({ animation: true })
  
render() {
    return (

        <div> 
            {this.state.animation === true ?
            <div onClick={this.playAnimation} className='loader loader-animated'></div> 
            : 
            <button onClick={this.playAnimation} className='button'>Play</button> }
        </div>
        )
    }
}

export default SpinnerComponent;