import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import News from "../../modules/news/news";
import About from "../../modules/about/about";
import Menu from "../../components/menu/menu";
import Contact from "../../modules/contact/contact";
import NewsView from "../../modules/news/NewsView";
import Home from "../../modules/home/home";
import Footer from "../../components/footer/Footer";
import ReduxExample from "../../modules/redux/reduxExample";
import Feedback from "../../modules/contact/feedback";
import EditContacts from "../../modules/contact/editContact";

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Menu/>

                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path={"/news/view/:id"} component={NewsView}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/test" component={ReduxExample}/>
                    <Route exact path="/feedback" component={Feedback}/>
                    <Route exact path="/contact/edit/:id" component={EditContacts}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Router;