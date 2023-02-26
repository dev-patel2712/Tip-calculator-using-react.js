import style from './Output1.module.css'
import React from 'react';

const Output1 = ({list, length, mon})=>{
const newList =list.map((item,index)=>(<li key={index}>{item}</li>))
    return (
    <>
        <div className={style.div}>
        <h2 align="center">
            Customer list
        </h2>
        < ol className={style.ol}>
            {newList}
            
        </ol>
        <br/>
    
        </div>
      
    </>
    )
}
 export default Output1;