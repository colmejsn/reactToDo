import React from "react";
import './style/TodoCounter.css'

function TodoCounter({total,completados}){
    return(
        <div className="div2">
            <h2 className="TodoCounter">Se completaron {completados} de {total}</h2>
        </div>
        
    );
}
export {TodoCounter};
