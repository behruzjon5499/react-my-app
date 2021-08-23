import React, {Component} from 'react';
import axios from "axios";
import '../../assets/styles/news.css'
import {Link} from "react-router-dom";

class News extends Component {

    state = {news: [], topnews: [], tops: []}

    componentDidMount() {
        axios.get("https://reqres.in/api/users")
            .then(({data}) => this.setState({news: data.data}))
        axios.get("https://reqres.in/api/users/5")
            .then(({data}) => this.setState({topnews: data.data}))
        axios.get("https://reqres.in/api/users")
            .then(({data}) => this.setState({tops: data.data}))
    }

    render() {
        const {news} = this.state;
        const {topnews} = this.state;
        const {tops} = this.state;
        return (
            <div>
                <div className="slider bg-navy-blue bg-scroll pos-rel breadcrumbs-page">
                    <div className="container">
                        <h1>My first react app news</h1>
                        <div className="breadcrumbs-description">
                            Oldin bizda kein boshqalarda
                        </div>
                    </div>
                </div>

                <div className="container">
                    <section className="ftco-section testimony-section tour" id="testimonial">
                        <div className="ff">
                            <div className="row justify-content-center mb-5 pb-3">
                                <div className="col-md-4 heading-section ftco-animate">
                                    <h2 className="mb-4">Latest News</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8 col-sm-12 col-xs-12">
                                    <div className="big news-block">
                                        <Link  to={`/news/view/${topnews.id}`}
                                           className="news-block-link">
                                            <div className="news-item">
                                                <div className="grad"/>
                                                <div className="img">
                                                    <img src={topnews.avatar} alt=""/>
                                                </div>
                                                <div className="caption-text">
                                                    <div className="title-text">
                                                        {topnews.first_name} {topnews.last_name}
                                                    </div>
                                                    <div className="date-text">
                                                        <i className="fa fa-clock"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>


                                </div>


                                <div className="col-md-4 col-sm-12 col-xs-12">
                                    {
                                        tops.slice(0, 2).map((t, key) => {
                                            return (
                                                <div className="news-block"  key={key}>

                                                    <Link to={`/news/view/${t.id}`}
                                                       className="news-block-link">
                                                        <div className="news-item">
                                                            <div className="grad"/>
                                                            <div className="img">
                                                                <img src={t.avatar} alt=""/>
                                                            </div>
                                                            <div className="caption-text">
                                                                <div className="title-text">
                                                                    {t.first_name} {t.last_name}
                                                                </div>
                                                                <div className="date-text">
                                                                    <i className="fa fa-clock"/>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                </div>
                                            )
                                        })
                                    }


                                </div>
                            </div>
                            <div className="row">
                                {
                                    news.map((n, key) => {
                                        return (
                                            <div className="col-md-3 col-sm-6 col-xs-12" key={key}>
                                                <div className="news-block">
                                                    <Link to={`/news/view/${n.id}`}
                                                       className="news-block-link">
                                                        <div className="news-item">
                                                            <div className="grad"/>
                                                            <div className="img">
                                                                <img src={n.avatar} alt=""/>
                                                            </div>
                                                            <div className="caption-text">
                                                                <div className="title-text">
                                                                    {n.first_name} {n.last_name}
                                                                </div>
                                                                <div className="date-text">
                                                                    <i className="fa fa-clock"/>
                                                                    {
                                                                        n.email
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default News;