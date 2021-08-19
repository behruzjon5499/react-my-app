import React, {Component} from 'react';
import axios from "axios";

class News extends Component {

    state = {users: []}


    componentDidMount() {
        axios.get("https://reqres.in/api/users")
            .then(({data})=>this.setState({users:data.data}))
    }

    render() {

        const {users} = this.state;

        console.log(users);
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>News</h1>
                <div className="row">
                    {
                        users.map((user, index) => {
                            return (
                                <div className="col-md-3">
                                    <div className="card">
                                        <img className="card-img-top" src={user.avatar}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                                            <p className="card-text">{user.email}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default News;