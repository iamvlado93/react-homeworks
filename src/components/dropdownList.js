// Твой вариант, который мы делали в классе.

import React from 'react';

class DropdownComponent extends React.Component {

  ingredients = [
    { text: 'Сыр', id: '0'},
    { text: 'Грибы', id: '1'},
    { text: 'Ветчина', id: '2'},
    { text: 'Ананас', id: '3'},
    { text: 'Соус', id: '4'}
  ];

  state = {
    opened: false
  }

  onToggle = () => {
    this.setState({ opened: !this.state.opened});
  }

  render() {
    return (
    <div>
      <button onClick={this.onToggle}>Ингредиенты{this.state.opened ? '☝🏻' : '👇🏻'}</button>
      
      { this.state.opened && this.ingredients.map((item) => {
          return <div key={item.id}>{item.text}</div>
        })}
    </div>
    );
  }
}

//  Мой вариант изначальный. Получилось что-то, но не работает скрытие меню

// class DropdownComponent extends React.Component {

//   constructor() {
//     super();
      
//   this.state = {
//     showMenu: false,
//   }  
//     this.showMenu = this.showMenu.bind(this);
//   }
    
//   showMenu(event) {
//       event.preventDefault();

//       this.setState({
//         showMenu: true,
//     });
//   }
  
//   render() {

//   const textChange = this.state.showMenu ?  "Hide": "Show"

//   return (
//     <div className='container'>Ingredients
//         <button onClick={this.showMenu}>{textChange}</button>
//             {this.state.showMenu ? (
//             <div className="menu">
//                 <div className='item'>Сыр</div>
//                 <div className='item'>Ветчина</div>
//                 <div className='item'>Соус</div>
//                 <div className='item'>Ананас</div>
//                 <div className='item'>Грибы</div>
//             </div>)
//             : 
//             (null) 
//           }
//         </div>
//       );
//     }
//   } 

export default DropdownComponent;