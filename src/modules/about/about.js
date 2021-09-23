import React, {Component} from 'react';
import '../../assets/styles/style.css'

class About extends Component {

    state = {
        skills: [{'name': 'HTML', 'skill': '100', 'class': 'Skill-HTML'}, {
            'name': 'CSS',
            'skill': '70',
            'class': 'Skill-CSS'
        }, {'name': 'jQuery', 'skill': '50', 'class': 'Skill-jQuery'}, {
            'name': 'Javascript',
            'skill': '40',
            'class': 'Skill-JS'
        }, {'name': 'JAVA', 'skill': '60', 'class': 'Skill-JAVA'}, {'name': 'PHP', 'skill': '90', 'class': 'Skill-PHP'}]
    }

    render() {
        const {skills} = this.state
        return (
            <div style={{marginTop: 50}}>
                <div className="row">
                    <div className="col-md-6">
                        <h3> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, provident, tempora. Aliquam
                            asperiores, consequatur deserunt dolor doloribus eaque fuga laboriosam mollitia nisi odio
                            porro quo quos, sequi sit suscipit voluptas?
                        </h3>
                    </div>
                    <div className="col-md-6">
                        <img src="https://picsum.photos/400" alt=""/>
                    </div>
                </div>
                <h1 style={{textAlign: 'center'}}>About me</h1>

                <center>
                    <div id="SkillBox">
                        <img src="https://picsum.photos/70" alt="Skill Bar Progress"/>
                        {
                            skills.map((skil, key) => {

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


                <div style={{textAlign: "center"}}>
                    <iframe
                        width="800" height="515"
                        src="https://www.youtube.com/embed/ol0Wz6tqtZA"
                        frameBorder="0"
                        allow="accelerometer;
                           autoplay;
                           encrypted-media;
                           gyroscope;
                           picture-in-picture"
                        allowFullScreen
                        title="My application">
                    </iframe>
                </div>
                <div style={{marginTop: "30px"}}>
                    <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Tashkent%20qatortol%20xalq%20bank+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>

            </div>
        );
    }
}

export default About;