import React from 'react';
import data from '../data.json';

const UserItem = (props) => {
    return (
        <div className='user'>
            <h3>{props.name}</h3>
            <h4>{props.surname}</h4>
        </div>
    )
}

class JSONCycleComponent extends React.Component {
    render() {
        console.log(data);
        return (
            <div className='user-list'>
                {data.map(item => <UserItem 
                    key={item._id} 
                    name = {item.name.first} 
                    surname = {item.name.last}/>)}
            </div>
        )
    }
}

export default JSONCycleComponent;