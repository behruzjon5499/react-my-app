import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                           
                            <Link className="navbar-brand" to="/"><img src="https://picsum.photos/50" style={{borderRadius:'100'}} alt=""/></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">

                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/news">News</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                </button>
                            </form>
                        </nav>
                    </div>
            </div>
        );
    }
}

export default Menu;