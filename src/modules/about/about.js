import React, {Component} from 'react';
import '../../assets/styles/style.css'
class About extends Component {
    render() {
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
            <div className="SkillBar">
                <div id="Skill-HTML">
                    <span className="Skill-Area ">HTML</span>
                    <span className="PercentText ">100%</span>
                </div>
            </div>

            <div className="SkillBar">
                <div id="Skill-CSS">
                    <span className="Skill-Area ">CSS/CSS3</span>
                    <span className="PercentText ">70%</span>
                </div>
            </div>

            <div className="SkillBar">
                <div id="Skill-jQuery">
                    <span className="Skill-Area ">jQuery</span>
                    <span className="PercentText ">40%</span>
                </div>
            </div>

            <div className="SkillBar">
                <div id="Skill-JS">
                    <span className="Skill-Area ">Javascript</span>
                    <span className="PercentText ">65%</span>
                </div>
            </div>

            <div className="SkillBar">
                <div id="Skill-JAVA">
                    <span className="Skill-Area ">JAVA </span>
                    <span className="PercentText ">25%</span>
                </div>
            </div>

            <div className="SkillBar">
                <div id="Skill-PHP">
                    <span className="Skill-Area ">PHP </span>
                    <span className="PercentText ">50%</span>
                </div>
            </div>

        </div>
    </center>


                <div id="map-canvas"/>
            </div>
        );
    }
}

export default About;