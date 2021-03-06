import React from 'react';
import initialItems from './initialItems.json'; 

class ToDoComponent extends React.Component {

    state = {
        todoItems: initialItems,
        newItem: '' 
    }

    onChangeText = (event) => {
        this.setState({ newItem: event.target.value });
    }    

    onAddItem = () => {
        const newItems = [...this.state.todoItems];
        
        const newTodoItem = {
            id: this.state.todoItems.length,
            text: this.state.newItem
        }

        newItems.push(newTodoItem);

        this.setState( {todoItems: newItems, newItem: ''});

    }

    render() {
        return (
        <div>
            {this.state.todoItems.map((item) => {
                return<div key={item.id}>{item.text}</div>
            })}
            <input type="text" onChange={this.onChangeText} value={this.state.newItem}/>
            <button onClick={this.onAddItem}>Add</button>
        </div>
        )

    }

}

export default ToDoComponent;