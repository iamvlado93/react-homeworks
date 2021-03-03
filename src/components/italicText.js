import React from 'react';

class ItalicComponent extends React.Component {
  state = {
    italic: false
  }

  render() {
    return (
      <p className={ this.state.italic ? 'italic-font' : '' } 
         onClick = {() => this.setState({italic : !this.state.italic})}>Привет
      </p>
    )
  }
}

export default ItalicComponent;