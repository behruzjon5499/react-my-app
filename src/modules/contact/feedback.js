import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import '../../assets/styles/contact.css'
import {toast} from "react-toastify";

const Feedback = () => {

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const deleteContact = (id) => {
        dispatch({type: 'DELETE_CONTACT', payload: id});
        toast.success('DELETE Successfully');
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>All Feedbacks</h1>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-hover">
                        <thead className="text-white bg-info text-center">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Message</th>
                            <th scope="col">EDIT</th>
                            <th scope="col">DELETE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            contacts.map((contact, id) => (
                                <tr key={id}>
                                    <td>{contact.id + 1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.subject}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.message}</td>
                                    <td>
                                        <Link to={`/contact/edit/${contact.id}`}
                                              classname="btn btn-sm btn-primary ">EDIT</Link>
                                    </td>
                                    <td>
                                        <button type="button" onClick={() => deleteContact(contact.id)}
                                                className="btn btn-sm btn-danger">DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );

}

export default Feedback;