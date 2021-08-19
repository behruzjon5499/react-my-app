import React, {Component} from 'react';
import {BrowserRouter,Route,Link,Switch} from "react-router-dom";
import News from "../../modules/news/news";
import About from "../../modules/about/about";
import Menu from "../../components/menu/menu";
import Contact from "../../modules/contact/contact";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Menu/>
                <Switch>
                    <Route exact path="/news" component={News} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;