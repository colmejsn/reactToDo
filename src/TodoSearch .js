
import './style/TodoSearch.css'
import { FiSearch } from "react-icons/fi";
import React from "react";


function TodoSearch({ buscarV, setBuscar }) {

    const searchValue = (event) => {
        setBuscar(event.target.value)
    };

    return (
        <div className="div3">

            <button className='btn-search'> {<FiSearch />} </button>
            <input
                className="input-search"
                placeholder="Tarea"
                onChange={searchValue}
            />
        </div>
    );
}
export { TodoSearch };