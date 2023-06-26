
import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';

const Home = ({addToCart}) => {
        const [products, setProducts] = useState([]);
       
        useEffect(() => {
            const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=10');
                const data = await response.json();
                setProducts(data);
              } catch (error) {
                console.error('Error fetching products:', error);
              }
            };
      
          fetchProducts();
        }, []);
       
       
        const handleAddToCart = (product) => {
          addToCart(product);
          alert("Item Added Successfully");
        };
        return (
          <div className="container mx-auto  mt-8 px-4">
          
            <div className="flex flex-wrap   gap-6">
              {products.map((product) => {
                const {title ,id , price , image} = product;
                return (
                  <div className=" bg-white border-2 w-1/5 border-sky-200" key={id} >
              <Link to ={`/product/${id}`}>
               
                <img className=' h-40 ml-9 mb-5' src={image}/>
                <h2 className='text-xl text-blue-500'>{title}</h2><br/>
                {/* <p>{product.description}</p> */}
                <p className='mt-7 text-orange-600'>Price: ${price}</p>
            
                </Link>
                < button className="bg-yellow-300 w-full rounded-sm"onClick={() => handleAddToCart(product)} >
                Add to cart
              </button>
                </div>
           
            
            
               );
              })}
            </div> 
          </div>
        );
      };
export default Home
