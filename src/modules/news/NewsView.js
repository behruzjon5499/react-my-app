import React, {Component} from 'react';
import axios from "axios";
import '../../assets/styles/style.css'
import { withRouter } from "react-router";
class NewsView extends Component {
    state = {news: []}

    componentDidMount() {
        const {id} = this.props.match.params
        axios.get(`https://reqres.in/api/users/${id}`)
            .then(({data}) => this.setState({news: data.data}))
    }

    render() {
        const {news} = this.state;
        return (
            <div >
                <h2 style={{textAlign:"center"}}>
                    {news.email}
                </h2>
                <div className="row news">

                    <div className="col-md-6">
                     <h3>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur beatae dicta dolor
                        doloremque esse ex expedita fugit,
                        laboriosam laudantium pariatur possimus quaerat quasi quia tempora temporibus, tenetur
                        voluptatem voluptatum.</h3>
                    </div>
                    <div className="col-md-6">
                        <img className="news-img" src={news.avatar}  alt=""/>
                    </div>
                </div>

                <div className="row">

                </div>

            </div>
        );
    }
}

export default withRouter(NewsView);