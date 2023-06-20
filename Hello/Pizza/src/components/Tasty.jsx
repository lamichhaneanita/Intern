import React from 'react'

 const Tasty=({name,info,sign,price,children})=> {
  return (
    <div className='content'>
        <div className='wrap'>
            {children}
            <div className='wrapper'>
              <div className='name'>
               <h3>{name}</h3> <br/>
                <p>{info}</p>
                </div>
                <div className='price'>
                <p>{sign}</p><br/>
                    <h3>{price}</h3>
                   
                </div>
                </div>
        </div>
      
    </div>
  )
}
export default Tasty

// import React from 'react';

// const Pizza = ({ name, price, imageUrl }) => {
//   return (
//     <div>
//       <h3>{name}</h3>
//       <img src={imageUrl} alt={name} style={{ width: '300px' }} />
//       <p>Price: ${price}</p>
//     </div>
//   );
// };

// export default Pizza;