import React, {Component} from "react";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state={
            number:0,
            role:[{admin:true,user:false}],
        }
    }
    clickHandler=()=>{
        console.log(this.state.number)
        this.setState({number:this.state.number +1})
    }
    render() {
        const {title,data}= this.props;
        return (
            <div>
                <h1>Today.uz</h1>
                <p>{title}, {data.name}</p>
                <h3>{this.state.number}</h3>
                <button onClick={this.clickHandler}> CLick</button>
            </div>
        )
    }
}
export default Sidebar;