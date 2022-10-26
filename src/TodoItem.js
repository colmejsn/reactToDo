import React from "react";
import './style/TodoItem.css'
import { BiTrash, BiMessageSquare,BiMessageSquareCheck } from "react-icons/bi";
function TodoItem(props) {
const mostrarico = props.text.completed ? (<BiMessageSquareCheck/>) : (<BiMessageSquare />);

    return (
        <div className="div4">
            
            <li className="todoitem" >
                
                <div className="div5">
                    <button className={ props.text.completed ?'check':'btn-normal'}
                        onClick={props.oncomplete}
                    >
                        {mostrarico}                        
                    </button>

                    <p className="letraa">{props.text.text}</p>
                    <button className='btn-normal'
                        onClick={props.ondelete}
                    >
                        {<BiTrash />}
                    </button>
                </div>
            </li>
            <p className="par"></p>
        </div>

    );
}

export { TodoItem };