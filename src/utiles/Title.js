import React from 'react';
import './title.css'



export const Title =({text})=>{
    return(
        <div className='title-container'>
          <label className='container-label'>{text}</label> 
        </div>
    )
}