import React from 'react';

class SignInFormComponent extends React.Component {
    
    state = {
        isSignedIn: false
    }

    changeState = () => {
        this.setState({isSignedIn : !this.state.isSignedIn})
    }

    render() {
        return (
            <div>
            {this.state.isSignedIn === true ? 
                <p>Hello user</p>
                :
                <button onClick={() => {setTimeout(this.changeState, 3000)}}>Sign In</button>}
            </div>
        )
    }
}

export default SignInFormComponent;