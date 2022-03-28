import React from 'react';
import './input.css'




export const Input=({atributo, handleChange, param})=>{
    return(
        <div className='input-container'>
            <input
            id={atributo.id}
            name={atributo.name}
            placeholder={atributo.placeholder}
            type={atributo.type}
            onChange={(e)=> handleChange(e.target.name, e.target.value)}
            className= {param ? 'input-error' : 'regular-style'}
            />
            </div>
    )
}