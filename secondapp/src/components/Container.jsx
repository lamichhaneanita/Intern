import React from 'react'

function Container({title,price,children}) {

    return (
      <div className='Container'>
      
         {children}
         <div className='title'>
           <h2>{title}</h2>
        
        <p>{price}</p>
        </div>
      </div>
    )
  }

export default Container
