import React from 'react';
import {faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button, Input, ListGroup, ListGroupItem} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_TASK, DELETE_TASK, SET_VALUE} from "./types";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const Todo = () => {
    const value = useSelector(state => state.todo.value);
    const data = useSelector(state => state.todo.tasks);
    const dispatch = useDispatch();
    const typing = (event) => {
        const action = {
            type: SET_VALUE, payload: event.target.value
        }
        dispatch(action);
    }

    const add = () => {
        if (value === "") {
            return toast.error('Valueni kirit');
        }
        const action = {
            type: ADD_TASK, payload: value
        }
        dispatch(action);
    }
    const deleteTask = (index) => {
        const action = {
            type: DELETE_TASK, payload: index
        }
        dispatch(action)
    }
    return (

        <div className="bg-white rounded p-3 shadow">
            <ToastContainer/>
            <h1>Todo App</h1>
            <div className="d-flex mb-2">
                <Input
                    onChange={typing}
                    value={value} placeholder="new task" className="me-2"/>

                <Button color="primary" onClick={add}>
                    <FontAwesomeIcon icon={faPlus}/>
                </Button>
            </div>
            <ListGroup>
                {data?.map((item, index) => {
                        return (
                            <ListGroupItem key={index} tag="a" href="#" action
                                           className="d-flex align-items-center justify-content-between">
                                <span> {index + 1} .{item.title}</span>
                                <Button color="danger" onClick={() => deleteTask(index)}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </Button>
                            </ListGroupItem>
                        )
                    }
                )}
            </ListGroup>

        </div>
    );
}

export default Todo;