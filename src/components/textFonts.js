import React from 'react';

const App = (props) => {
    return (
    <div style={{ 
        fontSize: `${props.size}px`,
        color: `${props.color}`,
        fontWeight: `${props.weight}`,
        textDecoration: `${props.decoration}`}}>{props.name}
    </div>);
}

class TextComponent extends React.Component {

render() {
    return (
    <div>
        <App name='Regular Text' size={20}  />
        <App name='Huge header' size={50} color="red"/>
        <App name='Danger notification' size={30} weight ="900" />
        <App name='Underlined text' size={40} decoration ="underline" />
    </div>
        )
    }
}

export default TextComponent;