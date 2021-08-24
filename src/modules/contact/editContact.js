import React, {useEffect, useState} from 'react';
import '../../assets/styles/contact.css'
import 'font-awesome/css/font-awesome.min.css';
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {useHistory} from "react-router"
import {Link, useParams} from "react-router-dom";

const EditContacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const {id} = useParams()
    const contacts = useSelector(state => state)
    const currentContact = contacts.find(contact => contact.id === parseInt(id))

    useEffect(()=>{
        if (currentContact){
        setName(currentContact.name);
        setEmail(currentContact.email);
        setPhone(currentContact.phone);
        setSubject(currentContact.subject);
        setMessage(currentContact.message);
        }
    },[currentContact])


    const history = useHistory()
    const dispatch = useDispatch()
    const deleteContact=()=>{
        dispatch({type:'DELETE_CONTACT',payload:id})
        toast.success('Delete Contact Successfully')
    }
    const editContact = (e) => {
        e.preventDefault();

        if (!email || !name || !subject || !phone) {
            return toast.warning('Please to`ldiring');
        }
        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            subject,
            phone,
            message
        }
        dispatch({type: 'UPDATE_CONTACT', payload: data})
        toast.success('Update Successfully')
        history.push('/')
    }
    return (

        <div>
            <section className="contact-page-section">
                <div className="container">
                    <div className="sec-title">
                        <div className="row">
                            <div className="col-md-10">
                                <h2 style={{display:'inline'}}>Update Contact.</h2>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-sm btn-info" style={{marginTop:20}}>
                                    <Link to={`/feedback`} classname="" style={{color:'black'}}>Feedback</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="form-column col-md-8 col-sm-12 col-xs-12">
                                <div className="inner-column">

                                    <div className="contact-form">
                                        <form onSubmit={editContact}>
                                            <div className="row clearfix">
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input type="text" name={name} placeholder="Name" value={name}
                                                           onChange={e => setName(e.target.value)}/>
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input type="email" name={email} placeholder="Email"  value={email}
                                                           onChange={e => setEmail(e.target.value)}/>
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input type="text" name={subject} placeholder="Subject"  value={subject}
                                                           onChange={e => setSubject(e.target.value)}/>
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input type="text" name={phone} placeholder="Phone"  value={phone}
                                                           onChange={e => setPhone(e.target.value)}/>
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                                    <textarea name={message} placeholder="Massage" value={message}
                                                              onChange={e => setMessage(e.target.value)}></textarea>
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                                    <button type="submit" className="theme-btn btn-style-one">Send
                                                        Now
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>

                            <div className="info-column col-md-4 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <h2>Contact Info</h2>
                                    <ul className="list-info">
                                        <li><i className="fas fa-globe"></i>123 lorem ispum Abc, Street Chandigarh.
                                        </li>
                                        <li><i className="far fa-envelope"></i>example@test</li>
                                        <li><i className="fas fa-phone"></i> 1-234-567-890 1-234-567-890</li>
                                    </ul>
                                    <ul className="social-icon-four">
                                        <li className="follow">Follow on:</li>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <div className="contactPage">
                <div className="abs">
                    <div className="map1">
                        <div id="map1"/>
                    </div>
                    <div className="small_container section-gap">
                        <div className="info-box scrollYAll">
                            <div className="box">
                                <div className="title"/>
                                <a onClick="mapPanTo(41.311081, 69.240562); return false;"
                                   className="address active"/>
                                <div className="icon-text">
                                    <svg className="svg1" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"
                                         width="1.9662mm"
                                         height="1.9662mm" version="1.1"
                                         viewBox="0 0 3.3 3.3"
                                         xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g>
                                            <metadata/>
                                            <path
                                                d="M1.43 1.5l0.15 -0.23c0,0 -0.13,-0.13 -0.18,-0.18 -0.06,-0.05 -0.22,-0.22 -0.22,-0.22l-0.19 0.19c-0.1,0.1 -0.09,0.34 0.41,0.85 0.5,0.5 0.74,0.51 0.85,0.41l0.19 -0.19c0,0 -0.14,-0.14 -0.19,-0.19 -0.05,-0.05 -0.21,-0.21 -0.21,-0.21l-0.23 0.15c-0.09,-0.09 -0.38,-0.38 -0.38,-0.38zm0.23 -1.5c-0.91,0 -1.65,0.74 -1.65,1.65 0,0.91 0.74,1.65 1.65,1.65 0.91,0 1.65,-0.74 1.65,-1.65 0,-0.91 -0.74,-1.65 -1.65,-1.65zm0 0.1c0.41,0 0.8,0.16 1.09,0.45 0.29,0.29 0.45,0.68 0.45,1.1 0,0.41 -0.16,0.8 -0.45,1.09 -0.29,0.29 -0.68,0.45 -1.09,0.45 -0.41,0 -0.8,-0.16 -1.1,-0.45 -0.29,-0.29 -0.45,-0.68 -0.45,-1.09 0,-0.41 0.16,-0.8 0.45,-1.1 0.29,-0.29 0.68,-0.45 1.1,-0.45z"/>
                                        </g>
                                    </svg>
                                    <p><br/></p>
                                </div>
                                <div className="icon-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1.944mm"
                                         height="1.9439mm" version="1.1"
                                         viewBox="0 0 3.23 3.23"
                                         xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g>
                                            <metadata/>
                                            <g>
                                                <path
                                                    d="M1.34 1.86c0,0.05 0.01,0.09 0.01,0.13 -0,0.05 -0.02,0.04 -0.07,0.06 -0.03,0.01 -0.06,0.02 -0.1,0.03 -0.01,0 -0.02,0 -0.02,0.01 -0.01,0 -0.02,0 -0.02,0.01 -0.04,0.01 -0.06,0.02 -0.07,0 -0,-0 -0,-0.01 -0.01,-0.01 -0.02,-0.02 -0.04,-0.05 -0.05,-0.08 -0.01,-0.03 -0,-0.06 0,-0.09 0.01,-0.02 0.01,-0.03 0.02,-0.05 0,-0.01 0.01,-0.02 0.01,-0.02 0.01,-0.02 0.01,-0.03 0.03,-0.04l0.02 -0.02c0,-0 0.01,-0 0.01,-0.01 0.01,-0.01 0.02,-0.02 0.04,-0.03 0.04,-0.02 0.14,-0.07 0.18,-0.08 0.19,-0.06 0.4,-0.04 0.6,0.01 0.02,0 0.03,0.01 0.05,0.01 0.05,0.02 0.08,0.03 0.13,0.06 0.03,0.02 0.05,0.03 0.06,0.06 0.02,0.02 0.04,0.05 0.04,0.08 0.02,0.05 0.03,0.1 0.01,0.15 -0,0.01 -0.01,0.01 -0.01,0.02 -0.01,0.02 -0.03,0.03 -0.04,0.04 -0,0 -0,0 -0.01,0.01 -0.04,0.03 -0.04,0.01 -0.1,-0.02 -0.01,-0 -0.02,-0.01 -0.04,-0.02l-0.04 -0.02c-0.03,-0.01 -0.09,-0.04 -0.1,-0.06 -0.01,-0.03 -0.01,-0.06 -0.01,-0.09 0,-0.06 -0,-0.06 -0.07,-0.08 -0.11,-0.03 -0.23,-0.04 -0.35,-0.01 -0.02,0.01 -0.04,0.01 -0.06,0.02 -0.02,0 -0.04,0.01 -0.04,0.04zm-0.27 -1.07c0,-0.02 0.02,-0.03 0.03,-0.03l1.02 0c0.02,0 0.03,0.02 0.03,0.03l0 0.64 -1.08 0 0 -0.64zm-0.09 -0.01l0 0.65c-0.07,0 -0.12,0 -0.18,0.04 -0.01,0.01 -0.02,0.02 -0.04,0.03 -0.02,0.02 -0.04,0.04 -0.05,0.08 -0.01,0.03 -0.03,0.07 -0.03,0.11l0 0.38c0,0.08 0.04,0.16 0.1,0.2 0.01,0.01 0.02,0.02 0.04,0.02 0.02,0.01 0.07,0.03 0.1,0.03l1.37 0c0.06,0 0.12,-0.03 0.17,-0.08 0.02,-0.02 0.04,-0.05 0.05,-0.07 0.01,-0.03 0.02,-0.06 0.02,-0.1l0 -0.38c0,-0.04 -0.01,-0.08 -0.03,-0.11 -0.03,-0.06 -0.08,-0.1 -0.13,-0.13 -0.05,-0.02 -0.08,-0.02 -0.13,-0.02l0 -0.62c0,-0.03 -0,-0.06 -0.02,-0.08 -0.01,-0.02 -0.01,-0.02 -0.03,-0.03 -0,-0 -0.01,-0 -0.01,-0.01 -0.03,-0.02 -0.05,-0.02 -0.08,-0.02l-0.97 0c-0.05,0 -0.07,0.01 -0.1,0.03 -0.02,0.02 -0.04,0.05 -0.04,0.08z"/>
                                                <path
                                                    d="M1.15 0.91c0,0.02 0.02,0.04 0.04,0.04l0.85 0c0.02,0 0.04,-0.02 0.04,-0.04 0,-0.02 -0.02,-0.04 -0.04,-0.04l-0.85 0c-0.02,0 -0.04,0.02 -0.04,0.04z"/>
                                                <path
                                                    d="M1.15 1.09c0,0.02 0.02,0.04 0.04,0.04l0.86 0c0.02,0 0.04,-0.02 0.04,-0.05 -0,-0.02 -0.02,-0.04 -0.05,-0.04l-0.84 0c-0.03,0 -0.05,0.02 -0.05,0.04z"/>
                                                <path
                                                    d="M1.15 1.27c0,0.02 0.02,0.04 0.04,0.04l0.84 0c0.02,0 0.04,-0.02 0.04,-0.04 0,-0.02 -0.02,-0.05 -0.04,-0.05l-0.85 0c-0.02,0 -0.04,0.02 -0.04,0.04z"/>
                                                <path
                                                    d="M1.62 0c0.45,0 0.85,0.18 1.14,0.47 0.29,0.29 0.47,0.7 0.47,1.14 0,0.45 -0.18,0.85 -0.47,1.14 -0.29,0.29 -0.7,0.47 -1.14,0.47 -0.45,0 -0.85,-0.18 -1.14,-0.47 -0.29,-0.29 -0.47,-0.7 -0.47,-1.14 0,-0.45 0.18,-0.85 0.47,-1.14 0.29,-0.29 0.7,-0.47 1.14,-0.47zm1.09 0.52c-0.28,-0.28 -0.66,-0.45 -1.09,-0.45 -0.43,0 -0.81,0.17 -1.09,0.45 -0.28,0.28 -0.45,0.66 -0.45,1.09 0,0.43 0.17,0.81 0.45,1.09 0.28,0.28 0.66,0.45 1.09,0.45 0.43,0 0.81,-0.17 1.09,-0.45 0.28,-0.28 0.45,-0.66 0.45,-1.09 0,-0.43 -0.17,-0.81 -0.45,-1.09z"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <p></p>
                                </div>
                                <div className="icon-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1.966mm"
                                         height="1.9662mm" version="1.1"
                                         viewBox="0 0 5.12 5.12"
                                         xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g>
                                            <metadata/>
                                            <path
                                                d="M2.94 2.5l-0 -0 0.75 -0.65 0 1.4 -0.74 -0.74zm-0.64 0.11l0.01 -0.01 0.2 0.18 0 0 0.01 0 0.01 0 0.01 0 0.01 0 0 0 0.02 0 0.01 -0 0 -0 0.01 -0 0 -0 0.01 -0 0.01 -0 0 -0 0.2 -0.18 0.01 0.01 0.74 0.74 -2.02 0 0.74 -0.74zm0.26 -0l-0.98 -0.85 1.95 0 -0.98 0.85zm-1.12 -0.77l0.75 0.65 -0 0 -0.74 0.74 0 -1.4zm2.4 -0.41l-2.56 0c-0.09,0 -0.16,0.07 -0.16,0.16l0 1.92c0,0.09 0.07,0.16 0.16,0.16l2.56 0c0.09,0 0.16,-0.07 0.16,-0.16l0 -1.92c0,-0.09 -0.07,-0.16 -0.16,-0.16zm0.42 2.82c-0.45,0.45 -1.06,0.7 -1.7,0.7 -0.64,0 -1.24,-0.25 -1.7,-0.7 -0.45,-0.45 -0.7,-1.06 -0.7,-1.7 0,-0.64 0.25,-1.24 0.7,-1.7 0.45,-0.45 1.06,-0.7 1.7,-0.7 0.64,0 1.24,0.25 1.7,0.7 0.45,0.45 0.7,1.06 0.7,1.7 0,0.64 -0.25,1.24 -0.7,1.7zm-1.7 -4.26c-1.42,0 -2.56,1.15 -2.56,2.56 0,1.41 1.15,2.56 2.56,2.56 1.41,0 2.56,-1.15 2.56,-2.56 0,-1.41 -1.15,-2.56 -2.56,-2.56z"/>
                                        </g>
                                    </svg>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EditContacts;