
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
const Description = ({addToCart}) => {
  const {id} = useParams();
  const [product, setProduct] =useState(null);
  useEffect(() =>{
    const fetchProduct = async () =>{
      try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json();
        setProduct(data);
      }catch(error){
        console.error('Error fetching product:',error);
      }
    };
    fetchProduct();
  },[id]);
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  if(!product){
    return <div>LOading....</div>
  }
  return (
    <div className=' container  mx-10 my-6 px-7'>
      <img className='  h-60 object-cover mb-2' src={product.image} alt={product.title} />
      <h2 className=' font-bold'>{product.title}</h2>
      <div className="mb-2"><p className='font-bold'>Details:</p>{product.description}</div>
      <p className='text-orange-600'>Price: ${product.price}</p>
      <div className='bg-gray-100  shadow-md'>
      <h3 className='text-xl'>Rating</h3>
      <p className='ml-4'>Rate:{product.rating.rate}</p>
      <p className='ml-4'>Count:{product.rating.count}</p>
     </div>
     < button className="bg-yellow-300 w-400 ml-4 rounded-sm"onClick={() => handleAddToCart(product)} >
                Add to cart
              </button>
    </div>
  )
}

export default Description
