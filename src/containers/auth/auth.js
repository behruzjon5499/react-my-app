import React, {Component} from 'react';

class Auth extends Component {
    render() {
        return (
            <div>
                <form action="" onSubmit={this.formhandler}>
                    <p>
                        <label htmlFor="">Full Name</label>
                        <input type="text" name="full_name" onChange={this.inputHandler}
                               placeholder="Full Name"/>
                    </p>
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
                    <br/>
                </form>
            </div>
        );
    }
}

export default Auth;