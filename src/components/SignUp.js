import React, {Component} from 'react';

const initialState = {fullName:'',email:'',password:''}
class SignUp extends Component {
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

    render() {
        const {fullName, email, password} = this.state;
        console.log(this.state);
        return (
            <div>
                <h2>Sign Up </h2>
                <form action="" onSubmit={this.formhandler}>
                    <p>
                        <label htmlFor="">Full Name</label>
                        <input type="text" name="full_name" value={fullName} onChange={this.inputHandler}
                               placeholder="Full Name"/>
                    </p>
                    <p>
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" value={email} onChange={this.inputHandler}
                               placeholder="Email"/>
                    </p>

                    <p>
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" value={password} onChange={this.inputHandler}
                               placeholder="Password"/>
                    </p>
                    <button type="submit">Sign up</button>
                    <button type="submit" onClick={this.resetHandler}>Reset</button>
                </form>
            </div>
        );
    }
}

export default SignUp;