import React from 'react';

class LoginComponent extends React.Component {

    state = {
        email: '',
        password: '',
    }

    onChangeEmail = (event) => {
        console.log(event.target.value);
        this.setState({ email: event.target.value});
    }
    render () {
        return (
            <div>
                <input 
                    placeholder='Type'
                    type='text' 
                    onChange={this.onChangeEmail}
                    value={this.state.email}/>
                <button onClick={() => this.setState( {email: ''})}>Clear</button>
            </div>
        );
    }
}

export default LoginComponent;