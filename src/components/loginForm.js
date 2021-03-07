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

    onChangePassword = (event) => {
        console.log(event.target.value);
        this.setState({ password: event.target.value});
    }
    render () {
        return (
            <div>
                <input 
                    placeholder='Text'
                    type='text' 
                    onChange={this.onChangeEmail}
                    value={this.state.email}
                />
                <input 
                    placeholder='Password'
                    type='password' 
                    onChange={this.onChangePassword}
                    value={this.state.password}
                />
                <button onClick={() => this.setState( {email: ''})}>Clear text</button>
                <button onClick={() => this.setState( {password: ''})}>Clear password</button>
            </div>
        );
    }
}

export default LoginComponent;