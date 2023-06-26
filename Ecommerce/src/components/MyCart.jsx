import React,{useState} from 'react';

const MyCart = ({ cartItems,removeItem }) => {
  
  const  TotalPrice =()=>{
    let totalPrice=0;

    cartItems.forEach((item)=>{
      totalPrice += item.price;
    });
    return totalPrice;

  };
  return (
    <>
    <h2 className='text-red-500 font-bold text-2xl flex justify-center items-center '>My Cart</h2>
    <div className='flex-row '>
     
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className= 'bg-white mt-2 px-9 p-9  h-50'>
          <ul>
             {cartItems.map((item) => (
            <>
             <li  className='flex p-4' key={item.id}> <img className='h-20 mb-2'src={item.image}/><br/><div className='mt-6 ml-5'>{item.title}</div><br/>
             <div className='mt-6 ml-9'>${item.price}</div></li>
             <button className='bg-orange-600 'onClick={() => removeItem(item.id)}> Remove</button>
            </>
          ))}
           
        </ul>
       </div>
      )}
       <p className='font-bold ml-60'>Total Price: ${TotalPrice()}</p>
    </div>
    </>
  );
};

export default MyCart;


