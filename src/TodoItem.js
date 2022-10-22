import React from "react";
import './style/TodoItem.css'
import { BiTrash, BiMessageSquare } from "react-icons/bi";
function TodoItem(props) {
    return (
        <div className="div4">

        <li className="todoitem" >
            <div className="div5">
            <button className='btn-search'> {<BiMessageSquare/>} </button>
            <p >{props.text}</p>
            <button className='btn-search'> {<BiTrash/>} </button>
            </div>
        </li>
        <p className="par"> </p>
        </div>
    );
}

export { TodoItem };