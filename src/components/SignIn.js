import React, {Component} from 'react';

const initialState = {fullName: '', email: '', password: '', authType: 'signUp'}

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
    authHandler =(type)=>{
        this.setState({authType:type})
    }

    render() {
        const {authType} = this.state;
        console.log(authType === 'signUp');
        if (authType === 'signUp') {
            return <div>

            </div>
        } else {
            return <div>

            </div>
        }

    }
}

export default SignIn;