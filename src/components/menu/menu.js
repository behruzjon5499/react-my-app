import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Menu extends Component {



    render() {
        return (
            <div>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#00B8CA'}}>
                            <Link className="navbar-brand" to="/"><img src="../../assets/images/logo.png" style={{width:'100',height:'100'}} alt=""/></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">

                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link  className="nav-link" to="/home">Home<span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/news">News</Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop"
                                           data-toggle="dropdown">
                                            Dropdown
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Link 1</a>
                                            <a className="dropdown-item" href="#">Link 2</a>
                                            <a className="dropdown-item" href="#">Link 3</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/test">Redux</Link>
                                    </li>
                                </ul>
                            </div>
                            <form className="form-inline my-2 my-lg-0">
                                <input style={{fontSize:15}} className="form-control mr-sm-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button style={{fontSize:15}} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                </button>
                            </form>
                        </nav>
                    </div>
            </div>
        );
    }
}

export default Menu;