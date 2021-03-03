import React from 'react';

class ActiveSpinnerComponent extends React.Component {

    state = {
        animated: false, 
    }

    loading = () => {
        this.setState({animated: !this.state.animated})
    }

    render() {

        const spinnerOn = this.state.animated ? "loader loader-animated" : "loader"
        const textChange = this.state.animated ?  "Off": "On"
        
        return(
        <div>
            <div className={spinnerOn}></div>
            <button onClick={this.loading}>{textChange}</button>
        </div>
    )
  }
}

export default ActiveSpinnerComponent;