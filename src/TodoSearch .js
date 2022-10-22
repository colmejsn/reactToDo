import react from "react";
import './style/TodoSearch.css'
import { FiSearch } from "react-icons/fi";


function TodoSearch() {
    return (
        <div className="div3">            
            <button className='btn-search'> {<FiSearch/>} </button>
            <input className="input-search" placeholder="Tarea" />       
        </div>
    );
}
export { TodoSearch };