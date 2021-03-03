import React from 'react';

class DropdownComponent extends React.Component {
    
    constructor() {
      super();
      
      this.state = {
        showMenu: false,
      }
      
      this.showMenu = this.showMenu.bind(this);
    }
    
    showMenu(event) {
      event.preventDefault();

      this.setState({
        showMenu: true,
      });
    }
  
    render() {

        const textChange = this.state.showMenu ?  "Hide": "Show"

        return (
        <div className='container'>Ingredients
            <button onClick={this.showMenu}>{textChange}</button>
            
          
        {this.state.showMenu ? (
            <div className="menu">
                <div className='item'>Сыр</div>
                <div className='item'>Ветчина</div>
                <div className='item'>Соус</div>
                <div className='item'>Ананас</div>
                <div className='item'>Грибы</div>
            </div>)
            : 
            (null) 
          }
        </div>
      );
    }
  }

export default DropdownComponent;