import React, {Component} from 'react';

class SignUp extends Component {
    render() {
        return (
            <div>
                <form action="" onSubmit={this.formhandler}>
                    <p>
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" onChange={this.inputHandler}
                               placeholder="Email"/>
                    </p>
                    <p>
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" onChange={this.inputHandler}
                               placeholder="Password"/>
                    </p>
                </form>
            </div>
        );
    }
}

export default SignUp;