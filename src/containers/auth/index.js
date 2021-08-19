import React, {Component} from 'react';
import Auth from "./auth";
import SignUp from "./signUp";

const initialState = {fullName: '', email: '', password: '', signIn: false}

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = initialState
    }
    inputHandler = e => {
        e.preventDefault();
        console.log(e.target);
        const {name, value} = e.target;

        this.setState({[name]: value})
    }
    formhandler = e => {
        e.preventDefault();
        console.log('Form Submitted');
    }
    resetHandler = () => {
        this.setState(initialState)
    }
    authHandler = ()=>{
        this.setState(prevState=>({signIn: !prevState.signIn}));
    }

    render() {
        const {signIn} = this.state;
        console.log(signIn);
        return (
            <div>
                <h1> Sign {signIn ? 'in' :'up'}</h1>
                {
                    signIn ?
                        <Auth />
                        :
                        <SignUp />
                }
                <p></p>
                <button onClick={this.authHandler}>Sign {signIn ? 'up' : 'in'}</button>
            </div>
        )

    }
}

export default SignIn;