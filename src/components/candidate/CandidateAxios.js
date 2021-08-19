import React, {Component} from 'react';
import axios from "axios";
class CandidateAxios extends Component {
    state = {users: [], name: '', job: ''}

    getCandidate = (num = 1) => {
        const url = `https://reqres.in/api/users?page=${num}`;
       axios(url).then(({data})=>this.setState({users:data.data}))
    }

    createData=()=>{
        const url = `https://reqres.in/api/users`;
        const {name,job}=this.state;
     axios.post(url,{name,job})
    .then(data =>this.setState(prevState=>({users:[...prevState.users,{...data,first_name:data.name,last_name:data.job}]})))
    .catch(err=>console.error(err))
    }

    handlerInput=(e)=>{
        const {name,value}=e.target;
        this.setState({[name]:value});
    }
    render() {
        const {users} = this.state
        console.log(this.state)
        return (
            <div>
                <div>
                    <p>
                        <input type="text" name="name" onChange={this.handlerInput} placeholder="Name"/>
                    </p>
                    <p>
                        <input type="text" name="job" onChange={this.handlerInput} placeholder="Job"/>
                    </p>
                    <button onClick={this.createData}> Create</button>
                </div>
                <h1>Candidate list</h1>
                <button onClick={this.getCandidate}>Candidate</button>
                <ul>
                    {
                        users.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img src={
                                        item.avatar
                                    } alt=""/>
                                    <h3>{item.first_name}</h3>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={() => this.getCandidate(1)}>Page 1</button>
                <button onClick={() => this.getCandidate(2)}>Page 2</button>
            </div>
        );
    }
}
export default CandidateAxios;