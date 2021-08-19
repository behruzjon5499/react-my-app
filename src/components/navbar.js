import React, {Component} from 'react';
import {Link} from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <header>
                <nav>
                    <a href="#">LOGO</a>
                    <ul>
                        <li>
                            <Link to="/sign-in"> Login in </Link>
                        </li>
                        <li>
                            <Link to="/sign-up"> Sign up </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navbar;