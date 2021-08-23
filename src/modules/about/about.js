import React, {Component} from 'react';
import '../../assets/styles/style.css'
class About extends Component {

    state  =  {skills:[{'name':'HTML','skill':'100','class':'Skill-HTML'},{'name':'CSS','skill':'70','class':'Skill-CSS'},{'name':'jQuery','skill':'50','class':'Skill-jQuery'},{'name':'Javascript','skill':'40','class':'Skill-JS'},{'name':'JAVA','skill':'60','class':'Skill-JAVA'},{'name':'PHP','skill':'90','class':'Skill-PHP'}]}

    render() {
        const {skills} = this.state
        return (
            <div style={{marginTop:50}}>
                <div className="row">
                    <div className="col-md-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, provident, tempora. Aliquam asperiores, consequatur deserunt dolor doloribus eaque fuga laboriosam mollitia nisi odio porro quo quos, sequi sit suscipit voluptas?
                    </div>
                    <div className="col-md-6">
                        <img src="https://picsum.photos/400" alt=""/>
                    </div>
                </div>
                <h1 style={{textAlign:'center'}}>About me</h1>

    <center>
        <div id="SkillBox">
            <img src="https://picsum.photos/70" alt="Skill Bar Progress"/>
            {
                skills.map((skil,key) =>{

                    return (
                <div className="SkillBar" key={key}>
                <div id={skil.class} style={{width: skil.skill + '%'}}>
                <span className="Skill-Area ">{skil.name}</span>
                <span className="PercentText ">{skil.skill}%</span>
                </div>
                </div>
                )
            })

            }


        </div>
    </center>


                <div id="map-canvas"/>
            </div>
        );
    }
}

export default About;