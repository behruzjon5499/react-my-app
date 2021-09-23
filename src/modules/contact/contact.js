import React, {useState} from 'react';
import '../../assets/styles/contact.css'
import 'font-awesome/css/font-awesome.min.css';
import {useDispatch, useSelector} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import {useHistory} from "react-router"
import {Link} from "react-router-dom";
import { FiInstagram } from 'react-icons/fi';
import { FaTelegramPlane,FaFacebookSquare,FaPhone,FaEnvelope ,FaGlobe} from 'react-icons/fa';
// toast.configure();
const Contact = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const contacts = useSelector((state) => state)
    const history = useHistory()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail  = contacts.find(contact=>contact.email===email && contact)
        const checkPhone  = contacts.find(contact=>contact.phone === phone && contact)
        if (checkEmail){
            return toast.error(     'This email already saved')
        }
        if (checkPhone){
            return toast.error('This phone already saved')
        }
        if (!email || !name || !subject || !phone) {
            return toast.warn('Please to`ldiring');
        }
        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            subject,
            phone,
            message
        }
        dispatch({type: 'ADD_CONTACT', payload: data})
        toast.success('Successfully')
        history.push('/')
    }
    return (

        <div>
            <ToastContainer />
            <section className="contact-page-section">
                <div className="container">
                    <div className="sec-title">
                        <div className="title" style={{display:'block'}}>Contact Us</div>
                        <div className="row">
                            <div className="col-md-10">
                                <h2 style={{display:'inline'}}>Let's Get in Touch.</h2>
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
                                        <form onSubmit={handleSubmit}>
                                            <div className="row clearfix">
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input type="text" name={name} placeholder="Name"
                                                           onChange={e => setName(e.target.value)}/>
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input type="email" name={email} placeholder="Email"
                                                           onChange={e => setEmail(e.target.value)}/>
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input type="text" name={subject} placeholder="Subject"
                                                           onChange={e => setSubject(e.target.value)}/>
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input type="text" name={phone} placeholder="Phone"
                                                           onChange={e => setPhone(e.target.value)}/>
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                                    <textarea name={message} placeholder="Massage"
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
                                        <li><FaGlobe />123 lorem ispum Abc, Street Chandigarh.
                                        </li>
                                        <li><FaEnvelope />example@test</li>
                                        <li><FaPhone /> 1-234-567-890 1-234-567-890</li>
                                    </ul>
                                    <ul className="social-icon-four">
                                        <li className="follow">Follow on:</li>
                                        <li><a href="#"><FiInstagram /></a></li>
                                        <li><a href="#"><FaTelegramPlane /></a></li>
                                        <li><a href="#"><FaFacebookSquare /></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <div >
                <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Tashkent%20qatortol%20xalq%20bank+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
               </div>



        </div>
    );

}

export default Contact;